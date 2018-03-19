import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    activityImageContainer: {
        //borderWidth: 6,
        width: 375,
        height: 308,
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
        backgroundColor: '#ce003f',
        width: 375,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1, 
    },
    findSquadFont: {
        //position: 'absoulte',
        width: 169,
        height: 24,
        color: '#ffffff',
        //fontFamily: 'Proxima Nova',
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center"
    },

    activityHeaderFont: {
        //position: 'absoulte',
        width: 300,
        height: 24,
        color: '#ce003f',
        //fontFamily: 'Proxima Nova',
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 4,
        textAlign: "center"
    },
})