//import liraries
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
// create a component
const Post = ({
    post,

}) => {
    const theme = useSelector(state => state.themeReducer.mode)
    return (
        <View style={styles.container}>
            {/* <Divider width={1} orientation="vertical" /> */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: moderateScale(8) }}>
                <PostFootterIcons post={post} />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>

        </View>
    );
};
// post header
const PostHeader = ({ post }) => {
    const theme = useSelector(state => state.themeReducer.mode)
    return (
        <TouchableOpacity activeOpacity={1} style={styles.postHeader}>
            <View style={styles.profileAndUserNameContainer}>
                <TouchableOpacity>
                    <Image style={styles.profileImage} source={post.profile_picture} />
                </TouchableOpacity>

                <Text>   </Text>
                <TouchableOpacity activeOpacity={1}>
                    <Text style={theme === 'light' ? styles.userNameLight : styles.userNameDark}>{post.user}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={1}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{
                        fontWeight: '900',
                        fontSize: textScale(16),
                        transform:
                            [{ rotate: '90deg' }],
                        color: colors.white
                    }}>...</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
// post image
const PostImage = ({ post }) => {
    return (
        <View style={{ height: moderateScaleVertical(450), width: "100%", marginTop: moderateScaleVertical(8) }}>
            <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                source={post.imageUrl} />
        </View>
    )
}

// post footter

const PostFootterIcons = ({
    post,

}) => {
    const theme = useSelector(state => state.themeReducer.mode)

    const [save, setSave] = useState(!save)
    const [heart, setHeart] = useState(!heart)

    const onSave = (() => {
        setSave(!save)
    })
    const onLike = () => {
        setHeart(!heart)
    }
    return (
        <View style={{
            alignItems: 'center',
            flexDirection: "row",
            marginVertical: moderateScaleVertical(8),
            justifyContent: 'space-between'
        }}>
            <View style={{
                alignItems: 'center',
                flex: 0.4, flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity
                    onPress={onLike}
                    activeOpacity={1} >
                    {heart ? <Image
                        style={theme === 'light' ? styles.footterIconsLight : styles.footterIconsDark}
                        source={imagePath.like} /> :
                        <Image
                            style={{
                                ...theme === 'light' ?
                                    styles.footterIconsLight : styles.footterIconsDark,
                                tintColor: colors.red
                            }}
                            source={imagePath.heart} />}
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image
                        style={theme === 'light' ? styles.footterIconsLight : styles.footterIconsDark}
                        source={imagePath.comments} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image
                        style={{
                            ...theme === 'light' ?
                                styles.footterIconsLight : styles.footterIconsDark,
                            transform: [{ rotate: "10deg" }]
                        }}
                        source={imagePath.share} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={1}
                onPress={() => {
                    onSave()
                }}
                style={{ alignItems: 'center', }}>
                {save ? <Image
                    style={theme === 'light' ? styles.footterIconsLight : styles.footterIconsDark}
                    source={imagePath.savePost} />
                    :
                    <Image
                        style={theme === 'light' ? styles.footterIconsLight : styles.footterIconsDark}
                        source={imagePath.afterSave} />}
            </TouchableOpacity>
        </View>
    )
}
const Likes = ({ post }) => {
    const theme = useSelector(state=>state.themeReducer.mode)
    return (
        <View style={{
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            <Text
                style={theme==='light'?styles.likeLight:styles.likeDark}>
                {post.likes.toLocaleString("en")} {strings.LIKES}
            </Text>
        </View>
    )
}

const Caption = ({ post }) => {
    const theme = useSelector(state=>state.themeReducer.mode)
    return (
        <View style={{ flexDirection: 'row', marginTop: moderateScaleVertical(4) }}>
            <TouchableOpacity activeOpacity={1}>
                <Text style={theme==='light'? styles.captionLight:styles.captionDark}>
                    <Text style={{ fontWeight: "700", fontSize: textScale(16) }}>{post.user}{"  "}</Text>
                    {post.caption}
                </Text>
            </TouchableOpacity>
        </View>

    )
}

// comments section
const CommentsSection = ({ post }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{ marginTop: moderateScaleVertical(4), }}>
            {!!post.comments.length ? <Text style={{ color: colors.gray }}>
                {"View "}{post.comments.length > 1 ? "all " : ''}{post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text> : null}
        </TouchableOpacity>
    )
}

const Comments = ({ post }) => {
    const theme = useSelector(state=>state.themeReducer.mode)
    return (
        <>
            {post.comments.map((comment, index) => (
                <View key={index} style={{ flexDirection: 'row', marginTop: moderateScaleVertical(4) }}>
                    <TouchableOpacity activeOpacity={1}>
                        <Text style={theme==='light'? styles.captionLight:styles.captionDark}>
                            <Text style={{ fontWeight: "600" }}>{comment.user}{"  "}</Text>
                            {comment.comment}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))
            }
        </>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: moderateScaleVertical(10)

    }, postHeader: {
        marginTop: moderateScaleVertical(6),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: moderateScale(8),
        alignContent: 'center',
    },
    profileAndUserNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        height: moderateScaleVertical(35),
        width: moderateScale(35),
        borderRadius: 20,
        borderWidth: 2,
        // borderColor: "#ff8501"
    },
    userNameDark: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: textScale(16)
    },
    userNameLight: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: textScale(16)
    },
    footterIconsDark: {
        height: moderateScaleVertical(30),
        width: moderateScale(30),
        tintColor: colors.white
    },
    footterIconsLight: {
        height: moderateScaleVertical(30),
        width: moderateScale(30),
        tintColor: colors.black
    },
    likeDark: {
        color: colors.white,
        fontSize: textScale(14),
        fontWeight: "700"

    },
    likeLight: {
        color: colors.black,
        fontSize: textScale(14),
        fontWeight: "700"
    },
    captionDark:{
        color: colors.white 
    },
    captionLight:{
        color: colors.black 
    }

});

//make this component available to the app
export default Post;    
