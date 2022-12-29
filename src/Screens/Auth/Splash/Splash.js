//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../constants/navigationStrings';
import colors from '../../../styles/colors';
import { moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize';

// create a component
const Splash = ({navigation}) => {
    const theme = useSelector(state=> state.themeReducer.mode)
    const userData = useSelector(state=> state.userStates.userData)
    console.log(userData,"this is data in the splash screen")
    useEffect(()=>{
        setTimeout( () => {
            if(!!userData){
                console.log("user is not logged in")
            }else{
                navigation.navigate(navigationStrings.LOGIN)
            }
            
        }, 5000);
    })

    return (
        <View style={theme=== "light"?styles.containerLight:styles.containerDark}>
            <Image style={styles.instaIcon} source={imagePath.instaIcon}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black
    },
    containerLight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    instaIcon:{
        height:moderateScaleVertical(80),
        width:moderateScale(80)
    }
});

//make this component available to the app
export default Splash;
