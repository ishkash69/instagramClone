//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    onAddPostPress =()=>{},
    showbadge,
    showHeaderRightLogo,
    onPressLogo,
    onPressBackArrow,
    

}) => {
    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <TouchableOpacity onPress={leftArrow? onPressBackArrow:null || logo? onPressLogo: null}>
               {logo? <Image style={{ ...logoStyle, ...styles.logoStyle }} source={logo} />:null}
                {leftArrow?<Image style={{
                    tintColor:colors.white,
                    height:moderateScaleVertical(18),
                    width:moderateScale(18)
                    }} source={leftArrow}/>:null}
            </TouchableOpacity>
           {middleText? <View style={{flex:1}}>
            <Text
            style={{color:colors.white,
                fontSize:textScale(20),
                fontWeight:'bold',
                textAlign:'center',
                marginRight:moderateScaleVertical(20)
            }}
            >{middleText}</Text>
            </View>:null}

           {showHeaderRightLogo? <View style={{ ...styles.iconContainer, ...iconContainer }}>
                <TouchableOpacity
                onPress={onAddPostPress}
                >
                    <Image style={{ ...styles.icons, ...iconStyle }} source={icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {showbadge?<View style={ styles.unReadBadge}>
                            <Text style={styles.unReadBadgeText}>{"12"}</Text>
                        </View>:null}
                    <Image style={{ ...styles.icons, ...iconStyle }} source={icon2} />
                </TouchableOpacity>
            </View>:null
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
