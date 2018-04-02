import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    activityImageContainer: {
        //borderWidth: 6,
        width: 375,
        height: 250,
        flex: 0,
        opacity: 0.75
    },
    activityInformationContainer: {
        //borderWidth: 6,
        flex: 0,
        width: 300,
        height: 229,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    findSquadButton: {
        //borderWidth: 2,
        backgroundColor: '#ED7D31',
        width: 375,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    findSquadFont: {
        //position: 'absoulte',
        color: '#ffffff',
        //fontFamily: 'Proxima Nova',
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center"
    },

    clickLinkFont: {
        //position: 'absoulte',
        color: '#ED7D31',
        //fontFamily: 'Proxima Nova',
        fontSize: 15,
        height: 20,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center"
    },

    ActivityScreenButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 26,
        borderRadius: 5,
        borderColor: '#ED7D31',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },

    activityHeaderFont: {
        //position: 'absoulte',
        width: 300,
        height: 24,
        color: '#ED7D31',
        //fontFamily: 'Proxima Nova',
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center",
        justifyContent: "center"
    },

    whoIsGoingFont: {
        //position: 'absoulte',
        color: 'black',
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center",
        justifyContent: "center"
    },
})