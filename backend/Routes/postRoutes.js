const express = require('express');
const postRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validator = require('../Middlewares/validator');
const PostModel = require('../Models/postModel');
const auth = require('../Middlewares/authMiddleware');

postRouter.get('/getPosts', async(req, res) => {
    try {
       const posts = await PostModel.find().populate('author', 'userName');
       res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({msg : error.message});
    }
})


postRouter.post('/createPost', auth, async(req, res) => {
    try {
       const post = await PostModel.create({...req.body});
       res.status(200).send({msg : 'Post added successfully', post});
    } catch (error) {
        res.status(400).send({msg : error.message});
    }
})


module.exports = postRouter;