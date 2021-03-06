import { Dimensions, Platform, StyleSheet } from 'react-native';
var v = require('./variables');

export const styles = StyleSheet.create({
    h1: {
        fontFamily: 'Open_Sans_bold',
        fontSize: v.H1_FONTSIZE,
    },

    h2: {
        fontFamily: 'Open_Sans_bold',
        fontSize: v.H2_FONTSIZE,
    },

    h3: {
        fontFamily: 'Open_Sans_bold',
        fontSize: v.H3_FONTSIZE,
    },

    p: {
        fontFamily: 'Open_Sans',
        fontSize: v.P_FONTSIZE,
    },

    bold: {
        fontFamily: 'Open_Sans_bold',
        fontSize: v.P_FONTSIZE,
    },

    light: {
        fontFamily: 'Open_Sans_light',
        fontSize: v.P_FONTSIZE,
    },

    errorText: {
        fontFamily: 'Open_Sans',
        fontSize: v.P_FONTSIZE,
        color: 'red',
    },

    centeredText: {
        textAlign: 'center',
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',

    },

    /*     logoContainer: {
            height: Dimensions.get('window').height*0.35,
            justifyContent: "flex-end",
            alignItems: 'top',
            marginBottom: 50,
            marginTop: 50,
        }, */

    logoSmall: {
        width: 138,
        height: 35,
    },

    homescreenContentContainer: {
        paddingVertical: 20
    },

    logoImage: {
        width: v.WINDOW_HEIGHT > 700 ? 480 : 400,
        height: v.WINDOW_HEIGHT > 700 ? 480 : 400,
        opacity: 0.2,
        position: 'absolute',
        top: 0,
    },

    startScreenButton: {
        top: 580,
        left: 150,
        right: 150,
        width: v.WINDOW_HEIGHT > 700 ? 480 : 400,
        backgroundColor: 'white',
        //borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20,
        position: 'absolute'
    },

    startScreenImage: {
        width: 375,
        height: 667,
    },

    button: {
        backgroundColor: v.HASTE_COLOR,
        borderColor: v.HASTE_COLOR_DARK,
        borderWidth: 2,
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        borderRadius: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },

    buttonCentered: {
        backgroundColor: v.HASTE_COLOR,
        borderColor: v.HASTE_COLOR_DARK,
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        borderWidth: 2,
        borderRadius: 0,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20,
    },

    buttonWhite: {
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 2,
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        borderRadius: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },

    buttonBlueLogin: {
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#2e5fb3",
        borderRadius: 5
    },

    buttonBlueText: {
        fontFamily: 'Open_Sans',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        flex: 5,
    },

    buttonRegisterSubmit: {
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#2e5fb3",
        borderRadius: 5
    },

    buttonFacebook: {
        backgroundColor: v.FACEBOOK_COLOR,
        borderColor: v.FACEBOOK_COLOR_DARK,
        borderWidth: 2,
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        borderRadius: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },

    buttonText: {
        fontFamily: 'Open_Sans',
        fontSize: 16,
        color: 'white',
        textAlign: 'left',
        flex: 5,
    },

    buttonTextBlack: {
        fontFamily: 'Open_Sans',
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        flex: 5,
    },

    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    icon: {
        height: 20,
        width: 20
    },

    input: {
        fontFamily: 'Open_Sans',
        backgroundColor: 'rgba(255,255,255, 0.30)',
        height: v.BUTTON_HEIGHT,
        width: v.BUTTON_WIDTH,
        marginBottom: 20,
        borderRadius: 0,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 2,
        fontSize: 16,
        paddingLeft: 20
    },

    scrollContainter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },

    blackContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },

    EatDrinkDo: {
        // width: 6,
        //height: 54,
        color: '#ED7D31',
        //fontFamily: 'Open_Sans',
        // fontSize: 45,
        //  fontWeight: "700"
    },

    FindNumFriendBlackContainer: {
        width: 375,
        height: 700
    },

    RSVPContainer: {
        width: 375,
        height: 200
    }


})