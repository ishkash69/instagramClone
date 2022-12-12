import AsyncStorage from "@react-native-async-storage/async-storage"
import { userLogin } from "../redux/actions/authAction";
import { store } from "../redux/store";

export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem("language", value);
    // console.log(value, "value in utils +++language")
  } catch (error) {
    console.log(error, 'error')
  }
}
export const storetheme = async (value) => {
  try {
    await AsyncStorage.setItem("theme", value);
    // console.log(value, "value in utils +++ theme")
  } catch (error) {
    console.log(error, 'error')
  }
}
export const storeUser = async (value)=>{
  try {
    const userData = JSON.stringify(value)
    await AsyncStorage.setItem("userData",userData)
    console.log("user data in utils",userData)
  } catch (error) {
    console.log(error,'error raised in the utils')
  }
}

export const getUser = async ()=>{
  try {
    const savedItem = await AsyncStorage.getItem("userData")
    let parsedValue = JSON.parse(savedItem)
    console.log(parsedValue,'this is saved user data')
    store.dispatch(userLogin(parsedValue))
  } catch (error) {
    console.log(error)  
  }
}

