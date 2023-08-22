import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {reducer as authReducer} from './authReducer/reducer';
import {reducer as postReducer} from './postReducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducer,
    postReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));