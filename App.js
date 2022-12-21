//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Appearance, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import strings from './src/constants/lang';
import Routes from './src/Navigation/Routes';

import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import colors from './src/styles/colors';
import { notificationListener, requestUserPermission } from './src/utils/NotificationService';
import { themeAction } from './src/redux/actions/themeAction';
import { getUser, storetheme } from './src/utils/utils';
import { userLogin } from './src/redux/actions/authAction';

const App = () => {
  useEffect(() => {
    gettheme();
    getUser();
    getLang();
    requestUserPermission()
    notificationListener()
    const listener = Appearance.addChangeListener(colorTheme=>{
      // console.log(colorTheme,"useEffect")
      store.dispatch(themeAction(colorTheme.colorScheme=== 'light'? 'light': 'dark'))
      setMode(colorTheme.colorScheme)
  })
  return()=>{
      listener;
  } 
  }, [])
  const[mode,setMode]=useState()
  // console.log(mode,'mode in the app.js')


  const gettheme = async () => {
    try {
      let theme = await AsyncStorage.getItem('theme')
      setMode(theme)
      // console.log(theme, "theme mode")
      store.dispatch(themeAction(theme === 'dark' ? "dark" : "light"))
      
    } catch (error) {
      console.log(error, "error")
    }
  }


  const getLang = async () => {
    try {
      let value = await AsyncStorage.getItem('language');
      // console.log(value, "language")
      if (!!value) {
        strings.setLanguage(value)
      } else {
        strings.setLanguage("en")
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
  return (
    <SafeAreaView style={mode==="light"? styles.containerLight:styles.containerDark}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: colors.black
  },
  containerLight: {
    flex: 1,
    backgroundColor: colors.white
  }
});

//make this component available to the app
export default App;
