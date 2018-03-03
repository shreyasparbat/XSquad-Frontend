import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    unverifiedTrxFormat: {
        height: 60,
        // backgroundColor: 'red'
    },
    verifiedTrxFormat: {
        height: 60,
    },
    outletText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    lighterGreyText:{
        fontSize: 14,
        color: 'darkgrey'
    },
    darkerGreyText:{
        fontSize: 14,
        color: 'dimgray',
        fontWeight: 'bold'
    },
    alignLeft:{
        flex: 3,
        alignItems: 'flex-start',
        padding: 10,
        margin: 10
    },
    alignRight:{
        flex: 1,
        alignItems: 'flex-end'
    },
    center:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formatErrorMsg:{
        fontSize: 12,
        color: 'red'
    }
})