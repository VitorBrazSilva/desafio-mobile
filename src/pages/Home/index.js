import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';

import styles from './styles'
import Header from '../../components/Header'
import baseURL from '../../services/api'

const pathUrl = 'Search/Criteria'
const Size = 10;
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            products: [],
            Offset: 0,
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        if (this.state.loading) return;

        const { Offset } = this.state;

        this.setState({ loading: true });

        const response = await fetch(`${baseURL}${pathUrl}`,
            {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Offset: Offset,
                    Size: Size
                })
            })
        const repositories = await response.json();
        this.setState({
            products: [...this.state.products, ...repositories.Products],
            Offset: Offset + 10,
            loading: false,
        });
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.fullPage}>
                <Header
                    iconLeft="bars"
                    iconSearch="search"
                    onMenu={() => navigation.openDrawer()}
                    onSearch={() => navigation.navigate({ routeName: 'Search' })}
                />
                <View style={styles.titleBox}>
                    <Text style={styles.title}>PRODUTOS</Text>
                </View>

                <View>

                    <FlatList
                        data={this.state.products}
                        style={styles.flatBox}
                        renderItem={
                            ({ item }) =>

                                <View style={styles.productsBox}>

                                    <Image
                                        style={styles.imageProduct}
                                        source={{uri: `${item.Skus[0].Images[0].ImageUrl}`}}
                                    />

                                    <Text>
                                        {`Nome Produto: ${item.Skus[0].Name}`}
                                    </Text>
                                    <Text>
                                        {`Preço de Tabela: ${item.Skus[0].Sellers[0].ListPrice}`}
                                    </Text>
                                    <Text>
                                        {`Preço: ${item.Skus[0].Sellers[0].Price}`}
                                    </Text>
                                    <Text>
                                        {`${item.Skus[0].Sellers[0].BestInstallment.Count} x de ${item.Skus[0].Sellers[0].BestInstallment.Value}`}
                                    </Text>

                                </View>
                        }
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={this.getProducts}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </View>

        );
    }
}

