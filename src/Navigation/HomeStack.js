//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationStrings from '../constants/navigationStrings';

import * as Screens from "../Screens"

const Stack = createNativeStackNavigator()
// create a component
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={navigationStrings.HOME}
            component={Screens.Home}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
