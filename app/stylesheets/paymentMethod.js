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
    productAlignLeft:{
        flex: 3,
        alignItems: 'flex-start',
        padding: 10,
        margin: 10
    },
    alignLeft:{
        flex: 4,
        alignItems: 'flex-start',
        padding: 10,
        margin: 10
    },
    alignRight:{
        flex: 1,
        alignItems: 'flex-end',
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
    cardHeight:{
        height: 70
    }
})