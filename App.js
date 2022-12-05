//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import strings from './src/constants/lang';
import Routes from './src/Navigation/Routes';

import colors from './src/styles/colors';

import { notificationListener, requestUserPermission,onDisplayNotification } from './src/utils/NotificationService';

// create a component
const App = () => {
  useEffect(() => {
    requestUserPermission()
    notificationListener()
    // onDisplayNotification()
    getLang();
  }, [])
  const getLang = async () => {
    try {
      let value = await AsyncStorage.getItem('language');
      console.log(value, "language")
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


    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
});

//make this component available to the app
export default App;
