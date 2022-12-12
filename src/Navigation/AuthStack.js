
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator     } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from "../Screens/index"

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={navigationStrings.SPLASH}
            component={Screens.Splash}
            options={{headerShown:false}}
            />
            <Stack.Screen 
            name={navigationStrings.LOGIN}
            component={Screens.Login}
            options={{headerShown:false}}

            />
        </Stack.Navigator>
    );
};

export default AuthStack;
