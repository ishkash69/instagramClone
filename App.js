//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import strings from './src/constants/lang';
import Routes from './src/Navigation/Routes';
import Home from './src/Screens/Home/Home';
import colors from './src/styles/colors';
import { moderateScale } from './src/styles/responsiveSize';
import { getLang, storeLang } from './src/utils/utils';
// create a component
const App = () => {
  useEffect(() => {
    changeLang()
  }, [])

  const changeLang = async () => {
    let curr_lang = await getLang();
    if (curr_lang!==null) {
      strings.setLanguage(curr_lang)
      console.log(curr_lang, "respose current language")
    } else {
      strings.setLanguage("en")
    }

  }
  return (


    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
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
