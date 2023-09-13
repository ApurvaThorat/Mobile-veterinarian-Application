// import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text} from 'react-native'
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import Home from './src/home/Home';
import Products from './src/products/Products'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import StackNav from './src/navigarion/stackNav';
import bgImg from './src/assets/bgImg.jpg'
import Login from './src/login/Login';
import GrommingRegis from './src/groomingRegis/GrommingRegis';
import Menu from './src/menu/Menu'
import Shedule from './src/sheduleAppoi/Shedule';
import DayCare from './src/dayCare/DayCare';
import newBg from './src/assets/homeIcon.webp'
import AppNavigator from './src/navigarion/AppNavigator';


export default function App() {


  return (
    <ImageBackground source={newBg} style={{height:'100%', width:"100%"}} >
      {/* <Home></Home> */}
    {/* <Products></Products> */}
    {/* <Login></Login> */}
    {/* <GrommingRegis></GrommingRegis> */}
    {/* <Menu></Menu> */}
    {/* <Shedule></Shedule> */}
    {/* <DayCare></DayCare> */}
    <AppNavigator/>
    </ImageBackground>
  );
}

