import { combineReducers } from 'redux' ;
import {inquery} from './inqueryReducers' ;
import { login} from './authReducers' ;
import  { loader } from './loaderReducers' ;
import { message } from './messageReducers' ;

const rootReducer = combineReducers({
    inquery: inquery,
    login: login,
    loader:loader,
    message:message
}) ;

export default rootReducer ;