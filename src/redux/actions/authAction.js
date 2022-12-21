import types from "../types";

export const userLogin = (data)=>{
    return{
        type:types.USER_LOGIN,
        payload:data
    }
}
export const userLogOut = ()=>{
    return{
        type:types.USER_LOGOUT,
    }
}