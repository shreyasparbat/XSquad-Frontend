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
            userData: {}
        };
        // need to bind `this` to access props in handler
        //this.logout = this.logout.bind(this);
    }


    componentDidMount = () => {
        this.getUserData();
    }

    onError(errMsg) {
        Toast.show({
            text: errMsg,
            position: 'bottom',
            buttonText: 'Okay'
        })
    }

    getUserData = async () => {
        this.setState({
            userData: JSON.parse(await AsyncStorage.getItem("@userData"))
        });
    }

    render() {
        var user_info = [];
        const { navigate } = this.props.navigation;

        if (this.state.userData) {

            user_info.push(
                <View style={style_drawer.styles.header} >
                    <View style={style_drawer.styles.profileTextContainer}>
                        <Text style={style_drawer.styles.profileTextName}>  </Text>
                        <Text style={style_drawer.styles.profileTextName}> Welcome to FUYOH{"\n"} {this.state.userData.first_name}! </Text>
                        <TouchableOpacity onPress={this.logout.bind(this)}>
                            <View>
                                <Text style={style_drawer.styles.profileTextName}> Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            );
        } else {
            user_info.push(
                <View style={style_drawer.styles.header} >
                    <View style={style_drawer.styles.profileTextContainer}>
                    </View>
                </View>
            );
        }


        return (
            <View>
                {user_info}
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

    logout = async () => {
        try {
            await AsyncStorage.removeItem('@userHashAuth:key');
            var removed = await AsyncStorage.removeItem('@userData');
            console.log("Removed = " + JSON.stringify(removed));
            this.setState({
                userData: removed
            });
            this.props.navigation.navigate('Home');
            console.log("logging out");
            console.log("userData after logout" + JSON.stringify(this.state.userData));
        } catch (error) {
            this.onError('Error occur when logout!!!');
            console.log(error);
        }
    }
}