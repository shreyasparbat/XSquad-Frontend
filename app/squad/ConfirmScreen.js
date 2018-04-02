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
var squad_body = require('../stylesheets/squadBody');
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
            <Container style={squad_body.styles.confirmBlackContainer}>
                <Container style={squad_body.styles.manyPeopleImageContainer}>
                    <Image style={squad_body.styles.manyPeopleImage}
                        source={{ uri: api.API_SERVER_URL + '/images/Many Humans.jpg' }} />
                         <Text style={squad_body.styles.findSquadFont}/>
                         <Text style={squad_body.styles.findSquadFont}/>
                    <Text style={squad_body.styles.findSquadFont}>
                        Your RSVP has
                    </Text>
                    <Text style={squad_body.styles.findSquadFont}>
                       been recorded!
                    </Text>
                    <Text style={squad_body.styles.findSquadFont}>
                        Look forward
                    </Text>
                    <Text style={squad_body.styles.findSquadFont}>
                        to seeing you!
                    </Text>
                </Container>
                <TouchableHighlight style={squad_body.styles.findSquadButton} onPress={() => navigate('Home')}>
                    <View>
                        <Text style={squad_body.styles.findSquadFont}>Return to Home</Text>
                    </View>
                </TouchableHighlight>
            </Container >
        );
    }
}