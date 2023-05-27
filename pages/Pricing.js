import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PricingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/dog1.png')}
                style={styles.image}
                resizeMode="contain"
            >
            </Image>
            <TouchableOpacity

                onPress={() => navigation.navigate('DogWalking')}
            >
                <Text style={styles.text}>Dog Walking</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/Dogwalkingpic.png')}
                style={styles.image2}
                resizeMode="contain"
            >
            </Image>

            <TouchableOpacity

                onPress={() => navigation.navigate('HouseSitting')}
            >
                <Text style={styles.text}>Overnight House Sitting</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/dog2.png')}
                style={styles.image}
                resizeMode="contain"
            >
            </Image>

            <TouchableOpacity

                onPress={() => navigation.navigate('PottyBreaks')}
            >
                <Text style={styles.text}>Midday Potty Breaks</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/dropinpic.png')}
                style={styles.image2}
                resizeMode="contain"
            >
            </Image>

            <TouchableOpacity

                onPress={() => navigation.navigate('DropinVisits')}
            >
                <Text style={styles.text}>Drop-in Visits (Includes feedings)</Text>
            </TouchableOpacity>

        </View>
    );
}

export default PricingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-20%',
        paddingTop: 40,

    },

    image: {
        width: 125,
        height: 125,
    },

    image2: {
        width: 300,
        height: 125,
    },

    text: {
        fontSize: 20,
        paddingBottom: 25,
        color: 'green',
        fontWeight: 'bold',
    }
})