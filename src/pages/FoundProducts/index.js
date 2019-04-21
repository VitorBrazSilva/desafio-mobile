import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'

export default class FoundProducts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            products: [],
            Offset: 0,
            query: ''
        }
    }

    render() {

        const { navigation } = this.props
        const search = this.props.navigation.getParam('inputSearch')

        return (
            <View>
                <Header
                    iconLeft="arrow-left"
                    onMenu={() => navigation.navigate({ routeName: 'Search' })}
                    input={true}
                />
                <View>
                </View>
            </View>



        )
    }
}