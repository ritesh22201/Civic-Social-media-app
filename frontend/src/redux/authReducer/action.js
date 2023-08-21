import { SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionTypes"
import axios from 'axios';

export const signup = (formData) => (dispatch) => {
    dispatch({type : SIGNUP_REQ});
    axios.post('https://civic-social.onrender.com/users/register', formData)
    .then(res => {
        console.log(res)
        dispatch({type : SIGNUP_SUCCESS, payload : res.data.msg});
    })
    .catch(err => {
        console.log(err)
        dispatch({type : SIGNUP_FAILURE, payload : err.message});
    })
}