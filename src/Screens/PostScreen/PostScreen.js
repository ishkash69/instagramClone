//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { styles } from './style';

// create a component
const PostScreen = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <Header
            leftArrow={imagePath.icBack}
            middleText={"Add post"}
            onPressBackArrow={()=>{
                navigation.navigate(navigationStrings.HOME)
                console.log("onpressBackAroww called")
            }}
            />
        </View>
    );
};

//make this component available to the app
export default PostScreen;
