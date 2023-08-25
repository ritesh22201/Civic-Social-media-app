import axios from "axios";
import { GET_LIKE, GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from "./actionTypes"


export const getPost = () => (dispatch) => {
    dispatch({type : GET_POST});
    axios.get('https://dizzy-gold-bell-bottoms.cyclic.cloud/posts/getPosts')
    .then(res => {
        dispatch({type : GET_POST_SUCCESS, payload : res.data});
    })
    .catch(err => {
        dispatch({type : GET_POST_FAILURE, payload : err.message})
    })
}

export const likePost = (postId) => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('token')) || '';
    const config = {
        headers : {
            'Authorization' : `Bearer ${data?.token}`
        }
    }
  
    dispatch({type : GET_LIKE});
    axios.post(`https://dizzy-gold-bell-bottoms.cyclic.cloud/posts/like/${postId}`,null, config)
    .then(res => {
        // console.log(res);
    })
    .catch(err => {
        // console.log(err)
    })
}

export const unlikePost = (postId) => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('token')) || '';
    const config = {
        headers : {
            'Authorization' : `Bearer ${data?.token}`
        }
    }
    dispatch({type : GET_LIKE});
    axios.post(`https://dizzy-gold-bell-bottoms.cyclic.cloud/posts/unlike/${postId}`,null, config)
    .then(res => {
        // console.log(res);
    })
    .catch(err => {
        // console.log(err)
    })
}