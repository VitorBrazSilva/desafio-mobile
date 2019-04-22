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
            // subCategoriesItems: []
        }
    }

    // getCategoriesItem = () => {
    //     const { navigation } = this.props
    //     const subCategories = navigation.getParam('subCategoriesItem')
    //     console.log(subCategories.SubCategories, 'props')
    //     this.setState({ subCategoriesItems: subCategories.SubCategories})
    //     console.log(this.state.subCategoriesItems, 'Subcategorias')
    // }
    
    render() {
        const { navigation } = this.props
        const subCategories = navigation.getParam('subCategoriesItem')
        
        return (
            <View style={styles.container}>
                <Header
                    onMenu={() => navigation.navigate('Categories')}
                    iconLeft='arrow-left'
                    textHeader={subCategories.Name}
                />
                <FlatList
                    data={subCategories.SubCategories}
                    renderItem={
                        ({ item }) =>

                            <View>
                                <Text>{item.Name}</Text>
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