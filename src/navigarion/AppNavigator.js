import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Spalsh from '../normal/Spalsh';
import Parent from '../normal/Parent';
import DayCare from '../dayCare/DayCare';
import GrommingRegis from '../groomingRegis/GrommingRegis';
import Shedule from '../sheduleAppoi/Shedule';
import Products from '../products/Products';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Login from '../login/Login';
import Consent from '../consent/Consent';

const AppNavigator = () => {
    
    const stack = createStackNavigator();

  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen 
            name='splash'
            component={Spalsh}
            options={
                {
                    headerShown :false 
                }
            }
            />
             <stack.Screen 
            name='parent'
            component={Parent}
            options={
                {
                    headerShown: false
                }
            }
            />
             <stack.Screen 
            name='home'
            component={Home}
            options={
                {
                    headerShown: false
                }
            }
            />
            <stack.Screen 
            name='Reserve Daycare'
            component={DayCare}
            
            options={
                {
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#ffe4e1',                       
                      },
                      headerTintColor:'#2f4f4f',
                }
            }
            />
            <stack.Screen
            name='Register Pet Grooming'
            component={GrommingRegis}
            options={
                {
                    headerShown:true,
                    headerStyle: {
                        backgroundColor: '#ffe4e1',                       
                      },
                      headerTintColor:'#2f4f4f',
                }}
            />
            <stack.Screen
            name='Shedule Appointment'
            component={Shedule}
            options={{headerShown:true,
                headerStyle: {
                    backgroundColor: '#ffe4e1',                       
                  },
                  headerTintColor:'#2f4f4f',}}
            />
             <stack.Screen
            name='products'
            component={Products}
            options={{headerShown:true, 
                headerStyle: {
                    backgroundColor: '#ffe4e1',                       
                  },
                  headerTintColor:'#2f4f4f',}}
            />
            <stack.Screen
            name='menu'
            component={Menu}
            options={{headerShown:false,
                headerStyle: {
                    backgroundColor: '#ffe4e1',                       
                  },
                  headerTintColor:'#2f4f4f',}}
            />
            <stack.Screen
            name='login'
            component={Login}
            options={{headerShown:true,
                headerStyle: {
                    backgroundColor: '#ffe4e1',                       
                  },
                  headerTintColor:'#2f4f4f',}}
            />
            <stack.Screen
            name=' Vacination Consent'
            component={Consent}
            options={{headerShown:true,
                headerStyle: {
                    backgroundColor: '#ffe4e1',                       
                  },
                  headerTintColor:'#2f4f4f',}}
            />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator