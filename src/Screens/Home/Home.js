//import liraries
import React, { Component, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../Components/Header';
import Post from '../../Components/post';
import Stories from '../../Components/stories';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';
import { POSTS } from '../../dummyData/posts';
import { getLang, storeLang } from '../../utils/utils';
// create a component
const Home = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <Header
                logo={imagePath.headerLogo}
                icon1={imagePath.more}
                icon2={imagePath.dm}
            />
            <Stories />
            <FlatList
            data={POSTS}
            renderItem={({item,index})=>{
                return(
                    <Post post={item} key={index} />
                )
            }}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
});

//make this component available to the app
export default Home;
