import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import appIcon from '../assets/homeIcon.webp';

const Spalsh = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('parent')
        },2500)
    }, [])
  return (
    <View style={{flex:1, backgroundColor:"pink", alignItems:"center", justifyContent:"center"}}>
      <View style={{height:'10%',width:"86%", alignItems:"center", justifyContent:"center",}}>
                <Text style={{height:"80%", fontSize:24, textAlign:'center', fontWeight:"600", color: "#714118"}}>The Magic Paws</Text>
            </View>
    <View style={{height:200, width:200, borderRadius:100,}}>
    <Image
      source={appIcon}
      // resizeMode='contain'
      style={{height:"100%", width:'100%', borderRadius:100}}
      />
    </View>
    </View>
  )
}

export default Spalsh