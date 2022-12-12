//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { styles } from '../Screens/PostScreen/style';
import NavigationService from './NavigationService';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';


// create a component
const Routes = () => {

    const userData = useSelector(state=> state.userStates.userData)
    console.log(userData,"in the auth stack")
    return (
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)}>
            {!!userData ?
                <>
                    {MainStack()}
                </> :
                <>
                    {AuthStack()}
                </>}
                {/* <>
                {AuthStack()}
                </> */}

        </NavigationContainer>
    );
};
export default Routes;
