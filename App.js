//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/Screens/Home/Home';
import colors from './src/styles/colors';
import { moderateScale } from './src/styles/responsiveSize';
// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.black
  },
});

//make this component available to the app
export default App;
