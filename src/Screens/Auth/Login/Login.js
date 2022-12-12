//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../../styles/colors';
import { moderateScaleVertical, textScale } from '../../../styles/responsiveSize';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import { store } from '../../../redux/store';
import { userLogin } from '../../../redux/actions/authAction';

// create a component
const Login = () => {
    const theme = useSelector(state=> state.themeReducer.mode)
    const userData = useSelector(state=>state.userStates.userData)
    console.log(userData,"this is user data in login screen")

    useEffect(()=>{
        GoogleSignin.configure({
            scopes:["email"]
        })
    })

    const googleSignIn = async ()=>{
        try {
            await GoogleSignin.hasPlayServices();
            let userInfo = await GoogleSignin.signIn();
            store.dispatch(userLogin({userInfo}))
        } catch (error) {
            console.log(error,"error raised in google login")
        }
    }
    return (
        <View style={theme=== "light"? styles.containerLight:styles.containerDark}>
            <TouchableOpacity
            onPress={googleSignIn}
            style={styles.btnContainer}
            >
                <Text
                style={styles.btnText}
                >Google Login </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.black,

    },
    containerLight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    btnContainer:{
        borderWidth:1,
        width:"80%",
        alignItems:'center',
        borderColor:colors.button,
        borderRadius:10,
        padding:14,
        backgroundColor: colors.button,
        marginBottom:moderateScaleVertical(20),

    },
    btnText:{
        color:colors.white,
        fontSize:textScale(14),
        fontWeight:'bold'
    }
})

//make this component available to the app
export default Login;
