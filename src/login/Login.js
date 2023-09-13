import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [formToshow, setFormToshow] = useState('login');

    console.log(">>>>>>>>>>>", formToshow);
    return (
        <View style={[styles.loginContainer]}>

            <View style={[styles.headerConatainer]}>
                <Text style={[styles.loginTitle]}>Welcome!</Text>

                <View style={[styles.toggelContainer]}>

                    <TouchableOpacity
                        onPress={() => setFormToshow('login')}
                        style={[styles.toggelBtn, { backgroundColor: formToshow == 'login' ? 'white' : 'transparent' }]}
                    >
                        <Text style={[styles.toggelText]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFormToshow('sing')}
                        style={[styles.toggelBtn, { backgroundColor: formToshow == 'sing' ? 'white' : 'transparent' }]}
                    >
                        <Text style={[styles.toggelText]}>SignUp</Text>
                    </TouchableOpacity>
                </View>


                {/* //----------------------------------------if Login------------------------------ */}

                {
                    formToshow == 'sing' ?
                        <View style={[styles.formContainer]}>
                            <View style={[styles.inputContainer]}>
                                <Text style={[styles.inputText]}>UserName</Text>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='Enter UserName'
                                    style={[styles.placeholderStyle]}
                                />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <Text style={[styles.inputText]}>Password</Text>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='Enter Password'
                                    style={[styles.placeholderStyle]}
                                />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <Text style={[styles.inputText]}>Re-Enter Password</Text>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='Re-Enter Password'
                                    style={[styles.placeholderStyle]}
                                />
                            </View>
                            <TouchableOpacity style={[styles.btnContainer]}>
                                <Text style={[styles.btnText]}>SignUP</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={[styles.formContainer]}>
                            <View style={[styles.inputContainer]}>
                                <Text style={[styles.inputText]}>UserName</Text>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='Enter UserName'
                                    style={[styles.placeholderStyle]}
                                />
                            </View>
                            <View style={[styles.inputContainer]}>
                                <Text style={[styles.inputText]}>Password</Text>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='Enter Password'
                                    style={[styles.placeholderStyle]}
                                />
                            </View>
                            <TouchableOpacity style={[styles.btnContainer]}>
                                <Text style={[styles.btnText]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: { height: "100%", width: '100%', alignItems: 'center', justifyContent: "center" },
    headerConatainer: { height: "88%", width: "100%", backgroundColor: "rgba(251,244,247,0.4)", justifyContent:"center" },
    loginTitle: { fontSize: 30, fontWeight: "600", height:60, textAlign:'center' },
    toggelContainer: { height: 36, marginVertical: 10, backgroundColor: "#E3E5F5", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" },
    toggelText: { fontSize: 18, },
    formContainer: { height: '69%',  justifyContent: 'space-evenly', alignItems: "center" },
    inputContainer: { width: '76%', height: '20%', justifyContent: 'space-evenly', },
    inputText: { height: '20%', fontSize: 15, fontWeight: "600", paddingLeft: 10 },
    placeholderStyle: { height: "50%", borderBottomWidth: 0.5, paddingLeft: 10, backgroundColor:"rgba(197,198,208,0.5)" },
    btnContainer: { height: '8%', borderBottomWidth:0.5, width: '60%', borderRadius: 30, alignItems: "center", justifyContent: "center",backgroundColor:'#C47E42' },
    btnText: { fontSize: 18, fontWeight: '600' },
    toggelBtn: { height: '80%', width: '46%', borderRadius: 10, alignItems: 'center', justifyContent: "center", }
})
export default Login