import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function AboutScreen({ navigation }) {
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
                    <View style={styles.container3}>
                        <Text style={styles.text3}>About Us</Text>


                    </View>
                    <Image
                        source={require('../assets/missionPic.png')}
                        style={styles.logo2}
                        resizeMode="contain"
                    >
                    </Image>

                    <Text style={styles.text4}>Our Mission</Text>

                    <Text style={styles.text}>
                        Our mission at Burton and Dogs{'\n'}
                        is to be an
                        extension of you and your family as you strive
                        to provide the best possible life for your pets - even when you're away.
                    </Text>
                    <Text></Text>

                    <Image
                        source={require('../assets/missionPic2.png')}
                        style={styles.logo2}
                        resizeMode="contain"
                    >
                    </Image>

                    <Text style={styles.text4}>What We Are</Text>

                    <Text style={styles.text}>
                        We are a family dog walking{'\n'} and pet sitting company based out of
                        Ahwatukee that is looking to get dogs (and ourselves!)
                        moving and exercising in the mornings.
                    </Text>
                    <Text></Text>

                    <Image
                        source={require('../assets/missionPic3.png')}
                        style={styles.logo2}
                        resizeMode="contain"
                    >
                    </Image>
                    <Text style={styles.text4}>What We Do</Text>

                    <Text style={styles.text}>
                        We walk dogs in the mornings,{'\n'} let them out for potty breaks in the middle of the day,
                        and care for them at night while protecting your home when you're out of town.
                    </Text>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Our Team</Text>
                        <Text></Text>

                    </View>

                    <Image
                        source={require('../assets/teamConnor.png')}
                        style={styles.logo3}
                        resizeMode="contain"
                    >
                    </Image>
                    <Text style={styles.text5}>Connor Burton | Owner and Primary Service Provider</Text>
                    <Text style={styles.text}>
                        Connor is the owner and founder of Burton and Dogs Inc, as well as the primary service provider.
                        He House Sits for clients throughout the calendar year and runs Burton and Dogs Inc remotely from their homes.
                        Connor started Burton and Dogs as a sole proprietor in 2017, and has grown his doggy operation mostly through direct
                        word of mouth referrals.  Connor was an athlete in high school and played baseball and basketball as a kid. When it became
                        time to choose a career, he knew he wanted to do something that involved exercise, so walking dogs is a dream job for him!  He is Pet first Aid Certified.
                    </Text>
                    <Text></Text><Text></Text>

                    <Image
                        source={require('../assets/teamCarson.png')}
                        style={styles.logo3}
                        resizeMode="contain"
                    >
                    </Image>
                    <Text style={styles.text5}>Carson Burton | Dog Walker & House Sitter</Text>
                    <Text style={styles.text}>
                        Carson is the youngest Burton brother. He's been walking dogs and house sitting for clients in Ahwatukee since 2018.
                        He is reliable, professional, and eager to help our human and animal clients live happy lives.
                        He played baseball for South Mountain Community College and is currently studying to become a software engineer
                        at Arizona State University. He is amazing at video games like Gears of War and Call of Duty even though he doesn't play that much.
                        He works out daily at the EoS on Warner and the 10 and lives in Ahwatukee.
                    </Text>
                </View>
            </ScrollView>

        </View>
    );
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },

    container2: {
        flex: 1,
        alignContent: 'center',
        marginTop: '-10%',
        marginHorizontal: 20,
        paddingBottom: 200,
    },

    container3: {
        flex: 1,
        marginTop: '5%',

    },

    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
        paddingTop: 5,
        paddingBottom: 2,
        textAlign: 'center',
        padding: 10,
    },

    text2: {
        marginLeft: '3%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        color: 'green',
        alignSelf: 'center',
    },

    text3: {
        fontWeight: 'bold',
        fontSize: 25,
        textDecorationLine: 'underline',
        paddingBottom: 20,
        color: 'green',
        alignSelf: 'center',

    },

    text4: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green',
        alignSelf: 'center',
        paddingTop: 10,
        textDecorationLine: 'underline'
    },

    text5: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green',
        textAlign: 'center',
        paddingTop: 10,
        textDecorationLine: 'underline'
    },

    logo: {
        width: 200,
        height: 70,
        marginLeft: '3%',
        marginTop: '-15%'
    },

    logo2: {
        width: 150,
        height: 150,
        borderRadius: 50,
        alignSelf: 'center',
    },

    logo3: {
        width: 300,
        height: 150,
        alignSelf: 'center',
    },
});