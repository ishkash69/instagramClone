import {combineReducers} from 'redux';
import themeReducer from './themeReducer';
import { userStates } from './authReducer';

const appReducer = combineReducers({
    themeReducer:themeReducer,
    userStates:userStates,
    
    
})
export default appReducer