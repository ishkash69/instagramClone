import types from "../types";
import { storeUser,clearUserData } from "../../utils/utils";
const initialState = {
    userData:[]
}
 export const userStates= (state = initialState,action)=>{
    switch(action.type){
        case types.USER_LOGIN:{
            const data = action.payload
            storeUser(data)
            // console.log(data,"this is action payload in userStates")
            return{
                ...state,userData:data
            }
        }
        case types.USER_LOGOUT:{
            clearUserData();
            return{
                userData: null
            }

        }
        default:return {...state}
    }
 }