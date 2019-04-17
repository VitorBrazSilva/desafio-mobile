import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Header from '../../components/Header'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Header
                    onMenu={() => navigation.openDrawer()}
                />
            </View>
        );
    }
}

