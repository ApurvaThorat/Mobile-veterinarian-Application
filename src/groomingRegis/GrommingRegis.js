import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from 'react-native-vector-icons'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import newBg from '../assets/homeIcon.webp';

const GrommingRegis = () => {
    const [costOfService, setCostOfService] = useState('0.00')
    const [selsctedItem, setSelsctedItem] = useState([])
    const [selsctedServiceItem, setSelsctedServiceItem] = useState([])
    const [datePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateToDisplay, setDateToDisplay] = useState(' ')

    console.log(">>>>>>>>>>>>>>>>>>>>>>costOfService", costOfService)

    const hairLenghtArr = [
        {
          id: 1,
          name:'Short',
        },
        {
          id: 2,
          name:'Medium',
        },
        {
          id: 3,
          name:'Long',
        },
        {
          id: 4,
          name:'Not Sure',
        },
        
      ];
      const servicesArr = [
        {
          id: 1,
          name:'Bath',
          cost:'20.00',
        },
        {
          id: 2,
          name:'Nail buffing',
          cost:'10.00',
        },
        {
          id: 3,
          name:'Grooming',
          cost:'40.00',
        },
        {
          id: 4,
          name:'Hair-Cut',
          cost:'30.00',
        },
        {
          id: 5,
          name:'Teeth-brushing',
          cost:'10.00',
        }
      ];
      const timeInHr = [9, 10, 11, 12, 2, 3, 4, 5, 6];
    const timeInMin = ['00', '15', '30', '45'];
    const servicesCost = [20, 10, 10, 40, 30];

    const petAge = ['less than a year', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const hairLength = ['Short', 'Medium', 'Long', 'NOT Sure']


    const handleBook = () => {
        Alert.alert("session Booked");
    }

    const handleSelected = (item) => {
        const isPresent = selsctedItem.some((row) => row.id == item?.id);
        if (isPresent == true) {
            const removeData = selsctedItem.filter((I) => I.id !== item?.id);
            setSelsctedItem(removeData);
        } else {
            setSelsctedItem((prevState) => [...prevState, item]);
        }
    }

    const handleServiceSelected = (index, item) => {
        const isPresent = selsctedServiceItem.some((row) => row.id == item?.id);
        if (isPresent == true) {
            const removeData = selsctedServiceItem.filter((I) => I.id !== item?.id);
            setSelsctedServiceItem(removeData);
        } else {
            setSelsctedServiceItem((prevState) => [...prevState, item]);
        }
        if (index >= 0 && index < servicesCost.length) {
            const cost = servicesCost[index];
            setCostOfService(cost.toFixed(2))
            console.log(`The cost for service at index ${index} is $${cost.toFixed(2)}`);
            console.log(cost)
        } else {
            console.log('Invalid index');
        }
        console.log(selsctedServiceItem, index)
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
    
  

    return (
        <ImageBackground source={newBg}>
        <View style={[styles.pageContainer, {backgroundColor:"rgba(251,244,247,0.5)"}]}>
            {/* <View style={{ height: 40, justifyContent: 'space-between',  alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: "20%", height: '100%', alignItems:'flex-start', justifyContent: 'center' }}>
                    <Ionicons name='ellipsis-vertical' size={34} />
                </TouchableOpacity>
            </View> */}
            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={[styles.headingOne]}>
                    <Text style={[styles.headingText]}>Owner Details</Text>
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Pet Owner Name :</Text>
                    <TextInput
                        placeholder='Enter Owner Name'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Address:</Text>
                    <TextInput
                        placeholder='Enter Address'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>City:</Text>
                    <TextInput
                        placeholder='Enter Address'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>State:</Text>
                    <TextInput
                        placeholder='Enter Address'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Postal / Zip Code:</Text>
                    <TextInput
                     keyboardType='numeric'
                     onChangeText={(text) => console.log(text)}
                     maxLength={6}
                        placeholder='Enter Postal / Zip Code'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Email:</Text>
                    <TextInput
                       placeholder='Example@example.com'
                       textContentType="emailAddress"
                       keyboardType="email-address"
                        style={[styles.placeHolderStyle]}
                    />
                </View>

                <View style={[styles.headingOne]}>
                    <Text style={[styles.headingText]}>Pet Details</Text>
                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Pet Name :</Text>
                    <TextInput
                        placeholder='Enter Pet Name'
                        style={[styles.placeHolderStyle]}
                    />
                </View>

                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Bread of pet:</Text>
                    <TextInput
                        placeholder='Enter your pet Bread'
                        style={[styles.placeHolderStyle]}
                    />
                </View>
                <View style={{ height: 220, width: "100%", alignItems: 'center', marginTop: 10, justifyContent: 'space-evenly', borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}>
                    <Text style={{ height: "14%", width: "98%", fontSize: 18, fontWeight: '500', }}>Hair Length:</Text>
                    {
                        hairLenghtArr.map((item, index) => {

                            return (
                                <View key={index} style={{ height: '14%', width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                    <View style={{ height: "100%", width: '16%', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => handleSelected(item)}>
                                            {
                                                selsctedItem.some((row) => row.id === item.id) ?
                                                    <Ionicons name='checkbox' size={20} />
                                                    :
                                                    <Ionicons name='square-outline' size={20} />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: "100%", width: '80%' }}>
                                        <Text style={{ fontSize: 17, fontWeight: "500" }}>{item.name}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>pet age:</Text>
                    <SelectDropdown
                        data={petAge}
                        defaultButtonText='Select Age'
                        buttonStyle={styles.dropdownBtnStyle}
                        dropdownStyle={styles.innerDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                    />
                </View>
                {/* <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Session time to be shedule: </Text>
                    <TextInput
                        placeholder='date and time'
                        style={[styles.placeHolderStyle]}
                    />
                </View> */}

                <View style={{ height:  datePickerVisible == true ? 400 :80, width: "100%", alignItems: 'center', marginTop: 10, }}>
         <Text style={ { height: 26, width: "94%", fontSize: 18, fontWeight: '500',}}>Session Date:</Text>
          <TouchableOpacity 
          style={{height:46, width:"98%", justifyContent:'center',backgroundColor: "rgba(247,191,190,0.5)",borderBottomWidth: 1,borderColor:"rgb(196,126,66)", paddingLeft:5}} 
          onPress={() => setDatePickerVisibility(!datePickerVisible)}
          >
           
           <Text  style={{fontSize:18,}}>{dateToDisplay !== ' ' ? dateToDisplay :' Select Date'}</Text>


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
    <View style={{ height: 80, width: "100%", alignItems: 'center', marginTop: 10,}}>
                    <Text style={{ height: "32%", width: "94%", fontSize: 18, fontWeight: '500' }}>Session Time:</Text>
                    <View style={{ height: '56%', alignItems: "center", justifyContent: 'space-around', flexDirection: "row", width: '100%' }}>
                        <SelectDropdown
                            data={timeInHr}
                            defaultButtonText='Time in Hours'
                            buttonStyle={styles.timeDdropdownBtnStyle}
                            dropdownStyle={styles.innerDropdownStyle}
                            rowStyle={styles.dropdownRowStyle}
                        />
                        <SelectDropdown
                            data={timeInMin}
                            defaultButtonText='Time in Minutes'
                            buttonStyle={styles.timeDdropdownBtnStyle}
                            dropdownStyle={styles.timeInnerDropdownStyle}
                            rowStyle={styles.timeDropdownRowStyle}
                        />
                    </View>
                </View>
                {/* <View style={[styles.textInputBox]}>
                    <Text style={[styles.textContainer]}>Add services:</Text>
                    <SelectDropdown
                        data={services}
                        defaultButtonText='Select services'
                        buttonStyle={styles.dropdownBtnStyle}
                        dropdownStyle={styles.innerDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                    />
                </View> */}

                <View style={{ height: 220, width: "100%", alignItems: 'center', marginTop: 10, justifyContent: 'space-evenly', borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}>
                    <Text style={{ height: "14%", width: "98%", fontSize: 18, fontWeight: '500', }}>Add services:</Text>
                    {
                        servicesArr.map((item, index) => {

                            return (
                                <View key={index} style={{ height: '14%', width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                    <View style={{ height: "100%", width: '16%', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => handleServiceSelected(index, item)}>
                                            {
                                                selsctedServiceItem.some((row) => row.id === item.id) ?
                                                    <Ionicons name='checkbox' size={20} />
                                                    :
                                                    <Ionicons name='square-outline' size={20} />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: "100%", width: '80%' }}>
                                        <Text style={{ fontSize: 17, fontWeight: "500" }}>{item.name} {item.cost}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={[styles.totalContainer]}>
                    <Text style={[styles.totalText, { textAlign: 'left' }]}>Total:</Text>
                    <Text style={[styles.totalText, { textAlign: "right" }]}>${costOfService}</Text>
                </View>

                <View style={[styles.btnContainer]}>
                    <TouchableOpacity
                        style={[styles.btnStyle]}
                        onPress={() => handleBook()}
                    >
                        <Text>Book session</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnStyle]}
                    >
                        <Text>Save for latter</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    pageContainer: { height: "100%", width: "100%", padding: '4%', gap: 10, justifyContent: "space-around" },
    headingOne: { height: 40, marginTop: '5%', borderWidth: 1, justifyContent: "center" },
    headingText: { fontSize: 22, fontWeight: '600', textAlign: 'center' },
    textInputBox: { height: 80, width: "100%", alignItems: 'center', marginTop: 10 },
    textContainer: { height: "32%", width: "98%", fontSize: 18, fontWeight: '500', paddingLeft:5,  },
    placeHolderStyle: { height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1,borderColor:"rgb(196,126,66)", borderRadius:5,paddingLeft:4 },
    dropdownBtnStyle: { height: '55%', width: "98%", backgroundColor: "rgba(247,191,190,0.5)", },
    innerDropdownStyle: { backgroundColor: 'rgba(247,191,190,0.9)' },
    dropdownRowStyle: { borderBottomWidth: 0.8, borderColor: "rgba(247,191,190,0.5)", },
    timeDdropdownBtnStyle: { height: '100%', width: "48%", backgroundColor: "rgba(247,191,190,0.5)", borderRadius:10 },
    timeInnerDropdownStyle: { backgroundColor: 'rgba(247,191,190,0.9)' },
    timeDropdownRowStyle: { borderBottomWidth: 0.8, borderColor: "rgba(247,191,190,0.5)", },
    totalContainer: { height: 50, flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center" },
    totalText: { width: "44%", fontSize: 20, fontWeight: "500" },
    btnContainer: { height: 80, width: '100%', alignItems: "center", justifyContent: "center", gap: 10, flexDirection: "row" },
    btnStyle: { width: '48%', height: '66%', backgroundColor: "#ffb7c5", alignItems: "center", justifyContent: 'center', borderRadius: 50 },
})

export default GrommingRegis