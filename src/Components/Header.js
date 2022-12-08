//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
// create a component
const Header = ({
    icon1,
    icon2,
    iconStyle,
    logo,
    logoStyle,
    headerStyle,
    iconContainer,
    middleText,
    leftArrow,
    onAddPostPress = () => { },
    showbadge,
    showHeaderRightLogo,
    onPressLogo,
    onPressBackArrow,


}) => {
    const theme = useSelector(state => state.themeReducer.mode)
    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <TouchableOpacity onPress={leftArrow ? onPressBackArrow : null || logo ? onPressLogo : null}>
                {logo ? <Image style={{ ...logoStyle, ...theme === "light" ? styles.logoStyleLight : styles.logoStyleDark }} source={logo} /> : null}
                {leftArrow ? <Image style={
                    theme === 'light' ? styles.arrowLight : styles.arrowDark
                } source={leftArrow} /> : null}
            </TouchableOpacity>
            {middleText ? <View style={{ flex: 1 }}>
                <Text
                    style={theme=== 'light'?styles.middleTextLight:styles.middleTextDark }
                >{middleText}</Text>
            </View> : null}

            {showHeaderRightLogo ? <View style={{ ...styles.iconContainer, ...iconContainer }}>
                <TouchableOpacity
                    onPress={onAddPostPress}
                >
                    <Image style={{ ...theme === 'light' ? styles.iconsLight : styles.iconsDark, ...iconStyle }} source={icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {showbadge ? <View style={styles.unReadBadge}>
                        <Text style={styles.unReadBadgeText}>{"12"}</Text>
                    </View> : null}
                    <Image style={{ ...theme === 'light' ? styles.iconsLight : styles.iconsDark, ...iconStyle }} source={icon2} />
                </TouchableOpacity>
            </View> : null
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: moderateScale(12),
    },
    iconContainer: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    logoStyleDark: {
        tintColor: colors.white,
        height: moderateScaleVertical(50),
        width: moderateScale(150),
        // resizeMode: 'contain'
    },
    logoStyleLight: {
        tintColor: colors.black,
        height: moderateScaleVertical(50),
        width: moderateScale(150),
        // resizeMode: 'contain'
    },
    iconsDark: {
        width: moderateScale(28),
        height: moderateScaleVertical(28),
        resizeMode: "contain",
        tintColor: colors.white,
    },
    iconsLight: {
        width: moderateScale(28),
        height: moderateScaleVertical(28),
        resizeMode: "contain",
        tintColor: colors.black,
    },
    unReadBadge: {
        position: 'absolute',
        backgroundColor: colors.red,
        left: 10,
        bottom: 20,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unReadBadgeText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    arrowDark: {
        tintColor: colors.white,
        height: moderateScaleVertical(18),
        width: moderateScale(18)
    },
    arrowLight: {
        tintColor: colors.black,
        height: moderateScaleVertical(18),
        width: moderateScale(18)
    },
    middleTextDark: {
        color: colors.white,
        fontSize: textScale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: moderateScaleVertical(20)
    },
    middleTextLight: {
        color: colors.black,
        fontSize: textScale(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: moderateScaleVertical(20)
    }
});

//make this component available to the app
export default Header;
