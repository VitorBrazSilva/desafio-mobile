import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        
        return (
            <View style={styles.boxHeader}>
                <TouchableOpacity
                    onPress={this.props.onMenu}
                >
                    <Icon name="bars" size={25} color="#fff" />
                </TouchableOpacity>
                <View style={styles.boxIcons}>
                    <TouchableOpacity>
                        <Icon name="search" size={25} color="#fff" />
                    </TouchableOpacity>
                    <Icon name="shopping-cart" size={25} color="#fff" />
                </View>
            </View>
        );
    }
}
