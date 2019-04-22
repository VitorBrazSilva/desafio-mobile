import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            queryInput: ''
        }
    }

    changeText = (queryInput) => {
        this.setState({ queryInput })
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.containerFull}>
                <Header
                    iconLeft="arrow-left"
                    onMenu={() => navigation.goBack()}
                    textHeader='Pesquisar'
                />
                <Text style={styles.text}>Digite no campo abaixo para pesquisar</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.changeText}
                        value={this.state.queryInput}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FoundProducts', {
                                inputSearch: this.state.queryInput
                            })
                            this.setState({ queryInput: '' })
                        }}
                    >
                        <Icon name="search" color="#ed141b" size={20} />
                    </TouchableOpacity>
                </View>
            </View>



        )
    }
}