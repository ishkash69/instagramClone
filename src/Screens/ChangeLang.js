//import liraries
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import strings from '../constants/lang';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import RNRestart from 'react-native-restart';
import { getLang,storeLang } from '../utils/utils';
// create a component
const ChangeLang = ({navigation,route}) => {

    const setText = async (value)=>{
        strings.setLanguage(value);
        storeLang(value)
        console.log(value,"fiadhsfhadsfjkadhsfkadsfkla")
        RNRestart.Restart();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>{
                setText("en")
            }}
                style={styles.languageContainer}
                activeOpacity={1}>
                <Text style={styles.textStyle}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                setText("ar")
            }}
                style={{...styles.languageContainer,marginTop:moderateScaleVertical(0)}}
                activeOpacity={1}>
                <Text style={styles.textStyle}>Arabic</Text>
               
            </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
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
    }
});

//make this component available to the app
export default ChangeLang;
