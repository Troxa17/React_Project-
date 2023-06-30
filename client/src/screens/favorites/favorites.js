import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import AppStyle from "../../components/AppStyle";

const Favorites = (props)  => {
    return (
        <View style={AppStyle.container}>
            <Text style = {AppStyle.title}>Favorites screens</Text>
            <TouchableOpacity style={AppStyle.btn} onPress={ () => {props.navigation.navigate('ProductFavDetails')}}  >
                <Text style={AppStyle.btn_text}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export const screensOptions = (navData) => {

    return {
        headerTitle: 'Favorites'
      
    }
}


export default Favorites;