//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import { Users } from '../dummyData/users';


// create a component
 const Stories = () => {
  

    const renderItem = ({item,index})=>{
        return(
            <TouchableOpacity key={index}
            style={{alignItems:'center',justifyContent:'center',}}
             >
                <Image  style={styles.stories} source={item.image}/>
                <Text style={styles.userName}>
                {item.user.length>11?
                 item.user.slice(0,8).toLowerCase()
                  +"...":item.user.toLowerCase()}
                  </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
          <FlatList
          horizontal={true}
          data={Users}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:moderateScaleVertical(8),
    },
    stories:{
        borderRadius: moderateScale(50),
            height:moderateScaleVertical(70),
            width:moderateScale(70),
            marginLeft:moderateScale(14),
            borderWidth:3,
            borderColor:"#ff8501", 
              
    },
    userName:{
        marginTop:moderateScaleVertical(2),
        color:colors.white,
        marginLeft:moderateScale(18),
    }
});

//make this component available to the app
export default Stories;
