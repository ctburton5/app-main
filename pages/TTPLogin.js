import React, { Component } from 'react'

import {
    View,
    WebView,
    TouchableOpacity,
    Text
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
            <View style={{ flex: 1 }}>
                <WebView
                    source={{
                        uri: this.props.navigation.state.params.url
                    }}
                    style={{ flex: 1 }}

                />
            </View>
        )
    }
}