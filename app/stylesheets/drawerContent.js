import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e8485f',
        display: 'flex',
        flexDirection: 'row',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profilePicContainer: {
        backgroundColor: '#fff',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginLeft: 25
    },

    profilePic: {
        flex: 1,
        alignSelf: 'stretch',
        height: 80,
        width: 80,
        borderRadius: 40
    },

    profileTextContainer: {
        width: 200
    },

    profileTextName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5
    },

    profileTextEmail: {
        color: 'white',
        fontSize: 12,
        paddingLeft: 7
    },

    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    listItemIcon: {
        color: "#777",
        padding: 14,
        paddingLeft: 16,
    },

    listItemText: {
        fontWeight: 'bold',
        paddingLeft: 18
    },

    sideNav: {
        width: '169',
        height: '667',
        backgroundColor: '#ffffff',
    },

})