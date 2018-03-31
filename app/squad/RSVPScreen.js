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
    ScrollView,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
import { DialogComponent, SlideAnimation } from 'react-native-dialog-component';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');
var activity_body = require('../stylesheets/activityBody');
var home_body = require('../stylesheets/homescreenBody');
var api = require('../../api');


export default class ActivityScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            activity_id: null
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('backPress', this.handleBackButton);
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf')
        });
        this.setState({ fontLoaded: true });

        const activity_id = this.props.navigation.state.params.activity_id;
        console.log("printing mount activity_id ... " + activity_id);
        await this.getActivityFromDatabase(activity_id);
        console.log("activity is" + JSON.stringify(this.state.activity));

        this.setState({ fontLoaded: true });
    }

    handleBackButton() {
        return true;
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
              
                <TouchableHighlight style={activity_body.styles.findSquadButton} onPress={() => navigate('SelectNumFriendsScreen')}>
                    <View>
                        <Text style={activity_body.styles.findSquadFont}>RSVP</Text>
                    </View>
                </TouchableHighlight>
            </Container >
        );
    }
}