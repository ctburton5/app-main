import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

import {
    View,
    TouchableOpacity,
    Text, 
} from 'react-native'

const BackButton = ({ navigation }) =>
    <TouchableOpacity onPress={() => {
        navigation.goBack()
    }}>
        <Text>&lt; Back</Text>
    </TouchableOpacity>

export default class TTPLogin extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'TTPLogin',
        headerLeft: <BackButton navigation={navigation} />
    })

    render() {
        return (
            <View style={{ flex: 1, padding: 5}}>
                <WebView
                    source={{
                        uri: 'https://www.timetopet.com/portal/login'
                    }}
                    style={{ flex: 1 }}

                />
            </View>
        )
    }
}