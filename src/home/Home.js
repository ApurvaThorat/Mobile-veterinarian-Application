import { View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import bgImg from '../assets/bgImg.jpg'
import homeicon from '../assets/homeIcon.webp';
import blackCat from '../assets/blackCatImg.jpg'
import dogCat from '../assets/dogCatImg.jpg'
import whiteDog from '../assets/whiteDogImg.jpg'
import dogoImg from '../assets/dogoImg.jpg'
import cartImg from '../assets/cartImg.png'
import { Ionicons } from 'react-native-vector-icons'


const Home = ({navigation}) => {

    const handleShop = () => {
        navigation.navigate('products')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={bgImg} style={[styles.bgContainer]}>
            <ScrollView>
                <View style={{ backgroundColor: "rgba(253,246,248, 0.1)", height: "98%" }}>

                    <View style={[styles.logoConatiner]}>
                        <View style={[styles.cartBox]}>
                            <TouchableOpacity 
                            style={{ width: "20%", height: '100%', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => navigation.navigate('menu')}
                            >
                                <Ionicons name='ellipsis-vertical' size={40} />
                            </TouchableOpacity>
                            <View style={{ width: '30%', height: '100%', flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" }}>
                                <TouchableOpacity
                                    style={{ height: "80%", width: "30%", alignItems: "center", justifyContent: "center" }}
                                    onPress={() => Alert.alert("check our products")}

                                >
                                    <Ionicons name='cart-sharp' size={36}></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ height: "80%", width: "30%", alignItems: "center", justifyContent: "center" }}
                                    onPress={() => Alert.alert("check our products")}
                                >
                                    <Ionicons name='heart-circle-outline' size={36} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.LogoBox]}>
                            <Image source={homeicon} style={{ height: '50%', width: '20%', borderRadius: 50 }} resizeMode='cover'></Image>
                            <Text style={{ fontSize: 20, width: "auto", color: "#714118", fontWeight: "600", alignSelf: "center", justifyContent: "center" }}>The Magic Paws</Text>
                            <Text style={{ fontSize: 13, color: "#714118" }}>Compassionate Care.</Text>
                        </View>
                    </View>

                    <View style={{ height: 400, width: "100%", }}>
                        <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(251,244,247,0.4)", position: "relative", paddingHorizontal: 20 }}>
                            <Text style={{ height: '10%', color: '#C47E42', fontSize: 20, fontWeight: '800' }}>See Our Services</Text>
                            <View style={{ height: "80%", width: '100%', }}>
                                <Image source={blackCat} style={{ height: "40%", width: "46%", position: "absolute" }} resizeMode='contain' ></Image>
                                <Image source={dogCat} style={{ height: "60%", width: "50%", position: "absolute", right: 0 }} ></Image>
                                <Image source={whiteDog} style={{ height: "60%", width: "44%", position: "absolute", bottom: 0 }}  ></Image>
                                <Image source={dogoImg} style={{ height: "33%", width: "50%", position: "absolute", bottom: 0, right: 0 }}  ></Image>
                            </View>

                        </View>
                    </View>

                    <View style={{ height: 250, width: "100%", padding: '4%', justifyContent: 'space-between' }}>
                        <View style={{ height: "48%", width: '100%', flexDirection: "row", justifyContent: 'space-around', }}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Register Pet Grooming')}
                             style={{ height: "96%", width: '45%', backgroundColor: "#C47E42", borderRadius: 5, padding: '1%', justifyContent: 'space-around' }}>
                                <Text style={{ height: '44%', fontSize: 16, textAlign: "center", color: "white" }}>Registration Pet Grooming</Text>
                                <Text style={{ height: '38%', fontSize: 13, textAlign: "center", color: "white" }}>Please register 1 day in advance.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Reserve Daycare')}
                            style={{ height: "96%", width: '45%', backgroundColor: "#F4DBF2", borderRadius: 5, borderWidth: 1, padding: '1%', justifyContent: 'space-around' }}
                            >
                                <Text style={{ height: '44%', fontSize: 17, textAlign: "center", color: '#5B1769' }}>Reserve Dog Daycare</Text>
                                <Text style={{ height: '38%', fontSize: 13, textAlign: "center", color: '#5B1769' }}>Please reserve 2 day in advance</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: "48%", width: '100%', flexDirection: "row", justifyContent: 'space-around', }}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Shedule Appointment')}
                            style={{ height: "96%", width: '45%', backgroundColor: "#F4DBF2", borderRadius: 5, borderWidth: 1, padding: '1%', justifyContent: 'space-around' }}>
                                <Text style={{ height: '44%', fontSize: 16, textAlign: "center", color: '#5B1769' }}>Schedule Appointment</Text>
                                <Text style={{ height: '38%', fontSize: 13, textAlign: "center", color: '#5B1769' }}>Please schedule 2 day in advance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => navigation.navigate(' Vacination Consent')}
                             style={{ height: "96%", width: '45%', backgroundColor: "#C47E42", borderRadius: 5, padding: '1%', justifyContent: 'space-around' }}
                             >
                                <Text style={{ height: '44%', fontSize: 16, textAlign: "center", color: "white" }}>Pet Vacination Consent</Text>
                                <Text style={{ height: '38%', fontSize: 13, textAlign: "center", color: "white" }}>Provide consent before vaccination</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: '800', color: '#8B572A' }}>_______________________________________________</Text>
                    </View>

                    <View style={{ height: 100, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ backgroundColor: "#F68DF6", height: '40%', width: "80%", justifyContent: "center", alignItems: "center", borderRadius: 8 }}
                            onPress={() => handleShop()}
                        >
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 80, alignItems: 'center' }}>
                        <Text style={{ width: "80%", fontSize: 15, fontWeight: '400', textAlign: "center", color: "#8B572A" }}>(123) 456 7890 | magicpaws@example.com | Pune Street 182, MH</Text>
                    </View>

                </View>
            </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    bgContainer: {
        height: '100%',
        width: "100%",
    },
    homeContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        justifyContent: "space-evenly"

    },
    iconContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "pink"
    },
    logoConatiner: {
        height: 220,
        backgroundColor: 'rgba(239,205,236,0.7)'
    },
    LogoBox: {
        height: '68%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",

    },
    cartBox: {height:50,  justifyContent:'space-between', alignItems:'center', flexDirection:'row'  }
})

export default Home