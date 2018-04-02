import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Platform, Image, StatusBar, AsyncStorage, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Toast } from 'native-base';
import packageJson from '../../package.json';

var style_theme = require('../stylesheets/theme');
var style_drawer = require('../stylesheets/drawerContent');
var v = require('../stylesheets/variables');
var api = require('../../api');

export default class DrawerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            user_id: null,
            user_name: "XSquad_default_name"
        };
        // need to bind `this` to access props in handler
        //this.logout = this.logout.bind(this);
    }


    onError(errMsg) {
        Toast.show({
            text: errMsg,
            position: 'bottom',
            buttonText: 'Okay'
        })
    }

    render() {
        try {
            //console.log(this.props);
            const value =  AsyncStorage.getItem('@userData');
            const user_data = JSON.parse(value);
            this.state.userData = user_data;

        } catch (err) {
            //this.logout();
        }

        return (
            <View>
                <View style={style_drawer.styles.header} >
                    <View style={style_drawer.styles.profileTextContainer}>
                        <Text style={style_drawer.styles.profileTextName}> {this.state.userData.first_name} </Text>

                    </View>
                </View>
                <View style={{
                    height: v.WINDOW_HEIGHT - 140,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <DrawerItems {...this.props} />
                    </View>

                    <TouchableOpacity>
                        <View style={{
                            display: 'flex',
                            // flex: 1,
                            marginBottom: 20,
                        }}
                        >
                            <Text style={{ color: '#c6c6c6', paddingLeft: 20 }}>
                                App Version {packageJson.version}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    setCurUser = async (curUser) => {
        try {
            const value = await AsyncStorage.getItem('@userData');
            const userData = JSON.parse(value);
            const user_id = user.user_id;
            await AsyncStorage.setItem('@curUser', JSON.stringify(userData));
        } catch (error) {
            this.onError('Failed to set user data!!!');
            console.log(error);
        }
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('@userHashAuth:key');
            await AsyncStorage.setItem('@curItems', "");
            await AsyncStorage.setItem('@curStore', "");
            this.props.navigation.navigate('LoginScreen');
        } catch (error) {
            this.onError('Error occur when logout!!!');
            console.log(error);
        }
    }
}