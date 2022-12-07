import types from "../types";
import { storetheme } from "../../utils/utils";
const initialState = {
    mode: "light"
}


export default function themeReducer(state = initialState,action){
    switch(action.type){
        case types.THEME_CHANGE:
            let mode = action.payload
            console.log(mode,"action.payload")
            storetheme(mode)
            return{
                ...state,
                mode: mode
            }
        default:
            return{
                ...state
            }
    }
}    
