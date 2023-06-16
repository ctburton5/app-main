


/*




NO LONGER NEEDED





*/









import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
//import { Select } from 'react-select';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState, useRef, Alert } from 'react';
//import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';

function SignupScreen({ navigation }) {
    const [name, onChangeText] = useState("");
    const [email, onChangeEmail] = useState("");
    const [number, onChangeNumber] = useState("");
    const [city, onChangeCity] = useState("");
    const [state, onChangeState] = useState("");
    const [zip, onChangeZip] = useState("");

    // for SelectList
    const [selected, setSelected] = React.useState("");
    const data = [
        { key: '1', value: 'Client Referral' },
        { key: '2', value: 'Google' },
        { key: '3', value: 'Print ad' },
        { key: '4', value: 'Twitter' },
        { key: '5', value: 'Facebook' },
        { key: '6', value: 'Henri app' },
        { key: '7', value: 'Yahoo' },
        { key: '8', value: 'Other' },
    ]


    return (
        <View style={styles.container2}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../assets/BnDLogo2.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
            </TouchableOpacity>


        <ScrollView style={styles.container}>
            

            <Text style={styles.text}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={name}
                placeholderTextColor={'grey'}
                placeholder="Full Name"
                autoCapitalize='words'
            />
            <Text style={styles.text}>Email</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholderTextColor={'grey'}
                placeholder="Email Address"
                keyboardType="email-address"

            />
            <Text style={styles.text}>Phone Number</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                placeholderTextColor={'grey'}
                keyboardType="phone-pad"
            />

            <Text style={styles.text}>City</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeCity}
                value={city}
                placeholderTextColor={'grey'}
                placeholder="City"
            />

            <Text style={styles.text}>State</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeState}
                value={state}
                placeholderTextColor={'grey'}
                placeholder="State"
            />

            <Text style={styles.text}>Zip Code</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeZip}
                value={zip}
                placeholderTextColor={'grey'}
                placeholder="Zip Code"
                keyboardType="numeric"
            />

            <Text style={styles.text}>How did you hear about us?</Text>

            <SelectList
                boxStyles={{ borderColor: 'green', borderWidth: 2 }}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
            />

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('Signup')}

            >
                <Text style={styles.loginText}>Create Your Account</Text>
            </TouchableOpacity>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
        </ScrollView>

</View>
    );
}

export default SignupScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },

    container2: {
        flex: 1,
        paddingTop: 50,
    },
    
    input: {
        flex: 1,
        color: 'green',
        padding: 10,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'green',

    },

    text: {
        marginLeft: '3%',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
        paddingTop: 15,
    },
    text2: {
        marginLeft: '3%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        color: 'green',
    },

    loginBtn: {
        width: "40%",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'green',
        height: 50,
        width: 225,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "white",
        alignSelf: 'center',
    },

    loginText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
    },

    logo: {
        width: 200,
        height: 70,
        marginLeft: '3%',
        marginTop: '-15%'
    },
});