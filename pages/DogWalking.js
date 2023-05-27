import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
import { FlatList } from 'react-native-gesture-handler';



function DogWalkingScreen({ navigation }) {

    const [subtotal, setSubtotal] = React.useState(25)

    const [open1, setOpen1] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: '5 walks or more', value: 0 },
        { label: '3 to 4 walks (+$3)', value: 3 },
        { label: '1 to 2 walks (+$10)', value: 10 },
    ]);

    const onOpen1 = React.useCallback(() => {
        setOpen2(false)
        setOpen3(false)
        setOpen4(false)

    })


    const [open2, setOpen2] = React.useState(false);
    const [dogVal, setDogValue] = React.useState(null);
    const [dogs, setDogs] = React.useState([
        { label: 'one dog', value: 0 },
        { label: 'two dogs (+$3)', value: 3 },
        { label: 'three dogs(+$6)', value: 6 },
        { label: 'four dogs (+$9)', value: 9 },
    ]);
    
    const onOpen2 = React.useCallback(() => {
        setOpen1(false)
        setOpen3(false)
        setOpen4(false)

    })


    const [open3, setOpen3] = React.useState(false);
    const [timeVal, setTimeValue] = React.useState(null);
    const [times, setTime] = React.useState([
        { label: '30 minutes', value: 0 },
        { label: '45 minutes (+$10)', value: 10 },
        { label: '60 minutes (+$20)', value: 20 },
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
        { label: 'No (+$8)', value: 8 },
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

    return(
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
                Base Price: $25
            </Text>

            <Text></Text>
            <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    
            <Text style={styles.text}>
                Number of walks per week?
            </Text>

                    <DropDownPicker
                        open={open1}
                        value={value}
                        items={items}
                        onOpen={onOpen1}
                        setOpen={setOpen1}
                        setValue={setValue}
                        setItems={setItems}
                        dropDownDirection='TOP'
                        
                        onChangeValue={(value) => handleValueChange(value)}

                    />
            <Text></Text>
            
            <Text style={styles.text}>
                How many dogs will we be walking?
            </Text>
                <DropDownPicker
                    name='dd2'
                    open={open2}
                    value={dogVal}
                    items={dogs}
                    onOpen={onOpen2}
                    setOpen={setOpen2}
                    setValue={setDogValue}
                    setItems={setDogs}
                    dropDownDirection='TOP'

                    onChangeValue={(dogVal) => handleValueChange2(dogVal)}

                />
            <Text></Text>
            <Text style={styles.text}>
                For how long do you want you dogs walked?
            </Text>
                <DropDownPicker
                    name='dd3'
                    open={open3}
                    value={timeVal}
                    items={times}
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
                Subtotal reflects price per walk
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Pricing')}

            >
                <Text style={styles.loginText}>Add to Cart</Text>
            </TouchableOpacity>
            <Text></Text>
            
            
            <Text></Text>
                <Text style={styles.text}>
                Does your dog need some exercise during the day while you're busy or at work? That's what we're here for!
            </Text>
            <Text></Text>
                <Text style={styles.text}>
                What's included:
            </Text>
                <Text style={styles.text}>

                30-minute Walks {'\n'}
                - High Quality, HD Photos {'\n'}
                - Time-Stamped Video and Photo Updates Via Instagram Stories and/or Snapchat {'\n'}
                - Post-Walk Report Cards {'\n'}
            </Text>
                <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>

                </View>
        </ScrollView>

        </View>
    );
}

export default DogWalkingScreen;

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