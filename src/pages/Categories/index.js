import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Header from '../../components/Header';

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header
                    onMenu={() => navigation.goBack()}
                    iconLeft='arrow-left'
                    textHeader='Categorias'
                />
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
    buttonCategories: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        marginLeft: '10%'
    }
});