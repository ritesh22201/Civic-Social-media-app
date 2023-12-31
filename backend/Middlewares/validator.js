const UserModel = require("../Models/userModel");

const validator = async(req, res, next) => {
    const { email, password } = req.body;

    if(password.length < 8){
        return res.status(400).send({msg : 'Password must be of at least 8 characters!'});
    }

    if(!/\d/.test(password)){
        return res.status(400).send({msg : 'Password must contain a number!'});
    }

    if(!/[!@#$%&]/.test(password)){
        return res.status(400).send({msg : 'Password must contain a special character!'});
    }

    if(!/[A-Z]/.test(password)){
        return res.status(400).send({msg : 'Password must contain an uppercase character!'});
    }

    const existedUser = await UserModel.findOne({email});
    if(existedUser){
        return res.status(400).send({msg : 'User already registered, please login!'});
    }

    next();
}

module.exports = validator;