import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import Header from '../../components/Header'

export default class CategoriesInternal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    
    render() {
        const { navigation } = this.props
        const subCategories = navigation.getParam('subCategoriesItem')
        
        return (
            <View>
                <Header
                    onMenu={() => navigation.navigate('Categories')}
                    iconLeft='arrow-left'
                    textHeader={subCategories.Name}
                />
                <FlatList
                    style={styles.flat}
                    data={subCategories.SubCategories}
                    renderItem={
                        ({ item }) =>

                            <View style={styles.container}>
                                <Text style={styles.textSubCategories}>{item.Name}</Text>
                            </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.getCategories}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flat: {
        height: '85%'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 10,
    },
    textSubCategories: {
        width: '100%',
        height: 25,
        marginLeft: '10%'
    }
});