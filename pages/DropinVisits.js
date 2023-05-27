import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function DropinVisits({ navigation }) {
    const [subtotal, setSubtotal] = React.useState(35)

    const [open1, setOpen1] = React.useState(false);
    const [petVal, setPetValue] = React.useState(null);
    const [pets, setPets] = React.useState([
        { label: 'One pet', value: 0 },
        { label: 'Two pets (+$3)', value: 3 },
        { label: 'Three pets (+$6)', value: 6 },
        { label: 'Four pets or more (+$9)', value: 9 },
    ]);

    const onOpen1 = React.useCallback(() => {
        setOpen2(false)
        setOpen3(false)
        setOpen4(false)

    })



    const [open2, setOpen2] = React.useState(false);
    const [visitVal, setVisitValue] = React.useState(null);
    const [visits, setVisits] = React.useState([
        { label: '4 or less  (+$10)', value: 10 },
        { label: '5 or more', value: 3 },
        
    ]);

    const onOpen2 = React.useCallback(() => {
        setOpen1(false)
        setOpen3(false)
        setOpen4(false)

    })

    const [open3, setOpen3] = React.useState(false);
    const [timeVal, setTimeValue] = React.useState(null);
    const [time, setTime] = React.useState([
        { label: '30 minutes', value: 0 },
        { label: '1 hour (+$25)', value: 25 },
        { label: '1.5 hours (+$35)', value: 35 },
        { label: '2 hours (+$45)', value: 45 },

    ]);

    const onOpen3 = React.useCallback(() => {
        setOpen1(false)
        setOpen2(false)
        setOpen4(false)

    })

    const [open4, setOpen4] = React.useState(false);
    const [locVal, setLocValue] = React.useState(null);
    const [locations, setLoc] = React.useState([
        { label: 'Yes', value: 0 },
        { label: 'No (+$10)', value: 10 },
    ]);

    const onOpen4 = React.useCallback(() => {
        setOpen1(false)
        setOpen2(false)
        setOpen3(false)
    })

    //////// VALUE CHANGES FOR SUBTOTAL ////////////////////
    const [prev, setPrevVal] = React.useState(0);
    const handleValueChange = (val) => {
        setSubtotal(val + subtotal - prev)
        setPrevVal(val)
    };

    const [prev2, setPrevVal2] = React.useState(0);
    const handleValueChange2 = (val) => {
        setSubtotal(val + subtotal - prev2)

        setPrevVal2(val)
    }

    const [prev3, setPrevVal3] = React.useState(0);
    const handleValueChange3 = (val) => {
        setSubtotal(val + subtotal - prev3)

        setPrevVal3(val)
    }

    const [prev4, setPrevVal4] = React.useState(0);
    const handleValueChange4 = (val) => {
        setSubtotal(val + subtotal - prev4)

        setPrevVal4(val)
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/BnDLogo2.png')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>
            <ScrollView style={styles.container}>
            <View style={styles.container2}>
                
                <Text></Text>
                <Text style={styles.text2}>
                    Base Price: $35
                </Text>

                <Text></Text>
                <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    
                <Text style={styles.text}>
                    How many pets are we visiting?
                </Text>
                <DropDownPicker
                    open={open1}
                    value={petVal}
                    items={pets}
                    onOpen={onOpen1}
                    setOpen={setOpen1}
                    setValue={setPetValue}
                    setItems={setPets}
                    dropDownDirection='TOP'

                    onChangeValue={(petVal) => handleValueChange(petVal)}

                />
                
                <Text></Text>

                <Text style={styles.text}>
                    How many visits do you want to purchase?
                </Text>
                    <DropDownPicker
                        open={open2}
                        value={visitVal}
                        items={visits}
                        onOpen={onOpen2}
                        setOpen={setOpen2}
                        setValue={setVisitValue}
                        setItems={setVisits}
                        dropDownDirection='TOP'

                    onChangeValue={(visitVal) => handleValueChange2(visitVal)}

                    />
                <Text></Text>

                <Text style={styles.text}>
                    Preferred length of Stay?
                </Text>
                    <DropDownPicker
                        open={open3}
                        value={timeVal}
                        items={time}
                        onOpen={onOpen3}
                        setOpen={setOpen3}
                        setValue={setTimeValue}
                        setItems={setTime}
                        dropDownDirection='TOP'

                    onChangeValue={(timeVal) => handleValueChange3(timeVal)}

                    />
                <Text></Text>

                <Text style={styles.text}>
                    Are you an Ahwatukee Resident (or live within 3 miles of the Ahwatukee area)?
                </Text>
                    <DropDownPicker
                        open={open4}
                        value={locVal}
                        items={locations}
                        onOpen={onOpen4}
                        setOpen={setOpen4}
                        setValue={setLocValue}
                        setItems={setLoc}
                        dropDownDirection='TOP'

                        onChangeValue={(locVal) => handleValueChange4(locVal)}
                    />
                    <Text></Text>

                    <Text style={styles.text4}>
                        Subtotal: ${subtotal}
                    </Text>

                    <Text style={styles.text5}>
                        Subtotal reflects price per visit
                    </Text>
                <Text></Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Pricing')}

                >
                    <Text style={styles.loginText}>Add to Cart</Text>
                </TouchableOpacity>
                <Text></Text><Text></Text><Text></Text>

                <Text style={styles.text}>
                    *ADJUST QUANTITY TO REFLECT NUMBER OF VISITS NEEDED* {'\n'}
                    Our Drop-In Visit Service Allows Dog Owners To Go To Work, Go Out Of Town,
                    And Have A Life Without Worrying About The Dog Being Alone All Day {'\n'} {'\n'}
                    What's included: {'\n'}
                    30-Minute Visits {'\n'}
                    - Potty Breaks, As Necessary {'\n'}
                    - Feedings, As Necessary {'\n'}
                    - Medication Administration, As Necessary {'\n'}
                    - High Quality, HD Photos {'\n'}
                    - Time-Stamped Video and/or Photo Updates Via Snapchat {'\n'}
                    - Post-Visit Report Cards {'\n'}
                    - Available As A Vacation Solution And A Regular Workday Solution {'\n'}
                </Text>

                <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>

                </View>

            </ScrollView>

        </View>
    );
}

export default DropinVisits;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    container2: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: '-15%'
    },
    input: {
        height: 35,
        margin: 12,
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,

        marginTop: '1%'
    },

    text: {
        marginLeft: '3%',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
        paddingBottom: 2,
    },
    text2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },

    text3: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
        paddingTop: 15,
        paddingLeft: 10,
    },
    text4: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    text5: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'green',
        paddingBottom: 2,
    },

    button: {
        width: "40%",
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "green",
        alignSelf: 'center'
    },

    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    logo: {
        width: 200,
        height: 70,
        marginLeft: '3%',
        marginTop: '-15%'
    },
});