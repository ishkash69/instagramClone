//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown:false,gestureEnabled:false}}
        />
      </Stack.Navigator>
    );
};

export default MainStack;
