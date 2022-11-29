//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

// create a component
const Header = ({
    icon1,
    icon2,
    icon3,
    iconStyle,
    logo,
    logoStyle,
    headerStyle,
    iconContainer,

}) => {
    return (
        <View style={{ ...styles.container, ...headerStyle }}>

            <TouchableOpacity>
                <Image style={{ ...logoStyle, ...styles.logoStyle }} source={logo} />
            </TouchableOpacity>

            <View style={{ ...styles.iconContainer, ...iconContainer }}>
                <TouchableOpacity>
                    <Image style={{ ...styles.icons, ...iconStyle }} source={icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={ styles.unReadBadge}>
                            <Text style={styles.unReadBadgeText}>{"12"}</Text>
                        </View>
                    <Image style={{ ...styles.icons, ...iconStyle }} source={icon2} />
                </TouchableOpacity>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: moderateScale(16),
    },
    iconContainer: {
        flex:0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    logoStyle: {
        tintColor: colors.white,
        height: moderateScaleVertical(50),
        width: moderateScale(100),
        resizeMode: 'contain'
    },
    icons: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        resizeMode: "contain",
        tintColor: colors.white,
    },
    unReadBadge:{
        position:'absolute',
        backgroundColor:colors.red,
        left:14,
        bottom:20,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
    },
    unReadBadgeText:{
        color:colors.white,
        fontWeight:'bold'
    }
});

//make this component available to the app
export default Header;
