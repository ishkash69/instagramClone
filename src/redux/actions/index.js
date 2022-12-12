import { themeAction } from "./themeAction";
import { userLogin,userLogOut } from "./authAction";

export default{
    ...themeAction,
    ...userLogin,
    ...userLogOut,
}