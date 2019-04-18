import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    titleBox: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    boxProducts: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
    },
    imageProduct: {
        width: 150,
        height: 150,

        borderColor: 'red',
        borderWidth:1
    }
})

export default styles