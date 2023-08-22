import axios from "axios";
import { GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from "./actionTypes"

export const getPost = () => (dispatch) => {
    dispatch({type : GET_POST});
    axios.get('https://civic-social.onrender.com/posts/getPosts')
    .then(res => {
        dispatch({type : GET_POST_SUCCESS, payload : res.data});
    })
    .catch(err => {
        dispatch({type : GET_POST_FAILURE, payload : err.message})
    })
}