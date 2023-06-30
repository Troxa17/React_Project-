import React, {useState,useEffect, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/navigation/index.js'
import {DefaultTheme, Provider} from 'react-native-paper';
import AppColors from './src/components/AppColors.js';
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: AppColors.platinum
  }
}

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsloaded] = useFonts({
    'IBMP-light': require('./assets/fonts/IBMPlexSans-Light.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsloaded){
      await SplashScreen.hideAsync();
    }
  },[fontsloaded])

  if(!fontsloaded){
    return null;
  }

  // const [message,setMessage] = useState("");

  // useEffect(() => {

  //   getData();

  // },[])

  // const getData = async() => {
  //   const url = "http://172.20.10.3:3001/api/prosucts/sayHello"
  //   const response = await fetch(url , {
  //     method: 'get'
  //   });

  //   const data = await response.json();
  //   console.log(data);

  // }
  

  return (
    <Provider theme={theme}>
      <SafeAreaView style={{flex:1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {
        <TabNavigator />
        }
      </NavigationContainer>
      </SafeAreaView>   
    </Provider>
  );
}

