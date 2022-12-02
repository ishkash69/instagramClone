import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem('language', value);
    console.log(value,"value in utils ++ storeLang")
  } catch (error) {
    console.log(error, 'error')
  }
  }

