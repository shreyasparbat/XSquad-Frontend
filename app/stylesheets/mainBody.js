import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    EatDrinkDoImageContainer: {
        alignItems: "center",
        width: 345,
        height: 120,
        //flex: 5,
        justifyContent: "center",
        backgroundColor: 'white',
        //shadowColor: 'rgba(0, 0, 0, 0.16)',
        //shadowOffset: { width: 3, height: 0 },
        //shadowRadius: '6',
        borderColor: '#ce003f',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        //opacity: 0.25,
    },

    SpotOfTheWeek: {
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 22,
        //borderColor: '#ce003f',
        //borderStyle: 'solid',
        //borderWidth: 1,
        //borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    WhiteSpace: {
        alignItems: "center",
        justifyContent: "center",
        height: 22,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },

    SpotOfTheWeekFont: {
        textAlign: "center",
        justifyContent: "center",
        width: 345,
        height: 18,
        color: '#ce003f',
        //fontFamily: 'Open_Sans',
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 3,
    },

    chooseSomethingFont: {

        textAlign: "center",
        //justifyContent: "center",
        width: 345,
        height: 18,
        color: '#ffffff',
        //fontFamily: 'Open_Sans',
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 2,
        /*  
         alignItems: "center",
         justifyContent: "center",
         width: 337,
         height: 18,
         color: '#ffffff',
         //fontFamily: 'Open_Sans',
         //fontFamily: 'Proxima Nova',
         fontSize: 15,
         fontWeight: "700",
         letterSpacing: 3, */
    },

    settingsHeaderFont: {
        textAlign: "center",
        justifyContent: "center",
        width: 211,
        height: 25,
        color: '#ffffff',
        //fontFamily: 'Open_Sans',
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 3,
        /*  
         alignItems: "center",
         justifyContent: "center",
         width: 337,
         height: 18,
         color: '#ffffff',
         //fontFamily: 'Open_Sans',
         //fontFamily: 'Proxima Nova',
         fontSize: 15,
         fontWeight: "700",
         letterSpacing: 3, */
    },

    ActivityImage: {
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 120,
        borderRadius: 20,
        // shadowColor: 'rgba(0, 0, 0, 0.16)',
        //shadowOffset: { width: 3, height: 0 },
        //shadowRadius: '6',
        //opacity: 0.25,
    },

    ChooseSomething: {
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 24,
        borderColor: '#ce003f',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#ce003f',
    },

    normalFont: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: 337,
        height: 18,
        color: 'black',
        //fontFamily: 'Open_Sans',
        //fontFamily: 'Proxima Nova',
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 3,
    },

    goButton: {
        /*         
        backgroundColor: '#ce003f',
        borderColor: '#ce003f',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        height: 20,
        width: 30, 
        */
        //float: right,
        alignItems: "center",
        justifyContent: "center",
        width: 59,
        height: 26,
        borderRadius: 5,
        borderColor: '#ce003f',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },

    buttonText: {
        //fontFamily: 'Open_Sans',
        height: 18,
        fontSize: 15,
        color: 'black',
        alignItems: "center",
        //flex: 5,
    },

    centeredText: {
        //textAlign: 'center',
    },
})