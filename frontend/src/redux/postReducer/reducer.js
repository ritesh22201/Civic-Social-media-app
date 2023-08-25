import { GET_LIKE, GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    posts : [],
    errorMsg : '',
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case GET_POST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
            }
        }

        case GET_POST_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                posts : payload
            }
        }

        case GET_POST_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                errorMsg : payload
            }
        }

        case GET_LIKE : {
            return {
                ...state,
                isLoading : false,
                isError : false,
            }
        }

        default : {
            return state;
        }
    }
}