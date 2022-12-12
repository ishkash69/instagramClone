//import liraries
import React, { Component, createContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import colors from '../styles/colors';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import fontFamily from '../styles/fontFamily';
// create a component
const placeHolderImage = 'https://yt3.ggpht.com/ytc/AMLnZu8JGeiF0W6b7wKOnqQhoBGk0-34d7xqXzHWvlEj=s900-c-k-c0x00ffffff-no-rj'
const uploadPostSchema = Yup.object().shape({
    // imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, "Caption has reached the character limit")
})
const FormikPostUploader = ({
}) => {
    const theme = useSelector(state => state.themeReducer.mode)
    const [thumbnail, setThumbnail] = useState(placeHolderImage)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const openGallery = async () => {
        const options = {
            storageOptions: {
                path: "images",
                mediaType: "photo"
            },
            includeBase64: true
        }
        const result = await launchImageLibrary(options)
        console.log(result)
        setIsModalVisible(false)
        const source = { uri: "data:image/jpeg;base64," + result.assets[0].base64 }
        setThumbnail(source)
        console.log(source)
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
        const source = { uri: "data:image/jpeg;base64," + result }
        setThumbnail(source)
        console.log(source)
    }
    const openModal = () => {
        setIsModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ caption: '', imageUrl: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={uploadPostSchema}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderBottomColor: colors.blackOpacity15,
                            borderTopColor: theme === 'light' ? colors.white : colors.blackOpacity0,
                            borderLeftColor: 0,
                            borderRightColor: 0,
                            paddingVertical: moderateScaleVertical(20)
                        }}>
                            <TouchableOpacity
                                onPress={openModal}
                            >
                                <Image
                                
                                    style={{
                                        height: moderateScaleVertical(100),
                                        width: moderateScale(100),
                                    }}
                                    source={thumbnail?thumbnail:placeHolderImage} />
                            </TouchableOpacity>
                            

                            <TextInput
                                style={{
                                    paddingLeft: 10,
                                    color: theme === 'light' ? colors.black : colors.white,
                                    fontSize: textScale(18),
                                    width: "72%"
                                }}
                                placeholder='Write a Caption....'
                                placeholderTextColor={colors.gray}
                                multiline={true}
                                onChangeText={handleChange("caption")}
                                onBlur={handleBlur("caption")}
                                value={values.caption}
                            />

                        </View>

                        {/* <View style={{
                            marginTop:moderateScaleVertical(10),
                            borderWidth:1,
                            borderBottomColor:colors.blackOpacity15,
                            borderTopColor: theme=== 'light'? colors.white: colors.blackOpacity0,
                            borderLeftColor:0,
                            borderRightColor:0


                        }}>
                            <TextInput
                                style={{
                                    color: theme === 'light' ? colors.black : colors.white,
                                    fontSize: textScale(16),
                                    width:"95%",
                                    alignSelf:'center',
                                }}
                                placeholder='Enter Image Url'
                                placeholderTextColor={colors.gray}
                                onChangeText={handleChange("imageUrl")}
                                onBlur={handleBlur("imageUrl")}
                                value={values.imageUrl}
                                multiline={true}
                            />
                            {errors.imageUrl ?
                                <Text style={{
                                    fontSize: textScale(12),
                                    color: colors.red,
                                    marginTop: moderateScaleVertical(4),
                                    marginLeft:moderateScale(5)

                                }}>{errors.imageUrl}</Text> : null
                            }
                        </View> */}
                        <Button
                            onPress={handleSubmit}
                            title='Share'
                            disabled={!isValid}
                        />
                    </>
                )}

            </Formik>
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
        flex: 1
    }
});

//make this component available to the app
export default FormikPostUploader;