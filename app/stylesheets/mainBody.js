import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    EatDrinkDoContainer: {
        alignItems: 'center',
        width: 345,
        height: 120,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        //shadowColor: 'rgba(0, 0, 0, 0.16)',
        //shadowOffset: { width: 3, height: 0 },
        //shadowRadius: '6',
        borderColor: '#ce003f',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.25,
    },

    SpotOfTheWeek: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 345,
        height: 22,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },

    SpotOfTheWeekFont: {

        width: 211,
        height: 18,
        color: '#ce003f',
        fontFamily: 'Open_Sans',
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 3,
    },

    ActivityImage: {
        width: 345,
        height: 120,
        // shadowColor: 'rgba(0, 0, 0, 0.16)',
        //shadowOffset: { width: 3, height: 0 },
        //shadowRadius: '6',
        opacity: 0.25,
    },
})