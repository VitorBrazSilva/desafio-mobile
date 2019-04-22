import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    fullPage: {
        height: height
    },
    titleBox: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    flatBox: {
        backgroundColor: '#f4f4f4',
        height: '73%',
    },
    productsBox: {
        width: '44.5%',
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15
    },
    imageProduct: {
        width: 80,
        height: 80,
        resizeMode: 'contain',        
        marginVertical: 30
    },
    textPattern: {
        fontSize: 12,
        textAlign: 'center',
    },
    nameProduct:{
        fontSize: 14,
        color: '#000',
        marginBottom: 15,
    },
    listPrice:{
        textDecorationLine: 'line-through',
        color: '#dfe4ea'
    },
    price:{
        fontSize: 16,
        fontWeight: '500',
        color: '#259B24'
    },
    installment:{
        color: '#259B24',
        marginBottom: 5
    },
    discountView:{
        width: '100%',
    },
    discountText:{
        width: 40,
        height: 40,
        backgroundColor: '#259B24',
        borderRadius: 20,
        textAlign: 'center',
        color: '#fff', 
        fontWeight: '500',
    },
    
})

export default styles