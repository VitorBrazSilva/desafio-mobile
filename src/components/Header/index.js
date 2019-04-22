import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text
} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputSearch: false
        }
    }

    render() {

        let searchState = this.props.input
        // this.setState({ inputSearch: searchState })

        return (
            <View style={styles.boxHeader}>
                <TouchableOpacity
                    onPress={this.props.onMenu}
                >
                    <Icon name={this.props.iconLeft} size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{this.props.textHeader}</Text>
                {
                    !this.state.inputSearch
                        ?
                        <View style={styles.boxIcons}>
                            <TouchableOpacity
                                onPress={this.props.onSearch}
                            >
                                <Icon name={this.props.iconSearch} size={25} color="#fff" />
                            </TouchableOpacity>
                            <Icon name="shopping-cart" size={25} color="#fff" />
                        </View>
                        :
                        <View style={styles.boxIcons}>
                            <TextInput
                                {...this.props}
                                editable={true}
                            />
                        </View>
                }
            </View>
        );
    }
}
