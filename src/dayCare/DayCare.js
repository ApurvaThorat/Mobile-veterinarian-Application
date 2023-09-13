import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, alert, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import newBg from '../assets/homeIcon.webp';


const DayCare = () => {

  const[isSelected, setIsSelected] = useState(false);
  const [selsctedItem, setSelsctedItem] = useState([]);
  const [datePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateToDisplay, setDateToDisplay] = useState(' ')

  console.log(">>SelesctedItme>>>>>>>>>.", selsctedItem)

  const servicesArr = [
    {
      id: 1,
      name:'Bath',
    },
    {
      id: 2,
      name:'Nail buffing',
    },
    {
      id: 3,
      name:'Grooming',
    },
    {
      id: 4,
      name:'Hair-Cut',
    },
    {
      id: 5,
      name:'Teeth-brushing',
    }
  ];

  const handleSelected = ( item) => {
    const isPresent = selsctedItem.some((row) => row.id == item?.id );
     if(isPresent == true){
      const removeData = selsctedItem.filter((I) => I.id !== item?.id);
      setSelsctedItem(removeData);
     }else{
      setSelsctedItem((prevState) => [...prevState, item]);
     }
  }

  const currentDate = new Date(); // to set minimum date
    const currentYear = new Date().getFullYear(); // to set maximum date
    const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleSelectedDate = (date) => {
      const gettingDate = new Date(date.dateString);
      const getMonth = (Month[gettingDate.getMonth()]);
        const dayCareDate = gettingDate.getDate()+ " " +  getMonth + " " +gettingDate.getFullYear() ;
        setDateToDisplay(dayCareDate)
        console.log(dayCareDate,';;;;;;;;;;;;')
    }
    const handleBook = () => {
      Alert.alert("session Booked");
  }

  return (
    <ImageBackground source={newBg}>
    <View style={{height:'100%', width:'100%', backgroundColor:"rgba(251,244,247,0.5)", paddingLeft:6, justifyContent:'center'}}>
         {/* <View style={{ height: 40, justifyContent: 'space-between',  alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: "20%", height: '100%', alignItems:'flex-start', justifyContent: 'center' }}>
                    <Ionicons name='ellipsis-vertical' size={34} />
                </TouchableOpacity>
            </View> */}
      
     <ScrollView >

     <View style={{height:60, justifyContent:"center",}}>
    <Text style={{fontSize:24, fontWeight:"500",marginLeft:6, textAlign:"center"}}>Dog Daycare Reservation</Text>
    <Text style={{width:'90%', marginLeft:6, textAlign:'left'}}>Share with us what care you need for your dog and we will do just exactly that!</Text>
      </View>

     <View style={{ height: 80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Pet Owner Name :</Text>
            <TextInput
             placeholder='Enter Full Name'
             style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}
            />
    </View>
    <View style={{ height: 80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Email:</Text>
            <TextInput
             placeholder='Example@example.com'
             textContentType="emailAddress"
             keyboardType="email-address"
             style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}
            />
    </View>
    <View style={{ height: 80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Phone Number:</Text>
            <TextInput
            keyboardType = 'numeric'
            onChangeText = {(text) => console.log(text)}
            maxLength={10}
             placeholder='+91 1234567890'
             style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}
            />
    </View>
    <View style={{ height: 80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Dog Name:</Text>
            <TextInput
             placeholder='Dog Name'
             style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}
            />
    </View>
    <View style={{ height: 80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Dog Bread:</Text>
            <TextInput
             placeholder='Dog Bread'
             style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}
            />
    </View>
    <View style={{ height:  datePickerVisible == true ? 400 :80, width: "98%", alignItems: 'center', marginTop: 10 }}>
         <Text style={ { height: 26, width: "98%", fontSize: 18, fontWeight: '500',}}>Day care Date:</Text>
          <TouchableOpacity 
          style={{height:46, width:"98%", justifyContent:'center',backgroundColor: "rgba(247,191,190,0.5)",borderBottomWidth: 1,borderColor:"rgb(196,126,66)"}} 
          onPress={() => setDatePickerVisibility(!datePickerVisible)}
          >
           
           <Text  style={{fontSize:18, fontWeight:'600',}}>{dateToDisplay !== ' ' ? dateToDisplay :' Select Date'}</Text>


          </TouchableOpacity>
          {
            datePickerVisible == true?
            <Calendar
              horizontal={true}
              minDate={currentDate.toISOString().split('T')[0]} // Set minimum date as current date
              maxDate={`${currentYear}-12-31`} // Set maximum date as last day of the current year
              isVisible={datePickerVisible}
              onDayPress={(date) => handleSelectedDate(date)}
             />
             :
             <></>
          }
    </View>

    <View style={{ height: 220, width: "98%", alignItems: 'center', marginTop: 10, justifyContent:'space-evenly',borderBottomWidth: 1,borderColor:"rgb(196,126,66)" }}>
         <Text style={ { height: "14%", width: "98%", fontSize: 18, fontWeight: '500',  }}>Optional Grooming Services:</Text>
         {
          servicesArr.map((item, index) =>{

            return(
              <View  key ={index}style={{height:'14%', width:"100%", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
          <View style={{height:"100%", width:'16%', alignItems:'center'}}>
            <TouchableOpacity onPress={() => handleSelected(item)}>
            {
              selsctedItem.some((row) => row.id === item.id)?
              <Ionicons name='checkbox' size={20}/>
              :
              <Ionicons name='square-outline' size={20}/>
            }
            </TouchableOpacity>
          </View>
          <View style={{height:"100%", width:'80%'}}>
          <Text style={{fontSize:17, fontWeight:"500"}}>{item.name}</Text>
          </View>
         </View>
            )
          })
         }
            
    </View>
    <View style={{ height: 160, width: "98%", alignItems: 'center', marginTop: 10, justifyContent:'center' }}>
         <Text style={ { height: "22%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Comment:</Text>
            <TextInput
             placeholder='Any additional Information'
             style={{ height: '66%', width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)" , alignItems:"flex-start",}}
            />
    </View>
    <View style={{ height: 100, width: '100%', alignItems: "center", justifyContent: 'space-evenly', gap: 10,}}>
                    <TouchableOpacity
                        style={{ width: '98%', height: '44%', backgroundColor: "#ffb7c5", alignItems: "center", justifyContent: 'center', borderRadius: 50 }}
                        onPress={() => handleBook()}
                    >
                        <Text style={{fontSize:18, fontWeight:"600"}}> Reserve</Text>
                    </TouchableOpacity>
    </View>
     </ScrollView>
    </View>
    </ImageBackground>
  )
}

export default DayCare


