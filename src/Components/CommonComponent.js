//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
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
    const theme = useSelector(state=>state.themeReducer.mode)
    return (
        // <View style={styles.container}>
           <TouchableOpacity 
           activeOpacity={1}
           onPress={onPress}
           style={{...theme==="light"? styles.languageContainerLight:styles.languageContainerDark,...languageContainer}}>
            <Text style={{...theme=== 'light'? styles.textStyleLight:styles.textStyleDark,...textStyle}}>{text}</Text>
            <Text style={{...theme === 'light'? styles.arrowStyleLight:styles.arrowStyleDark,...arrowStyle}}>{arrow}</Text>

           </TouchableOpacity>
        // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //    backgroundColor:colors.black
    // },
    languageContainerDark: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(10),
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomColor: colors.blackOpacity15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScaleVertical(20),
        backgroundColor:colors.black
    },
    languageContainerLight: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(10),
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomColor: colors.blackOpacity15,
        borderTopColor:colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScaleVertical(20),
        backgroundColor:colors.white
    },

    textStyleDark: {
        fontWeight: 'bold',
        fontSize: textScale(18),
        color: colors.white,
        fontFamily: fontFamily.ExtraBold
    },
    textStyleLight: {
        fontWeight: 'bold',
        fontSize: textScale(18),
        color: colors.black,
        fontFamily: fontFamily.ExtraBold
    },
    arrowStyleDark:{
        fontSize:textScale(30),
        color:colors.white,
        fontFamily:fontFamily.ExtraBold
    },
    arrowStyleLight:{
        fontSize:textScale(30),
        color:colors.black,
        fontFamily:fontFamily.ExtraBold
    }
});

//make this component available to the app
export default CommonComponent;
