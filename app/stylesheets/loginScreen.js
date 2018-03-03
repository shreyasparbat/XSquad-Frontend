import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    formContainer: {
        height: Dimensions.get('window').height*0.65,
        paddingTop: 100,
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'center',
    },

    registerRedirect: {
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'row',

    }
})