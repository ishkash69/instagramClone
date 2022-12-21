//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../../styles/colors';
import { moderateScaleVertical, textScale } from '../../../styles/responsiveSize';
import firestore from '@react-native-firebase/firestore';


import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { store } from '../../../redux/store';
import { userLogin } from '../../../redux/actions/authAction';
import tables from '../../../constants/tables';

// create a component
const Login = () => {
    const theme = useSelector(state => state.themeReducer.mode)
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ["email"]
        })
    })
    const _onSave = (userInfo) => {
        // console.log(userInfo,"_onSave")
        let user = userInfo.user
        const userObject = {
            id: user.id,
            email: user.email,
            familyName: user.familyName,
            givenName: user.givenName,
            name: user.name,
            photo: user.photo
        }
        firestore().collection(tables.USERS)
            .doc(user.id)
            .set(userObject)
            .then(() => {
                store.dispatch(userLogin(userInfo))
                // console.log("user added")
            }).catch(error => console.log(error, "error during saving the user"))

    }
    const _ifUserExist = (userInfo) => {
        // console.log(userInfo.user)
        let user = userInfo.user
        firestore().collection(tables.USERS)
            .doc(user.id)
            .get()
            .then(snapShot => {
                if (snapShot.data()) {
                    store.dispatch(userLogin(userInfo))
                    // console.log("user already exist")
                } else {
                    _onSave(userInfo)
                }
            })
    }

    const googleSignIn = async () => {
        setLoader(true)
        try {
            await GoogleSignin.hasPlayServices();
            let userInfo = await GoogleSignin.signIn();
            _ifUserExist(userInfo)
        } catch (error) {
            if (statusCodes.SIGN_IN_CANCELLED) {
                setLoader(false)
            }
            console.log(error, "error raised in google login")
        }
    }

    return (
        <View style={theme === "light" ? styles.containerLight : styles.containerDark}>
            <TouchableOpacity
                onPress={googleSignIn}
                style={styles.btnContainer}
            >
                <Text
                    style={styles.btnText}
                >Google Login </Text>
            </TouchableOpacity>
            {loader ? <ActivityIndicator size={"large"} /> : null}
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
    btnContainer: {
        borderWidth: 1,
        width: "80%",
        alignItems: 'center',
        borderColor: colors.button,
        borderRadius: 10,
        padding: 14,
        backgroundColor: colors.button,
        marginBottom: moderateScaleVertical(20),

    },
    btnText: {
        color: colors.white,
        fontSize: textScale(14),
        fontWeight: 'bold'
    }
})

//make this component available to the app
export default Login;
