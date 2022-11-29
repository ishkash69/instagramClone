//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../Components/Header';
import Stories from '../../Components/stories';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
           <Header 
           logo={imagePath.headerLogo}
           icon1={imagePath.more}
           icon2={imagePath.dm}
           />
           <Stories/>
        </View>
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
export default Home;
