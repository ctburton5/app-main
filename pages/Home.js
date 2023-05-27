
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen( {navigation} ) {

    return (
        <ImageBackground
            source={require('../assets/homePic.png')}
            style={styles.container}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/BnDLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
                <Text style={styles.text}>Ahwatukee Dog Walkerr</Text>

                <TouchableOpacity
                
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.button}>Sign Up</Text>
                </TouchableOpacity>
                
                <Text>
                </Text>
                <Text>
                </Text>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.button}>Log In</Text>
                </TouchableOpacity>
                
                <Text>
                </Text>
                <Text>
                </Text>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Pricing')}
                >
                    <Text style={styles.button}>Pricing</Text>
                </TouchableOpacity>
            
            </View>
        </ImageBackground>
    );
    
}
export default HomeScreen;


const styles = StyleSheet.create({
    

    container: {
        flex: 3,
        alignItems: 'center',
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,

    },

    logo: {
        width: 350,
        height: 350,
        marginTop: '-15%',
        
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: '-38%',
        marginLeft: '7%',
        paddingBottom: 120,
    },

    buttonContainer: {
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
    },

    button: {
        color: 'white',
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 27,
        alignSelf: 'center'
    },
});