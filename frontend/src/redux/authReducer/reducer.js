import { SIGNUP_FAILURE, SIGNUP_REQ, SIGNUP_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    isAuth : false,
    registerMsg : '',
    registerErr : '',
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

        default : {
            return state;
        }
    }
}