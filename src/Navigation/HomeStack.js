//import liraries
import { BottomTabBar } from '@react-navigation/bottom-tabs';
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
            <Stack.Screen 
            name={navigationStrings.POSTSCREEN}
            component={Screens.PostScreen}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
