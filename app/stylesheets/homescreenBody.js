import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    EatDrinkDoImageContainer: {
        alignItems: "center",
        width: 345,
        height: 120,
        justifyContent: "center",
        backgroundColor: 'white',
        borderColor: '#ED7D31',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
    },

    SpotOfTheWeek: {
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        backgroundColor: 'white'
    },

    ActivityOfTheWeekHead: {
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        backgroundColor: 'white'
    },

    MainContainer: {
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
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

    ActivitiesOfTheWeekFont: {
        textAlign: "center",
        justifyContent: "center",
        color: '#ED7D31',
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 3,
    },

    SpotOfTheWeekFont: {
        textAlign: "center",
        justifyContent: "center",
        color: '#ED7D31',
        fontSize: 17,
        height: 30,
        fontWeight: "700",
        letterSpacing: 3,
    },
    chooseSomethingFont: {
        textAlign: "center",
        justifyContent: "center",
        width: 345,
        color: '#ffffff',
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 2,
    },

    ActivityImage: {
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 120,
        borderRadius: 20,
    },

    ChooseSomething: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderColor: '#ED7D31',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ED7D31',
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
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'white'
    },

    buttonText: {
        //fontFamily: 'Open_Sans',
        height: 18,
        fontSize: 15,
        color: 'black',
        alignItems: "center",
        flex: 5,
    },

    centeredText: {
        //textAlign: 'center',
    },
})