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
        borderColor: '#ED7D31',
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
        //borderColor: '#ED7D31',
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
        color: '#ED7D31',
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
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 3,
    },

    ActivityImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 120,
        borderRadius: 20,
    },

    ChooseSomething: {
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 24,
        borderColor: '#ED7D31',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#ED7D31',
        flex: 1
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
        alignItems: "center",
        justifyContent: "center",
        width: 59,
        height: 26,
        borderRadius: 5,
        borderColor: '#ED7D31',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },

    homescreenContentContainer: {
        paddingVertical: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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