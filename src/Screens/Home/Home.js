//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View,Appearance } from 'react-native';

import Header from '../../Components/Header';
import Post from '../../Components/post';
import Stories from '../../Components/stories';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { POSTS } from '../../dummyData/posts';
import colors from '../../styles/colors';

import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import { themeAction } from '../../redux/actions/themeAction';

import firestore from '@react-native-firebase/firestore';
import tables from '../../constants/tables';
// create a component
const Home = ({navigation,route}) => {
    
    const theme = useSelector(state=>state.themeReducer.mode)
    // console.log(theme,"theme")
    const [mode, setMode] = useState(theme)
    // console.log(mode,"mode")

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    const listener = Appearance.addChangeListener(colorTheme=>{
        // console.log(colorTheme,"useEffect")
        store.dispatch(themeAction(colorTheme.colorScheme=== 'light'? 'light': 'dark'))
        setMode(colorTheme.colorScheme)
    })
    return()=>{
        listener;
    }
    },[])

    useEffect(()=>{
        const fetchPosts = async()=>{
            try{
                const list = [];
                await firestore().collection(tables.POSTS)
                .orderBy('postTime','desc')
                .get()
                .then((querySnapshot)=>{
                    // console.log('querySnapshot',querySnapshot.size)
                    querySnapshot.forEach(doc =>{
                        const {post, postImg, likes, comments, userId,postTime,userName,userImg} = doc.data();
                        list.push({
                            id : doc.id,
                            userId,
                            userName,
                            userImg,
                            post : post,
                            postImg: postImg,
                            liked : false,
                            likes,
                            comments,
                            postTime,
                        })
                    })
                    setPosts(list)
                    if(loading){
                        setLoading(false)
                    }
                    console.log("Posts: ", list)
                })
            } catch(error){
                console.log(error,'error raised in fetching posts')
            }
        }
        fetchPosts();
        
    },[])
    

    return (
        <View style={mode== 'light'? styles.containerLight:styles.containerDark}>
            <Header
                logo={imagePath.headerLogo}
                icon1={imagePath.more}
                icon2={imagePath.dm}
                showbadge
                showHeaderRightLogo
                onAddPostPress={()=>{
                    navigation.navigate(navigationStrings.POSTSCREEN)
                }}
            />
            <Stories />
            <FlatList
            data={posts}
            renderItem={({item,index})=>{
                return(
                    <Post post={item} key={index}/>
                )
            }}
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
    }
});

//make this component available to the app
export default Home;
