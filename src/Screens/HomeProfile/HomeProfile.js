//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CommonComponent from '../../Components/CommonComponent';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const HomeProfile = ({navigation, routes}) => {

    
    return (
        <View style={styles.container}>
            <CommonComponent
            text={"Change Language"}
            arrow={">"}
            onPress={()=>{
                navigation.navigate(navigationStrings.CHANGELANGUAGE)
            }}
            />
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.black
    },
});

//make this component available to the app
export default HomeProfile;
