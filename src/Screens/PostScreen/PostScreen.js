//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FormikPostUploader from '../../Components/formikPostUploader';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { styles } from './style';

// create a component
const PostScreen = ({navigation,route}) => {
    const theme = useSelector(state=> state.themeReducer.mode)
    return (
        <View style={theme==='light'? styles.containerlight:styles.containerDark}>
            <Header
            leftArrow={imagePath.icBack}
            middleText={"Add post"}
            onPressBackArrow={()=>{
                navigation.navigate(navigationStrings.HOME)
                console.log("onpressBackAroww called")
            }}
            tick={imagePath.icTick}
            onTickPress
            />
            <FormikPostUploader/>
        </View>
    );
};

//make this component available to the app
export default PostScreen;
