import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import bgImg from '../assets/bgImg.jpg';
import notFound from '../assets/notFound.gif'

const Consent = () => {
  return (
    <View style={{alignItems:'center', marginTop:'30%',flex:1}}>
        <Text  style={{height:60, fontSize:24, textAlign:'center', fontWeight:"600", color: "#714118"}}>Page not Found</Text>
        <Image 
    source={notFound}
    style={{height:240, width:240}}
    />
    </View>

  )
}

export default Consent