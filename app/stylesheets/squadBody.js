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
    collateralImageContainer: {
        //borderWidth: 6,
        width: 375,
        height: 400,
        flex: 0,
        opacity: 0.75
    },
    rsvpScrollContainer: {
        //borderWidth: 6,
        width: 375,
        height: 400,
        flex: 0,
        opacity: 0.75,
        backgroundColor: 'black'
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
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
    },
    findSquadFont: {
        //position: 'absoulte',
        color: '#ffffff',
        //fontFamily: 'Proxima Nova',
        fontSize: 18,
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

    coolPeopleFont: {
        //position: 'absoulte',
        color: '#ED7D31',
        //fontFamily: 'Proxima Nova',
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center",
        justifyContent: "center",
        padding: 7
    },

    confirmBlackContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
    },

    manyPeopleImageContainer: {
        position: 'absolute',
        top: 100,
        bottom: 0
    },

    manyPeopleImage: {
        //borderWidth: 6,
        height: 281,
        width: 250,
        flex: 0,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
})