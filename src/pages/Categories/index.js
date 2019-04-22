import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Header from '../../components/Header';
import baseURL from '../../services/api';

const pathUrl = 'StorePreference/CategoryTree'
export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            categories: [],
        }
        this.getCategories()
    }

    getCategories = async () => {
        if (this.state.loading) return;

        const { categories } = this.state;

        this.setState({ loading: true });

        const response = await fetch(`${baseURL}${pathUrl}`,
            {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        const repositories = await response.json();
        this.setState({
            categories: [...repositories.Categories],
            loading: false,
        });
    }

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Header
                    onMenu={() => navigation.goBack()}
                    iconLeft='arrow-left'
                    textHeader='Categorias'
                />
                <FlatList
                    style={styles.flat}
                    data={this.state.categories}
                    renderItem={
                        ({ item }) =>

                            <View style={styles.container}>
                                <TouchableOpacity
                                    style={styles.buttonCategories}
                                    onPress={() => {
                                        navigation.navigate('CategoriesInternal', {
                                            subCategoriesItem: item
                                        })
                                    }}
                                >
                                    <Text>{item.Name}</Text>
                                </TouchableOpacity>
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
        marginTop: 10
    },
    buttonCategories: {
        width: '100%',
        height: 25,
        marginLeft: '10%'
    }
});