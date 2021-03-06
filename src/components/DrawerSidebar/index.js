import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class DrawerSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonCategories}
                    onPress={() => navigation.navigate('Categories')}
                >
                    <Text>Categorias</Text>
                </TouchableOpacity>
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