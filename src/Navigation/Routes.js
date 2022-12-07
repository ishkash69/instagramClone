//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { styles } from '../Screens/PostScreen/style';

// create a component
const Routes = () => {
    return (
        <NavigationContainer>
            <>
            {MainStack()}
            </>
        </NavigationContainer>
    );
};
export default Routes;
