import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function HouseSittingScreen({ navigation }) {
    const [subtotal, setSubtotal] = React.useState(99)


    const [nightVal, setNightVal] = React.useState("");

    const [nights, setNights] = React.useState([
        { label: '1-9 nights', value: 0 },
        { label: '10 or more nights (-$9)', value: -9 },
    ]);
   

    const [open1, setOpen1] = React.useState(false);
    
    const onOpen1 = React.useCallback(() => {
        setOpen2(false)
        setOpen3(false)

    })
    
    const [petVal, setPetVal] = React.useState("");

    const [pets, setPets] = React.useState([
        { label: '1 or 2 pets', value: 0 },
        { label: '3 pets (+$10)', value: 10 },
        { label: '4 pets (+$20)', value: 20 },
        { label: '5 or more pets (+$30)', value: 30 },
    ]);


    const [open2, setOpen2] = React.useState(false);

    
    const onOpen2 = React.useCallback(() => {
        setOpen1(false)
        setOpen3(false)

    })


    const [open3, setOpen3] = React.useState(false);
    const [locVal, setLocValue] = React.useState(null);
    const [locations, setLoc] = React.useState([
        { label: 'Yes', value: 0 },
        { label: 'No (+$30)', value: 30 },
    ]);

    const onOpen3 = React.useCallback(() => {
        setOpen1(false)
        setOpen2(false)
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
    };

    const [prev3, setPrevVal3] = React.useState(0);
    const handleValueChange3 = (val) => {
        setSubtotal(val + subtotal - prev3)

        setPrevVal3(val)
    };


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
                Base Price: $99
            </Text>

            <Text></Text>
            <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

            <Text style={styles.text}>
                For How Many Nights Are We Staying Over?
            </Text>
                    <DropDownPicker 
                        open={open1}
                        value={nightVal}
                        items={nights}
                        onOpen={onOpen1}
                        setOpen={setOpen1}
                        setValue={setNightVal}
                        setItems={setNights}
                        dropDownDirection='TOP'
                        onChangeValue={(nightVal) => handleValueChange(nightVal)}
                    />
            
            <Text></Text>
            <Text style={styles.text}>
                How many pets are we watching?
            </Text>
            
                    <DropDownPicker
                        open={open2}
                        value={petVal}
                        items={pets}
                        onOpen={onOpen2}
                        setOpen={setOpen2}
                        setValue={setPetVal}
                        setItems={setPets}
                        dropDownDirection='TOP'

                        onChangeValue={(petVal) => handleValueChange2(petVal)}

                    />
            <Text>

            </Text>
            <Text style={styles.text}>
                Are you an Ahwatukee Resident (or live within 3 miles of Ahwatukee)?
            </Text>
                    <DropDownPicker
                        open={open3}
                        value={locVal}
                        items={locations}
                        onOpen={onOpen3}
                        setOpen={setOpen3}
                        setValue={setLocValue}
                        setItems={setLoc}
                        dropDownDirection='TOP'
                        onChangeValue={(locVal) => handleValueChange3(locVal)}
                    />

                    <Text></Text>
                    <Text style={styles.text4}>
                        Subtotal: ${subtotal}
                    </Text>
                    <Text style={styles.text5}>
                        Subtotal reflects price per night
                    </Text>
            <Text></Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Pricing')}

            >
                <Text style={styles.loginText}>Add to Cart</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>

            <Text style={styles.text}>
                        Our House Sitting Service allows dog owners to go out of town and rest easy knowing their dogs will be comfortable in their own environment. {'\n'}
                        What's included: {'\n'}
                        - One Insured, Professional House Sitter {'\n'}
                        - Overnight Stay At Your Home For As Many Nights Needed {'\n'}
                        - 12 hours or more spent in-home per day (this is a premium, live-in service. We will eat and sleep in the home and essentially pretend we live there) {'\n'}
                        - All necessary Feedings {'\n'}
                        - All Necessary Medication Administrations {'\n'}
                        - Backyard Poop Cleanup {'\n'}
                        - Mail Retrieval {'\n'}
                        - Time-Stamped Photo and Video Updates {'\n'}
                        - Neatness Guarantee (We'll Clean Up After Ourselves And Leave The Home As Nice As We Found It) {'\n'}
            </Text>

                    <Text></Text><Text></Text><Text></Text><Text></Text>
                    <Text></Text><Text></Text><Text></Text><Text></Text>
                </View>

        </ScrollView>
        </View>
    );
}

export default HouseSittingScreen;

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
        fontSize: 25,
        color: 'black',
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