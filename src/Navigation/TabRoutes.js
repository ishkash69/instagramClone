//import liraries
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import HomeStack from './HomeStack';
import * as Screens from "../Screens"
import ProfileStack from './ProfileStack';

const BottomTab = createBottomTabNavigator();


// create a component
const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.white,
                tabBarStyle: {
                    backgroundColor: colors.black,
                    paddingTop: moderateScaleVertical(30),
                    paddingBottom: moderateScaleVertical(30)
                }
            }}
        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image
                                style={{
                                    tintColor: colors.white,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                                source={imagePath.homeIcon1} />
                        ) : (
                            <Image
                                style={{
                                    tintColor: colors.white,
                                    opacity: 0.6,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                                source={imagePath.homeIcon} />
                        )
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.HOME_SEARCH}
                component={Screens.HomeSearch}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image source={imagePath.search}
                                style={{
                                    tintColor: colors.white,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                        ) :
                            <Image source={imagePath.search}
                                style={{
                                    tintColor: colors.white,
                                    opacity: 0.6,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.HOME_REELS}
                component={Screens.HomeReels}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image source={imagePath.reelsIcon}
                                style={{
                                    tintColor: colors.white,

                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                        ) :
                            <Image source={imagePath.reelsIcon}
                                style={{
                                    tintColor: colors.white,
                                    opacity: 0.6,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.HOME_NOTIFICATION}
                component={Screens.HomeNotification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image source={imagePath.heart}
                                style={{
                                    tintColor: colors.white,

                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                        ) :
                            <Image source={imagePath.like}
                                style={{
                                    tintColor: colors.white,
                                    opacity: 0.6,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.HOME_PROFILE}
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image source={imagePath.user}
                                style={{
                                    borderRadius: 20,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                        ) :
                            <Image source={imagePath.user}
                                style={{
                                    borderRadius: 20,
                                    height: moderateScaleVertical(30),
                                    width: moderateScale(30)
                                }}
                            />
                    }
                }}
            />

        </BottomTab.Navigator>
    );
};



//make this component available to the app
export default TabRoutes;