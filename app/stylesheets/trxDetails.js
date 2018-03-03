import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    overallSummaryCardWrapper:{
        height: 120, 
        backgroundColor: '#00CED1'
    },
    header_center:{
        alignItems:'center', 
        padding: 35
    },
    body_center:{
        alignItems:'center', 
        padding: 5
    },
    center:{
        alignItems: 'center',
        // flex: 1,
    },
    receiptDetailsWrapper:{
        flex:1,
        backgroundColor: 'white',
    },
    itemDetailsWrapper: {
        flex: 3,
        backgroundColor: 'white'
    },
    productAlignLeft:{
        flex: 3,
        alignItems: 'flex-start',
        padding: 10,
        margin: 10
    },
    alignLeft:{
        flex: 1,
        alignItems: 'flex-start',
    },
    alignRight:{
        flex: 2,
        alignItems: 'flex-end'
    },

    boldText:{
        fontWeight: 'bold'
    },
    lighterGreyText:{
        color: 'darkgrey'
    },
    darkerGreyText:{
        color: 'gray'
    },
    verifiedText:{
        fontWeight: 'bold', 
        color:'green'
    },
    unverifiedText:{
        fontWeight: 'bold', 
        color:'red'
    },
    cardHeight:{
        height: 70
    }
})