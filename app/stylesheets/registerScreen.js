import { Dimensions, Platform, StyleSheet } from 'react-native';
var v = require('./variables');

export const styles = StyleSheet.create({
    formContainer: {
        height: Dimensions.get('window').height*0.65,
        paddingTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    registerRedirect: {
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'row',
    },

    date: {
        backgroundColor: 'rgba(255,255,255, 0.30)',
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        marginBottom: 20,
        borderRadius: 0,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 2,
        paddingLeft: 20
    },

    errorMessage: {
        color: 'red',
        marginBottom: 20,
        width: 250
    },

    selected: {
        backgroundColor: '#090',
        borderColor: '#050',
    },

    deselected: {
        backgroundColor: '#ccc',
        borderColor: '#ccc',
    },

    hidden: {
        marginBottom: 0,
        height: 0,
        width: 0,
        opacity: 0,
    },
})