import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    boxHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: '#ed141b',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    input: {
        width: 100,
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    boxIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90,
        justifyContent: 'space-between'
    }
})

export default styles