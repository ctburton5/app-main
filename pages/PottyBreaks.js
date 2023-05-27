import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function PottyBreaks({ navigation }) {
    const [subtotal, setSubtotal] = React.useState(22)


    const [breakVal, setBreakVal] = React.useState("");

    const [breaks, setBreaks] = React.useState([
        { label: '5 or more', value: 0 },
        { label: '3 to 4 (+$2)', value: 2 },
        { label: '1 to 2 (+$6)', value: 6 },
    ]);


    const [open1, setOpen1] = React.useState(false);

    const onOpen1 = React.useCallback(() => {
        setOpen2(false)
        setOpen3(false)

    })

    const [petVal, setPetVal] = React.useState("");

    const [pets, setPets] = React.useState([
        { label: '1', value: 0 },
        { label: '2 pets (+$3)', value: 3 },
        { label: '3 pets (+$6)', value: 6 },
        { label: '4 (+$9)', value: 9 },
        { label: '5 (+$12)', value: 12 },
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
        { label: 'No (+$5)', value: 5 },
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
                        Base Price: $22
                    </Text>

                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

                    <Text style={styles.text}>
                        How many potty breaks will you need pre week?
                    </Text>
                    <DropDownPicker
                        open={open1}
                        value={breakVal}
                        items={breaks}
                        onOpen={onOpen1}
                        setOpen={setOpen1}
                        setValue={setBreakVal}
                        setItems={setBreaks}
                        dropDownDirection='TOP'
                        onChangeValue={(breakVal) => handleValueChange(breakVal)}
                    />

                    <Text></Text>
                    <Text style={styles.text}>
                        How many dogs are we letting out?
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
                        Subtotal reflects price per potty break
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
                        Our Potty Break Services allows dog owners to go to work with a peace of mind that comes from knowing that their pups are being checked on and let out during the day. {'\n'}

                        What's Included: {'\n'}

                        - Quick 15-Minute Visits {'\n'}
                        - Water Bowl Check {'\n'}
                        - Time-Stamped Photos And/Or Videos Via Snapchat {'\n'}
                        - Post-visit report cards {'\n'}
                    </Text>

                    <Text></Text><Text></Text><Text></Text><Text></Text>
                    <Text></Text><Text></Text><Text></Text><Text></Text>
                </View>

            </ScrollView>
        </View>
    );
}
export default PottyBreaks;

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