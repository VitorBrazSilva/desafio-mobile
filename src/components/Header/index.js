import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
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

        return (
            <View style={styles.boxHeader}>
                <TouchableOpacity
                    onPress={this.props.onMenu}
                >
                    <Icon name={this.props.iconLeft} size={25} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{this.props.textHeader}</Text>

                <View style={styles.boxIcons}>
                    <TouchableOpacity
                        onPress={this.props.onSearch}
                    >
                        <Icon name={this.props.iconSearch} size={25} color="#fff" />
                    </TouchableOpacity>
                    <Icon name={this.props.iconRight} size={25} color="#fff" />
                </View>
            </View>
        );
    }
}
