import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    Alert,
    BackHandler,
    ScrollView
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';

import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('backPress', this.handleBackButton);
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf')
        });
        this.setState({ fontLoaded: true });

        var u_i = await AsyncStorage.getItem('@userData');
        var user_info = JSON.parse(u_i);
        if (user_info != null) {
            this.setState({ user_name: user_info.first_name })
        } else {
            console.log('Routing to log in screen');
            this.props.navigation.navigate("LoginScreen");
        }
        this.setState({ fontLoaded: true });
    }

    render() {
        return (

            <Container style={style_theme.styles.scrollContainter}>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <View style={main_body.styles.SpotOfTheWeek}></View>

                <View style={main_body.styles.SpotOfTheWeek}>
                    <Image source={require("../resources/img/Sub-Header.png")} />
                </View>
            </Container>

        );
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