import { GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionTypes"
import axios from 'axios';

const data = JSON.parse(localStorage.getItem('token')) || '';

export const signup = (formData) => (dispatch) => {
    dispatch({type : SIGNUP_REQ});
    axios.post('https://dizzy-gold-bell-bottoms.cyclic.cloud/users/register', formData)
    .then(res => {
        // console.log(res)
        dispatch({type : SIGNUP_SUCCESS, payload : res.data.msg});
    })
    .catch(err => {
        // console.log(err)
        dispatch({type : SIGNUP_FAILURE, payload : err.message});
    })
}

export const login = (formData) => (dispatch) => {
    dispatch({type : SIGNUP_REQ});
    axios.post('https://dizzy-gold-bell-bottoms.cyclic.cloud/users/login', formData)
    .then(res => {
        if(res.data.msg){
            localStorage.setItem('token', JSON.stringify(res.data))
        }
        dispatch({type : LOGIN_SUCCESS, payload : res.data.msg});
    })
    .catch(err => {
        dispatch({type : LOGIN_FAILURE, payload : err.message});
    })
}

export const getUsers = () => (dispatch) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${data.token}`
        }
    }

    dispatch({type : SIGNUP_REQ});
    axios.get('https://dizzy-gold-bell-bottoms.cyclic.cloud/users/',config)
    .then(res => {
        dispatch({type : GET_USERS_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_USERS_FAILURE});
    })
}