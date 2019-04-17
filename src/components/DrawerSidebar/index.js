import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class DrawerSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
});