import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import {Ionicons,AntDesign,MaterialIcons} from 'react-native-vector-icons'
import newBg from '../assets/bgImg.jpg';

const Menu = ({navigation}) => {
  return (
 <ImageBackground source={newBg}>
     <View style={{height:'100%', width:"96%",  }}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('home')}
        style={{height:40, alignItems:'flex-end', marginTop:'4%'}}
        >
        <Ionicons name='close-sharp' size={40}/>
        </TouchableOpacity>

        <View style={{height:'80%',  justifyContent:"center", alignItems:"center",}}>
            <View style={{height:'10%',width:"86%", alignItems:"center", justifyContent:"center"}}>
                <Text style={{height:"80%", fontSize:24, textAlign:'center', fontWeight:"600", color: "#714118"}}>The Magic Paws</Text>
            </View>
            <View style={{height:'60%',width:'100%', justifyContent:'space-evenly',alignItems:'center' }}>
            <TouchableOpacity 
             onPress={() => navigation.navigate('home')}
            style={{height:'16%', alignItems:'center', justifyContent:"center", flexDirection:"row", backgroundColor:'#F3F3FE', width:"86%", borderRadius:10}}
            >
            <AntDesign name='home' size={33}/>
            <Text style={{fontSize:18, fontWeight:"700", marginLeft:10}}>Home</Text>
            </TouchableOpacity>
           <TouchableOpacity 
            onPress={() => navigation.navigate('products')}
           style={{height:'16%', alignItems:'center', justifyContent:"center", flexDirection:"row", backgroundColor:'#F3F3FE', width:"86%", borderRadius:10}}
           >
            <MaterialIcons name='storefront' size={33}/>
            <Text style={{fontSize:18, fontWeight:"700", marginLeft:10}}>Online Store</Text>
            </TouchableOpacity>
           <TouchableOpacity 
            onPress={() => navigation.navigate('login')}
           style={{height:'16%', alignItems:'center', justifyContent:"center", flexDirection:"row", backgroundColor:'#F3F3FE', width:"86%", borderRadius:10}}
           >
            <Ionicons name='paw-outline' size={33}/>
            <Text style={{fontSize:18, fontWeight:"700", marginLeft:10}}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
 </ImageBackground>
  )
}

export default Menu