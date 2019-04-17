import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>Funcionou!</Text>
            </View>
        );
    }
}
