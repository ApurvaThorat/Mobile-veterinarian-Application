import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown';
import newBg from '../assets/homeIcon.webp';



const Shedule = () => {

    const [isSelected, setIsSelected] = useState(false)
    const [selsctedItem, setSelsctedItem] = useState([])
    const [datePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateToDisplay, setDateToDisplay] = useState(' ')

    const timeInHr = [9, 10, 11, 12, 2, 3, 4, 5, 6];
    const timeInMin = ['00', '15', '30', '45'];

    const servicesArr = [
        {
            id: 1,
            name: 'Neuter / Spay',
        },
        {
            id: 2,
            name: 'Vaccination',
        },
        {
            id: 3,
            name: 'Caesarian Section',
        },
        {
            id: 4,
            name: ' Dental Surgery',
        },
        {
            id: 5,
            name: ' Orthopaedic Surgery',
        },
        {
            id: 6,
            name: 'General Surgery',
        },
        {
            id: 7,
            name: 'Dermatology',
        },
        {
            id: 8,
            name: 'General Medicine',
        },
        {
            id: 9,
            name: 'Other',
        }
    ];

    const handleSelected = (item) => {
        const isPresent = selsctedItem.some((row) => row.id == item?.id);
        if (isPresent == true) {
            const removeData = selsctedItem.filter((I) => I.id !== item?.id);
            setSelsctedItem(removeData);
        } else {
            setSelsctedItem((prevState) => [...prevState, item]);
        }
    }

    const currentDate = new Date(); // to set minimum date
    const currentYear = new Date().getFullYear(); // to set maximum date
    const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleSelectedDate = (date) => {
        const gettingDate = new Date(date.dateString);
        const getMonth = (Month[gettingDate.getMonth()]);
        const dayCareDate = gettingDate.getDate() + " " + getMonth + " " + gettingDate.getFullYear();
        setDateToDisplay(dayCareDate)
        console.log(dayCareDate, ';;;;;;;;;;;;')
    }

    const handleBook = () => {
        Alert.alert("session Booked");
    }



    return (
        <ImageBackground source={newBg}>
        <View style={{ height: '100%', width: '98%',backgroundColor: "rgba(251,244,247,0.5)", paddingHorizontal: 10 }}>
            {/* <View style={{ height: 40, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: "20%", height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Ionicons name='ellipsis-vertical' size={34} />
                </TouchableOpacity>
            </View> */}

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ height: 60, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, height: "80%", borderBottomWidth: 1, fontWeight: "500", }}>Veterinarian Appointment</Text>
                </View>

                <View style={{ height: 80, width: "100%", alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Pet Owner Name :</Text>
                    <TextInput
                        placeholder='Enter Owner Name'
                        style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}
                    />
                </View>
                <View style={{ height: 80, width: "100%", alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Email:</Text>
                    <TextInput
                        placeholder='Example@example.com'
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}
                    />
                </View>
                <View style={{ height: 80, width: "100%", alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Phone Number:</Text>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(text) => console.log(text)}
                        maxLength={10}
                        placeholder='+91 1234567890'
                        style={{ height: "66%", width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}
                    />
                </View>
                <View style={{ height: 220, width: "100%", alignItems: 'center', marginTop: 10, justifyContent: 'space-evenly', borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}>
                    <Text style={{ height: "14%", width: "98%", fontSize: 18, fontWeight: '500', }}>Reason of Appointmen:</Text>
                    {
                        servicesArr.map((item, index) => {

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
                <View style={{ height: datePickerVisible == true ? 400 : 80, width: "100%", alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: 26, width: "98%", fontSize: 18, fontWeight: '500', }}>Appoinemnt Date:</Text>
                    <TouchableOpacity
                        style={{ height: 46, width: "98%", justifyContent: 'center', backgroundColor: "rgba(247,191,190,0.5)", borderBottomWidth: 1, borderColor: "rgb(196,126,66)" }}
                        onPress={() => setDatePickerVisibility(!datePickerVisible)}
                    >

                        <Text style={{ fontSize: 18, fontWeight: '600', }}>{dateToDisplay !== ' ' ? dateToDisplay : ' Select Date'}</Text>


                    </TouchableOpacity>
                    {
                        datePickerVisible == true ?
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
                <View style={{ height: 80, width: "100%", alignItems: 'center', marginTop: 10, }}>
                    <Text style={{ height: "32%", width: "98%", fontSize: 18, fontWeight: '500' }}>Appoinment Time:</Text>
                    <View style={{ height: '56%', alignItems: "center", justifyContent: 'space-around', flexDirection: "row", width: '100%' }}>
                        <SelectDropdown
                            data={timeInHr}
                            defaultButtonText='Time in Hours'
                            buttonStyle={styles.dropdownBtnStyle}
                            dropdownStyle={styles.innerDropdownStyle}
                            rowStyle={styles.dropdownRowStyle}
                        />
                        <SelectDropdown
                            data={timeInMin}
                            defaultButtonText='Time in Minutes'
                            buttonStyle={styles.dropdownBtnStyle}
                            dropdownStyle={styles.innerDropdownStyle}
                            rowStyle={styles.dropdownRowStyle}
                        />
                    </View>
                </View>
                <View style={{ height: 160, width: "100%", alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                    <Text style={{ height: "22%", width: "98%", fontSize: 18, fontWeight: '500' }}>Your Comment:</Text>
                    <TextInput
                        placeholder='Any additional Information'
                        style={{ height: '66%', width: "98%", backgroundColor: "rgba(247,191,190,0.5)", fontSize: 18, borderBottomWidth: 1, borderColor: "rgb(196,126,66)", alignItems: "flex-start" }}
                    />
                </View>
                <View style={{ height: 100, width: '100%', alignItems: "center", justifyContent: 'space-evenly', gap: 10, marginVertical: '5%' }}>
                    <TouchableOpacity
                        style={{ width: '98%', height: '44%', backgroundColor: '#ffb7c5', alignItems: "center", justifyContent: 'center', borderRadius: 50 }}
                        onPress={() => handleBook()}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Book Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '98%', height: '44%', backgroundColor: '#ffb7c5', alignItems: "center", justifyContent: 'center', borderRadius: 50 }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Save for latter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    dropdownBtnStyle: { height: '100%', width: "48%", backgroundColor: "rgba(247,191,190,0.7)", borderRadius: 10 },
    innerDropdownStyle: { backgroundColor: '#rgb(247,191,190)' },
    dropdownRowStyle: { borderBottomWidth: 0.8, borderColor: "#c47e42", },
})
export default Shedule







