//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

// create a component
const CommonComponent = ({
    text,
    textStyle,
    onPress=()=>{},
    languageContainer,
    arrow,
    arrowStyle,
}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity 
           activeOpacity={1}
           onPress={onPress}
           style={{...styles.languageContainer,...languageContainer}}>
            <Text style={{...styles.textStyle,...textStyle}}>{text}</Text>
            <Text style={{...styles.arrowStyle,...arrowStyle}}>{arrow}</Text>

           </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       backgroundColor:colors.black
    },
    languageContainer: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(10),
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomColor: colors.blackOpacity15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScaleVertical(20)
    },

    textStyle: {
        fontWeight: 'bold',
        fontSize: textScale(18),
        color: colors.white,
        fontFamily: fontFamily.ExtraBold
    },
    arrowStyle:{
        fontSize:textScale(30),
        color:colors.white,
        fontFamily:fontFamily.ExtraBold
    }
});

//make this component available to the app
export default CommonComponent;
