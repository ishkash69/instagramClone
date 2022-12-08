//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../styles/colors';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
// create a component
const placeHolderImage = 'https://yt3.ggpht.com/ytc/AMLnZu8JGeiF0W6b7wKOnqQhoBGk0-34d7xqXzHWvlEj=s900-c-k-c0x00ffffff-no-rj'
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, "Caption has reached the character limit")
})
const FormikPostUploader = () => {
    const theme = useSelector(state => state.themeReducer.mode)
    const [thumbnail, setThumbnail] = useState(placeHolderImage)
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ caption: '', imageUrl: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={uploadPostSchema}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={{
                            flexDirection: 'row',
                            // marginTop: moderateScaleVertical(10),
                            alignItems:'center',
                            borderWidth:1,
                            borderBottomColor:colors.blackOpacity15,
                            borderTopColor: theme=== 'light'? colors.white: colors.blackOpacity0,
                            borderLeftColor:0,
                            borderRightColor:0,
                            paddingVertical:moderateScaleVertical(20)
                        }}>
                            <Image style={{
                                height: moderateScaleVertical(100),
                                width: moderateScale(100),
                            }}
                                source={{ uri: placeHolderImage }} />

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

                        <View style={{
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
                        </View>
                    </>
                )}

            </Formik>
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
