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

    state = {
        userData: {}
    };

    constructor() {
        super();
    
        // need to bind `this` to access props in handler
        this.logout = this.logout.bind(this);
    }

    onError(errMsg) {
        Toast.show({
            text: errMsg,
            position: 'bottom',
            buttonText: 'Okay'
          })
    }
    
    render() {
        try{
            console.log(this.props);
            this.state.userData = this.props.items[0].params.userData;
            this.setCurUser(this.state.userData);
        }catch(err){
            this.logout();
        }
        
        return(
            <View>
                <View style={style_drawer.styles.header} >
                    <View style={style_drawer.styles.profilePicContainer}>
                        <Image 
                            style={style_drawer.styles.profilePic} 
                            resizeMode='contain' 
                            source={ 
                                this.state.userData.avatar_file_name ? 
                                (this.state.userData.avatar_file_name.indexOf('http') != -1? {uri: this.state.userData.avatar_file_name}:{uri: api.API_SERVER_URL+this.state.userData.avatar_file_name}) : 
                                require("../resources/img/xsquad-logo.png")
                            } 
                        />
                    </View>
                    <View style={style_drawer.styles.profileTextContainer}>
                        <Text style={style_drawer.styles.profileTextName}> {this.state.userData.fullname} </Text>
                        <Text style={style_drawer.styles.profileTextEmail}> {this.state.userData.username} </Text>
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
                                {/* <MaterialIcons 
                                    name="versions" 
                                    style={style_drawer.styles.listItemIcon} 
                                    size={24}
                                />  */}
                                <Text style={{color: '#ccc', paddingLeft: 20}}>
                                    App Version {packageJson.version}
                                </Text>
                            </View>
                        </TouchableOpacity> 
                    </View>
            </View>
        );
    }

    setCurUser = async (curUser) =>{
        try {
            await AsyncStorage.setItem('@curUser', JSON.stringify(curUser));
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