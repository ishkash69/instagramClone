//import liraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CommonComponent from '../../Components/CommonComponent';
import navigationStrings from '../../constants/navigationStrings';
import { userLogOut } from '../../redux/actions/authAction';
import { store } from '../../redux/store';
import colors from '../../styles/colors';
import { moderateScaleVertical } from '../../styles/responsiveSize';
// create a component
const HomeProfile = ({ navigation, routes }) => {
    const theme = useSelector(state => state.themeReducer.mode)
    const [loader, setLoader] = useState(false)
    const googleSignOut = async () => {
        try {
            setTimeout(async () => {
                await GoogleSignin.signOut()
                store.dispatch(userLogOut())
                navigation.navigate(navigationStrings.LOGIN)
            }, 4000);
            setLoader(true)
        } catch (error) {
            console.log(error, "error in logout")
        }
    }
    return (
        <View style={theme === 'light' ? styles.containerLight : styles.containerDark}>
            <View style={{ marginTop: moderateScaleVertical(20) }}>
                <CommonComponent
                    text={"Change Language"}
                    arrow={">"}
                    onPress={() => {
                        navigation.navigate(navigationStrings.CHANGELANGUAGE)
                    }}
                />
                <CommonComponent
                    text={"LogOut"}
                    onPress={googleSignOut}
                />
            </View>
            {loader ? <ActivityIndicator size={'large'} /> : null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        backgroundColor: colors.black,
    },
    containerLight: {
        flex: 1,
        backgroundColor: colors.white
    },
});

//make this component available to the app
export default HomeProfile;
