//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import CommonComponent from '../../Components/CommonComponent';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const HomeProfile = ({navigation, routes}) => {
    const theme = useSelector(state=>state.themeReducer.mode)
    return (
        <View style={theme=== 'light'? styles.containerLight:styles.containerDark}>
          <View style={{marginTop:moderateScaleVertical(20)}}>
          <CommonComponent
            text={"Change Language"}
            arrow={">"}
            onPress={()=>{
                navigation.navigate(navigationStrings.CHANGELANGUAGE)
            }} 
            />
            <CommonComponent 
            text={"LogOut"}
            />
          </View>
     
            
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        backgroundColor:colors.black,
    },
    containerLight: {
        flex: 1,
        backgroundColor:colors.white
    },
});

//make this component available to the app
export default HomeProfile;
