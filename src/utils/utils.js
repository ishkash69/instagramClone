import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem("language", value);
    console.log(value, "value in utils +++language")
  } catch (error) {
    console.log(error, 'error')
  }
}
export const storetheme = async (value) => {
  try {
    await AsyncStorage.setItem("theme", value);
    console.log(value, "value in utils +++ theme")
  } catch (error) {
    console.log(error, 'error')
  }
}

