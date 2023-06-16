import React, { Component } from 'react';
import { Button, View, Text, Linking, WebView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// pages //
import SignupScreen from "./pages/Signup"
import HomeScreen from "./pages/Home.js"
import LoginScreen from "./pages/Login"
import PricingScreen from "./pages/Pricing"
import DogWalkingScreen from "./pages/DogWalking"
import HouseSittingScreen from "./pages/HouseSitting"
import PottyBreakScreen from "./pages/PottyBreaks"
import DropinVisitsScreen from "./pages/DropinVisits"
import AboutScreen from "./pages/About"
import TTPLogin from "./pages/TTPLogin"
import TTPSignup from "./pages/TTPSignup"

//import { WebView } from 'react-native-webview';


/*
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home'
import Browser from './Browser'

export default createStackNavigator({
  Home: { screen: Home },
  Browser: { screen: Browser }
});
*/



const Stack = createNativeStackNavigator();
/*
const TimeToPetPortalScreen = () => {
  return (
    <WebView
      source={{ html: 'https://www.timetopet.com/portal/burton-and-dogs/create-account' }}
    />
  );
};
*/

function App() {
  //const navigation = useNavigation();

  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Signup" component={SignupScreen}
          options={({ navigation }) => ({
            title: 'Signup',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="TTPLogin"
          component={TTPLogin}
        >
        
        </Stack.Screen>
        <Stack.Screen
          name="TTPSignup"
          component={TTPSignup}
        >

        </Stack.Screen>
        <Stack.Screen
          name="Login" component={LoginScreen}
          options={({ navigation }) => ({
            title: 'Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Pricing" component={PricingScreen}
          options={({ navigation }) => ({
            title: 'Pricing',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DogWalking" component={DogWalkingScreen}
          options={({ navigation }) => ({
            title: 'Regular Dog Walks',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="HouseSitting" component={HouseSittingScreen}
          options={({ navigation }) => ({
            title: 'House Sitting',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="PottyBreaks" component={PottyBreakScreen}
          options={({ navigation }) => ({
            title: 'Potty Breaks',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DropinVisits" component={DropinVisitsScreen}
          options={({ navigation }) => ({
            title: 'Drop-in Visits',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="About us"
                color={'white'}
                onPress={() => navigation.navigate('About')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="About" component={AboutScreen}
          options={({ navigation }) => ({
            title: 'About us',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

