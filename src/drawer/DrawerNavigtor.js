import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NewMenu from './NewMenu';

const DrawerNavigtor = () => {

    const drawer = createDrawerNavigator();

  return (
   <drawer.Navigator>
   <drawer.Screen name='newmenu' component={NewMenu} options={ {Headers : false}}/>
   </drawer.Navigator>
  )
}

export default DrawerNavigtor