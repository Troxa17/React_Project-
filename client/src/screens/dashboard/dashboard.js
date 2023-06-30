import React,{useState,useEffect} from "react";
import {View,Text,Image} from 'react-native';
import AppStyle from "../../components/AppStyle";

const Dashboard = ()  => {
    return (
        <View style={AppStyle.dashboard}>
            <Image style={{ height: '100%',width: '100%'    }} source={{uri:'https://cdn-icons-png.flaticon.com/512/3343/3343791.png'}}/>
        </View>
    )
}

export default Dashboard;