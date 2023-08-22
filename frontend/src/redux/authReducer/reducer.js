import { GET_USERS_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    isAuth : false,
    registerMsg : '',
    registerErr : '',
    loginErr : '',
    users : []
}
export const reducer = (state = initialState, {type, payload}) => {
    switch(type){

        case SIGNUP_REQ : {
            return {
                ...state, 
                isLoading : true,
                isError : false
            }
        }

        case SIGNUP_SUCCESS : {
            return {
                ...state, 
                isLoading : false,
                isError : false,
                registerMsg : payload
            }
        }

        case SIGNUP_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                registerErr : payload
            }
        }

        case LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuth : true,
            }
        }

        case LOGIN_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAuth : false,
                loginErr : payload
            }
        }

        case GET_USERS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                users : payload
            }
        }

        default : {
            return state;
        }
    }
}