//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { useSelector } from 'react-redux';
import CommonComponent from '../Components/CommonComponent';
import strings from '../constants/lang';
import colors from '../styles/colors';
import { moderateScaleVertical } from '../styles/responsiveSize';
import { storeLang, } from '../utils/utils';
// create a component
const ChangeLang = ({navigation,route}) => {
    const theme = useSelector(state=> state.themeReducer.mode)
    const setText = async (value)=>{
        strings.setLanguage(value);
        storeLang(value)
        console.log(value,"fiadhsfhadsfjkadhsfkadsfkla")
        RNRestart.Restart();
    }

    return (
        <View style={theme === 'light'? styles.containerLight:styles.containerDark}>
            <CommonComponent 
            text={"English"}
            onPress={()=>{setText("en")}}
            />
            <CommonComponent 
            text={"Arabic"}
            onPress={()=>{setText("ar")}}
            languageContainer={{marginTop:moderateScaleVertical(0)}}
            />
            <CommonComponent 
            text={"Russia"}
            onPress={()=>{setText("ru")}}
            languageContainer={{marginTop:moderateScaleVertical(0)}}
            />
            <CommonComponent 
            text={"French"}
            onPress={()=>{setText("fr")}}
            languageContainer={{marginTop:moderateScaleVertical(0)}}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        backgroundColor: colors.black
    },
    containerLight: {
        flex: 1,
        backgroundColor: colors.white
    },
  
});

//make this component available to the app
export default ChangeLang;
