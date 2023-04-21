//import liraries
import React, { Component, createContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator } from 'react-native';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import fontFamily from '../styles/fontFamily';
import imagePath from '../constants/imagePath';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import tables from '../constants/tables';
import navigationStrings from '../constants/navigationStrings';
import strings from '../constants/lang';
// create a component

const PostUploader = ({ navigation, route,
}) => {
    const theme = useSelector(state => state.themeReducer.mode)
    const [thumbnail, setThumbnail] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [result, setResult] = useState()
    const [uploading, setUploading] = useState(false)
    const [transferred, setTransferred] = useState(0)
    const [post, setPost] = useState(null)
    const userData = useSelector(data => data.userStates.userData)

    const openGallery = async () => {
        const options = {
            storageOptions: {
                path: "images",
                mediaType: "photo"
            },
            includeBase64: true
        }
        const result = await launchImageLibrary(options)
        // console.log(result)
        setResult(result)
        setIsModalVisible(false)
        const source = { uri: result.assets[0].uri }
        setThumbnail(source)
        // console.log(source)
    }
    const openCamera = async () => {
        const options = {
            storageOptions: {
                path: "images",
                mediaType: "photo"
            },
            includeBase64: true
        }
        const result = await launchCamera(options)
        console.log(result)
        setIsModalVisible(false)
        const source = { uri: result.assets[0].base64 }
        setThumbnail(source)
        console.log(source)
    }
    const openModal = () => {
        setIsModalVisible(true)
    }

    const uploadImage = async () => {
        let fileName = result.assets[0].fileName
        setUploading(true)
        setTransferred(0)

        const storageRef = storage().ref(`photos/${fileName}`)
        const task = storageRef.putFile(result.assets[0].uri)
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100)
            )
        });

        try {
            await task
            const url = await storageRef.getDownloadURL();
            console.log(url, 'this is image url===>>>>')
            setUploading(false)
            return url
        } catch (error) {
            console.log('error raised in uploadingFile', error)
            return null
        }

    }
    const submitPost = async () => {
        const imageUrl = await uploadImage();
        console.log("imageUrl ==", imageUrl)
        const postObj = {
            userId: userData.user.id,
            userImg: userData.user.photo,
            userName: userData.user.name,
            post: post,
            postImg: imageUrl,
            postTime: firestore.Timestamp.fromDate(new Date()),
            nlikes: null,
            comments: null,
        }
        firestore().collection(tables.POSTS)
            .add(postObj)
            .then(() => {
                console.log('post added')
                Alert.alert(
                    "Post uploaded!",
                    'Your Post has been uploaded to Firebase successfully',
                )
                setThumbnail(null),
                    setPost(null)
            })
            .catch((error) => {
                console.log(error, 'error raised in uploading post to firestore')
            })
    }

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderBottomColor: colors.blackOpacity15,
                borderTopColor: theme === 'light' ? colors.white : colors.blackOpacity0,
                borderLeftColor: 0,
                borderRightColor: 0,
                paddingTop: moderateScaleVertical(20)
            }}>
                <TouchableOpacity
                    onPress={openModal}
                >
                    <Image
                        style={{
                            height: moderateScaleVertical(100),
                            width: moderateScale(100),
                        }}
                        source={!!thumbnail ? thumbnail : imagePath.user} />
                </TouchableOpacity>


                <TextInput
                    style={{
                        paddingLeft: 10,
                        color: theme === 'light' ? colors.black : colors.white,
                        fontSize: textScale(18),
                        width: "72%"
                    }}
                    value={post}
                    onChangeText={(content) => setPost(content)}
                    placeholder={strings.WRITE_CAPTION}
                    placeholderTextColor={colors.gray}
                    multiline={true}
                />
            </View>


            {uploading ? <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: theme === 'light' ? colors.black : colors.white, fontSize: textScale(24) }}>{transferred}% Completed</Text>
                <ActivityIndicator size={"large"} color={colors.red} />
            </View> : <Button disabled={!thumbnail} title={strings.SHARE} onPress={submitPost} />}

            <Modal isVisible={isModalVisible}
            >
                <View
                    style={{
                        width: "80%",
                        alignSelf: 'center',
                        backgroundColor: theme === 'light' ? colors.black : colors.white,
                        paddingHorizontal: moderateScale(20),
                        paddingVertical: moderateScaleVertical(20),
                        zIndex: 999,
                        borderRadius: 10
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setIsModalVisible(false)
                        }}
                        style={{
                            borderWidth: 0.5,
                            borderTopLeftRadius: 10,
                            borderColor: colors.red,
                            padding: 4,
                            position: 'absolute',
                        }}
                    >
                        <Text style={{ color: theme === 'light' ? colors.white : colors.black, }}>
                            {"close"}
                        </Text>

                    </TouchableOpacity>
                    <Text
                        style={{
                            color: theme === 'light' ? colors.white : colors.black,
                            fontSize: textScale(20),
                            fontFamily: fontFamily.ExtraBold,
                            alignSelf: 'center'

                        }}
                    >
                        {"Choose From"}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: moderateScaleVertical(30)

                        }}
                    >
                        <TouchableOpacity
                            onPress={openCamera}
                            style={{
                                borderWidth: 1,
                                padding: 8,
                                borderRadius: 10,
                                borderColor: theme === 'light' ? colors.white : colors.black,
                            }}
                        >
                            <Text
                                style={{
                                    color: theme === 'light' ? colors.white : colors.black,
                                    fontSize: textScale(16),
                                    fontFamily: fontFamily.ExtraBold,

                                }}
                            >Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openGallery}
                            style={{
                                borderWidth: 1,
                                padding: 8,
                                borderRadius: 10,
                                borderColor: theme === 'light' ? colors.white : colors.black,
                            }}
                        >
                            <Text
                                style={{
                                    color: theme === 'light' ? colors.white : colors.black,
                                    fontSize: textScale(16),
                                    fontFamily: fontFamily.ExtraBold,

                                }}
                            >Gallery</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </Modal>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:colors.black
    }
});

//make this component available to the app
export default PostUploader;