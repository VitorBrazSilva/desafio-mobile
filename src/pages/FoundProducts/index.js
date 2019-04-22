import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

import stylesProduct from './styles'
import styles from '../Home/styles'
import Header from '../../components/Header'
import baseURL from '../../services/api'


const pathUrl = 'Search/Criteria'
const Size = 10;

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


    componentDidMount() {
        this.getProducts();
    }


    getProducts = async () => {
        if (this.state.loading) return;

        const { Offset } = this.state;

        const { navigation } = this.props
        const search = this.props.navigation.getParam('inputSearch')

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
                    Size: Size,
                    Query: search
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
        const search = this.props.navigation.getParam('inputSearch')
    
        return (
            <View>
                <Header
                    iconLeft="arrow-left"
                    onMenu={() => navigation.goBack()}
                    input={true}
                    textHeader="Resultado de Busca"
                />
                <View style={stylesProduct.searchBox}>
                    <View>
                        <Text style={[stylesProduct.text,stylesProduct.font]}>Você procurou por:</Text>
                        <Text style={[stylesProduct.textSearch,stylesProduct.font]}>{search}</Text>
                    </View>
                    <View style={stylesProduct.resultBox}>
                        <Text style={[stylesProduct.textResult,stylesProduct.font]}></Text>
                        <Text style={[stylesProduct.textResult,stylesProduct.font]}>Resultados</Text>
                    </View>
                </View>
                <View>

                    <FlatList
                        data={this.state.products}
                        style={[styles.flatBox, stylesProduct.flatBox]}
                        renderItem={
                            ({ item }) =>

                                <View style={styles.productsBox}>

                                    <Image
                                        style={styles.imageProduct}
                                        source={{ uri: `${item.Skus[0].Images[0].ImageUrl}` }}
                                    />

                                    <Text style={[styles.nameProduct, styles.textPattern]}>
                                        {`${item.Skus[0].Name}`} {/* Nome do produto */}
                                    </Text>

                                    <Text style={[styles.listPrice, styles.textPattern]}>
                                        {`${item.Skus[0].Sellers[0].ListPrice.toFixed(2)}`} {/* Preço tabela */}
                                    </Text>
                                    <Text style={[styles.price, styles.textPattern]}>
                                        {`${item.Skus[0].Sellers[0].Price.toFixed(2)}`} {/* Preço */}
                                    </Text>

                                    <Text style={[styles.installment, styles.textPattern]}>
                                        {/* Texto parcelamento */}
                                        {`${item.Skus[0].Sellers[0].BestInstallment.Count} x de ${item.Skus[0].Sellers[0].BestInstallment.Value.toFixed(2)}`}
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



        )
    }
}