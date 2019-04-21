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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imageProduct: {
        width: 80,
        height: 80,
        resizeMode: 'contain',        
    }
})

export default styles