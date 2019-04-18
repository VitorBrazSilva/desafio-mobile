import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';

import products from './products.json'
import styles from './styles'
// import api from '../../services/api'
import Header from '../../components/Header'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            products: [],
            url: '/Search/Criteria',
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    first(element, index, array) {
        console.log(array.indexOf(element) === index, 'afsdfsd')
        return array.indexOf(element) === index
    }

    getProducts = () => {

        const data = products
        this.setState({
            products: data.Products,
            loading: false
        })

        
            // data.Products.map(item => {
            //     let skuls = item.Skus[0]        
            //     let images = skuls.Images[0].ImageUrl
            //     let imageUrl = images
            // })
            
        

        // Bloco buscando da API
        // const url = 'https://desafio.mobfiq.com.br/Search/Criteria'
        // this.setState({ loading: true })

        // fetch(url, 
        //     {
        //         method: "POST",
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             Offset: 0,
        //             Size: 1
        //         })
        //     })
        //    .then(res => res.json())
        //    .then(res => {
        //         this.setState({
        //             products: res.Products,
        //             loading: false
        //         })
        //         console.log(res, 'Nome')
        //    })
    }

    render() {
        const { navigation } = this.props
        if (this.state.loading) {
            return (
                <View>
                    <Header
                        onMenu={() => navigation.openDrawer()}
                    />
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>PRODUTOS</Text>
                    </View>
                    <View>
                        <Text>Listando Produtos...</Text>
                    </View>
                </View>
            )
        }

        return (
            <View>
                <Header
                    onMenu={() => navigation.openDrawer()}
                />
                <View style={styles.titleBox}>
                    <Text style={styles.title}>PRODUTOS</Text>
                </View>
                <FlatList 
                    data={this.state.products}
                    renderItem={
                        ({ item }) => 
                        
                        <View style={styles.boxProducts}>

                            <Image
                                style={styles.imageProduct}
                                source={{ 
                                    uri: `${item.Skus[0].Images[0].ImageUrl}`
                                }}
                            />
                            
                            <Text>
                            {item.Skus[0].Name}
                            </Text>
                            
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                
                
                />
            </View>

        );
    }
}

