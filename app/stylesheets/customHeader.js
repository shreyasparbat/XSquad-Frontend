import { Dimensions, Platform, StyleSheet } from 'react-native';
require('./variables');

export const styles = StyleSheet.create({
    backButtonLeft:{
        position: 'absolute',
        left:     10,
        top:      15
    },
    backButtonIcon:{
        ...Platform.select({
            ios:{
                width: 50,
                height: 50,
            },
            android:{

            }

        })

        },

    headerIcon:{
        ...Platform.select({
            ios: { 
                width: 138,
                height: 35
            },
            android: { //SET ICON SIZE FOR ANDROID HERE
                width: 176,
                height: 70,
            }
        })
        
    },

    headerStyle:{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        zIndex: 1000000,
    },

    left:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    body:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    right:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper:{
        flex:1,
        flexDirection: 'row'
    },

    icon: {
        color: "#000000", 
        padding: 10
    }
})