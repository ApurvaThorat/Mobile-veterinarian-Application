import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, TextInput, Keyboard, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import dogLead from '../assets/dogLead.jpg'
import chewBone from '../assets/chewBone.jpg'
import ropeToy from '../assets/ropeToy.jpg'
import boneBall from '../assets/boneBall.jpg'
import accuriamAccess from '../assets/accuriamAccess.webp';
import gromingBrush from '../assets/gromingBrush.jpg'
import newBg from '../assets/homeIcon.webp';

const Products = () => {

    // const [likeButton, setLikeButton] = useState(false);
    const [facourites, setFacourites] = useState([]);
    const [decideAlign, setDecideAlign] = useState(2)

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..", decideAlign);
    console.log('====================================');
    console.log(facourites.length > 0);
    console.log('====================================');
    const prroductArr = [
        {
            productName: 'Dog Lead',
            productCost: 32,
            productImg: dogLead,
            productId: 1,
        },
        {
            productName: 'Chew Bone',
            productCost: 17,
            productImg: chewBone,
            productId: 2,
        },
        {
            productName: 'Rope Toy',
            productCost: 18,
            productImg: ropeToy,
            productId: 3,
        },
        {
            productName: 'Bone Ball',
            productCost: 22,
            productImg: boneBall,
            productId: 4,
        },
        {
            productName: 'Aquarium accessory',
            productCost: 12,
            productImg: accuriamAccess,
            productId: 5,
        },
        {
            productName: 'Gromming Brush ',
            productCost: 34,
            productImg: gromingBrush,
            productId: 6,
        }
    ]


    const addFavourites = (item) => {
        const isPresent = facourites.some((row) => row.productId === item?.productId);

        if (isPresent == true) {
            const removedData = facourites.filter((I) => I.productId !== item?.productId);
            setFacourites(removedData);
        }
        else {
            setFacourites((prevState) => [...prevState, item]);
        }
    }

    const handleFavroite= () => {
        if(facourites.length !== 0  ){
            Alert.alert("cart contain item")
        }else{
            Alert.alert("check our new arrivals")
        }
    }

    const handleCart = () => {
        Alert.alert("Item added to cart")
    }
    return (
        <ImageBackground source={newBg}>
        <View style={[styles.productContainer]}>
            <ScrollView>
                <View style={{height:50,  justifyContent:'space-between', alignItems:'center', flexDirection:'row'  }}>
                    <TouchableOpacity style={{width:"20%", height:'100%', alignItems:'center', justifyContent:'center'}}>
                        {/* <Ionicons name='ellipsis-vertical' size={40}/> */}
                    </TouchableOpacity>
                    <View style={{ width:'30%',height:'100%', flexDirection:"row", justifyContent:'space-evenly', alignItems:"center"}}>
                        <TouchableOpacity style={{height:"80%", width:"30%",alignItems:"center", justifyContent:"center"}}>   
                            <Ionicons name='cart-sharp' size={36}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{height:"80%", width:"30%",  alignItems:"center", justifyContent:"center"}}
                        onPress={() => handleFavroite()}
                        >
                           <Ionicons name='heart-circle-outline' size={36}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[styles.productHeading]}>
                    <Text style={[styles.headingText]}>See Our Products!</Text>
                </View>
                <View style={[styles.buttonContainer]}>
                    <View style={[styles.seacrchContainer]}>
                        <Ionicons name='search-sharp' size={26}/>
                        <TextInput
                        placeholderTextColor = 'black'
                         placeholder='search'
                        style={{width:'84%', fontSize: 18, color:"black"}}
                         />
                        </View>
                    <View style={[styles.alignContainer]}>
                        <View style={[styles.alignmentBox]}>
                            <TouchableOpacity
                                onPress={() => {setDecideAlign(1); Keyboard.dismiss()}}
                            >
                                <Ionicons name='menu-sharp' size={30} ></Ionicons>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {setDecideAlign(2);  Keyboard.dismiss()}}
                            >
                                <Ionicons name='grid-sharp' size={26}></Ionicons>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {setDecideAlign(3);  Keyboard.dismiss()}}
                            >
                                <Ionicons name='square-sharp' size={28}></Ionicons>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.bottomContainer, { height: decideAlign === 1 ? 800 : decideAlign === 2 ? 540 : 1500}]}>
                    {
                        prroductArr.map((item, index) => {
                            const menuStyle = decideAlign === 1 ? styles.menusStyle : decideAlign === 2 ? styles.gridStyle : styles.squareStyle;
                            const pImage = decideAlign === 1 ? styles.productImg : decideAlign === 2 ? styles.grid_productImg: styles.square_productImg;
                            const imageStyle = decideAlign === 1 ? styles.menuImage : decideAlign === 2 ? styles.grid_menuImage:styles.square_menuImage ;
                            const prodDes = decideAlign === 1 ? styles.productDes : decideAlign === 2 ? styles.grid_productDes:styles.square_productDes ;
                            const pName = decideAlign === 1 ? styles.productName : decideAlign === 2 ? styles.grid_productName: styles.square_productName;
                            const pCost = decideAlign === 1 ? styles.productCost : decideAlign === 2 ? styles.grid_productCost: styles.square_productCost ;
                            const pAction = decideAlign === 1 ? styles.actionContainer : decideAlign === 2 ? styles.grid_actionContainer: styles.square_actionContainer ;
                            const plikeBox = decideAlign === 1 ? styles.likeBtnContainer : decideAlign === 2 ? styles.grid_likeBtnContainer: styles.square_likeBtnContainer ;
                            const pHeartPosition = decideAlign === 1 ? styles.heartPossition : decideAlign === 2 ? styles.grid_heartPossition: styles.square_heartPossition;
                            const pCartBox = decideAlign === 1 ? styles.cartBtnContainer : decideAlign === 2 ? styles.grid_cartBtnContainer:styles.square_cartBtnContainer ;


                            return (
                                <>
                                    <View key={index} style={menuStyle}>
                                        <View style={pImage}>
                                            <Image source={item.productImg} style={imageStyle} resizeMode='contain'></Image>
                                        </View>
                                        <View style={prodDes}>
                                            <Text style={pName}>{item.productName}</Text>
                                            <Text style={pCost}>${item.productCost}</Text>
                                        </View>
                                        <View style={pAction}>
                                            <View style={plikeBox}>
                                                <TouchableOpacity
                                                    style={pHeartPosition}
                                                    onPress={() => addFavourites(item)}
                                                >
                                                    {
                                                        facourites.some((row) => row.productId === item.productId) ?
                                                            <Ionicons name='heart-sharp' size={33} color='red'></Ionicons>
                                                            :
                                                            <Ionicons name='heart-outline' size={33} ></Ionicons>
                                                    }
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity style={pCartBox}
                                                onPress={() => handleCart()}
                                            >
                                                <Text style={[styles.cartBtn]}>Add to cart</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        height: "100%",
        width: '100%',
        backgroundColor:"rgba(251,244,247,0.6)",
        padding:5
        // marginTop: "10%"
    },
    productHeading: {
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    headingText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#C47E42',
    },
    buttonContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    seacrchContainer: {
        height: "50%",
        width: '50%',
        borderWidth:0.6,
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:'row'
    },
    alignContainer: {
        height: '60%',
        width: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    alignmentBox: {
        height: "60%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    alignBtn: {
        height: '100%',
        width: "30%",
        alignItems: "center",
        justifyContent: "center"

    },
    bottomContainer: {
        width: '100%',
        alignItems: 'center',
        padding: '1%',
        justifyContent: "space-evenly",
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom:20
    },
    menusStyle: {
        height: 120,
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: "center",
        // padding: "1%",
        borderWidth: 0.6,
        // backgroundColor:"pink"
    },
    productImg: {
        height: '90%',
        width: '34%',
        alignItems: "center",
    },
    menuImage:{
        height: '100%', width: '90%', borderWidth: 1, alignSelf: "flex-start"
    },
    productDes: {
        height: '90%',
        width: "30%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    productName: {
        fontSize: 18,
        fontWeight:'600',
        height: '40%',
        width: "100%",
        color: "navy",
        textAlign: "center",
    },
    productCost: {
        fontSize: 18,
        fontWeight:"500",
        height: '33%',
        width: "100%",
        color: "navy",
        textAlign: "center",
    },
    actionContainer: {
        height: "90%",
        width: "30%",
        justifyContent: "space-around",
        alignItems: "center",
    },
    likeBtnContainer: {
        height: "50%",
        width: '100%',
        position:'relative',
    },
    heartPossition:{
        position:'absolute',
        top : 0,
        right:6
    },
    cartBtnContainer: {
        height: "36%",
        width: "96%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(10,21,81,0.8)',
        borderWidth:1
    },
    cartBtn: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    },
    gridStyle: {
        width: "48%",
        height: 160,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 0.6,
    },
    grid_productImg: {
        height: '40%',
        width: '60%',
        alignItems: "center",
    },
    grid_menuImage:{
        height: '100%', width: '50%', borderWidth: 1, alignSelf: "center"
    },
    grid_productDes: {
        height: '32%',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid_productName: {
        fontSize: 15,
        fontWeight:"600",
        height: '50%',
        width: "100%",
        color: "navy",
        textAlign: "center",
    },
    grid_productCost: {
        fontSize: 15,
        fontWeight:"500",
        height: '50%',
        width: "100%",
        color: "navy",
        textAlign: "center",
    },
    grid_actionContainer: {
        height: "20%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    grid_likeBtnContainer: {
        height: "10%",
        width: '100%',
        // borderWidth: 1
    },
    grid_heartPossition:{
        position:'absolute',
        bottom : 80,
        right:6
    },
    grid_cartBtnContainer: {
        height: "96%",
        width: "96%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(10,21,81,0.8)'
    },
    grid_cartBtn: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    },
    //------------------------------------------
    squareStyle: {
        width: "90%",
        height: 240,
        justifyContent: 'space-evenly',
        alignItems: "center",
        borderWidth: 0.6,
    },
    square_productImg: {
        height: '50%',
        width: '60%',
        alignItems: "center",
    },
    square_menuImage:{
        height: '100%', width: '50%', borderWidth: 1, alignSelf: "center"
    },
    square_productDes: {
        height: '22%',
        width: "90%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    square_productName: {
        fontSize: 18,
        fontWeight:"700",
        height: '50%',
        width: "100%",
        color: "navy",
    },
    square_productCost: {
        fontSize: 18,
        fontWeight:"600",
        height: '50%',
        width: "100%",
        color: "navy",
    },
    square_actionContainer: {
        height: "26%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    square_likeBtnContainer: {
        height: "10%",
        width: '100%',
    },
    square_heartPossition:{
        position:'absolute',
        bottom : 140,
        right:6
    },
    square_cartBtnContainer: {
        height: "70%",
        width: "96%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(10,21,81,0.8)'
    },
    square_cartBtn: {
        fontSize: 16,
        fontWeight: "600",
        color: "white"
    },
})

export default Products