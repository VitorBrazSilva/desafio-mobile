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
            <View style={styles.container}>
                <Header
                    onMenu={() => navigation.goBack()}
                    iconLeft='arrow-left'
                    textHeader='Categorias'
                />
                <FlatList
                    data={this.state.categories}
                    renderItem={
                        ({ item }) =>

                            <View>
                                <TouchableOpacity
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