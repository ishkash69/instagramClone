import {combineReducers} from 'redux';
import themeReducer from './themeReducer';

const appReducer = combineReducers({
    themeReducer:themeReducer
})
export default appReducer