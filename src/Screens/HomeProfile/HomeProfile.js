//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const HomeProfile = ({navigation, routes}) => {

    
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate(navigationStrings.CHANGELANGUAGE)
            }}
            style={styles.languageContainer}
            activeOpacity={1}>
                <Text style={styles.textStyle}>Change Language</Text>
                <Text style={{
                    fontSize:30,
                    color:colors.white,
                    fontFamily:fontFamily.ExtraBold}}>{">"}</Text>
            </TouchableOpacity>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.black
    },
    languageContainer:{
        paddingHorizontal:moderateScale(10),
        paddingVertical:moderateScaleVertical(10),
        justifyContent:'space-between',
        borderWidth:1,
        borderBottomColor:colors.blackOpacity15,
        flexDirection:'row',
        alignItems:'center',
        marginTop:moderateScaleVertical(20)
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:textScale(18),
        color:colors.white,
        fontFamily: fontFamily.ExtraBold
    }
});

//make this component available to the app
export default HomeProfile;
