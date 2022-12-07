import types from "../types"

export const themeAction = (mode)=>{
    return{
        type:types.THEME_CHANGE,
        payload:mode
    }
}