//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import MainStack from './MainStack';

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
