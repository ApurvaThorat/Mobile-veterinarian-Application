import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigtor from '../drawer/DrawerNavigtor'
import Home from '../home/Home'

const Parent = ({navigation}) => {
  return (
    <View style={{flex:1}}>
       {/* <DrawerNavigtor/> */}
       <Home navigation= {navigation} />
    </View>
  )
}

export default Parent