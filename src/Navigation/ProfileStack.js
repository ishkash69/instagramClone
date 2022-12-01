//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from "../Screens"

const Stack =createNativeStackNavigator()
// create a component
const ProfileStack = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
            name={navigationStrings.HOME_PROFILE} 
            component={Screens.HomeProfile}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name={navigationStrings.CHANGELANGUAGE} 
            component={Screens.ChangeLanguage}
            options={{headerShown:false}}
            />

        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProfileStack;
