// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/







/*



NO LONGER NEEDED


*/






// Import React and Component
import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';

//import Loader from './Components/Loader';

const LoginScreen = ({ navigation }) => {
/*
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }
        setLoading(true);
        let dataToSend = { email: userEmail, password: userPassword };
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: formBody,
            headers: {
                //Header Defination
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loader
                setLoading(false);
                console.log(responseJson);
                // If server response message same as Data Matched
                if (responseJson.status === 'success') {
                    AsyncStorage.setItem('user_id', responseJson.data.email);
                    console.log(responseJson.data.email);
                    navigation.replace('DrawerNavigationRoutes');
                } else {
                    setErrortext(responseJson.msg);
                    console.log('Please check your email id or password');
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
    };
*/
    return (
        <View style={styles.mainBody}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={{ alignItems: 'center', marginTop: '-50%' }}>
                            <Image
                                source={require('../assets/BnDLogo3.png')}
                                style={{
                                    width: '50%',
                                    height: 200,
                                    width: 200,
                                    resizeMode: 'contain',
                                    
                                }}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                /*
                                onChangeText={(UserEmail) =>
                                    setUserEmail(UserEmail)
                                }
                                */
                                placeholder="Enter Email" 
                                placeholderTextColor="green"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                /*
                                onSubmitEditing={() =>
                                    passwordInputRef.current &&
                                    passwordInputRef.current.focus()
                                }
                                */
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                
                                style={styles.inputStyle}
                                /*
                                onChangeText={(UserPassword) =>
                                    setUserPassword(UserPassword)
                                }
                                */
                                placeholder="Enter Password" //12345
                                placeholderTextColor="green"
                                keyboardType="default"
                                //ref={passwordInputRef}
                                //onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>

                        
                        
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            //onPress={handleSubmitPress}
                            >
                            <Text style={styles.buttonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        <Text
                            style={styles.registerTextStyle}
                            onPress={() => navigation.navigate('Signup')}>
                            New Here ? Register
                        </Text>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 60,
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: 'green',
        borderWidth: 2,
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: 'green',
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputStyle: {
        flex: 1,
        color: 'green',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'green',
    },
    registerTextStyle: {
        color: 'green',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});