import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            queryInput: ''
        }
    }

    changeText = (queryInput) => {
        this.setState({queryInput})
    }

    render() {
        const { navigation } = this.props
        
        return (
            <View>
                <Header
                    iconLeft="arrow-left"
                    onMenu={() => navigation.goBack()}
                    textHeader='Pesquisar'
                />
                <View>
                    <Text>Pesquisar</Text>
                    <TextInput
                        onChangeText={this.changeText}
                        value={this.state.queryInput}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FoundProducts', {
                            inputSearch: this.state.queryInput 
                        })
                        this.setState({queryInput: ''})
                    }}
                    >
                        <Text>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
            </View>



        )
    }
}