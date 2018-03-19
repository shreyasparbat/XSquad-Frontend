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
    ImageBackground
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');
var activity_body = require('../stylesheets/activityBody');


export default class DoScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <CustomHeader style={activity_body.styles.activityHeaderFont} backButton={"yes"} showName={true} name='Activity of the week' nav={this.props.navigation} />
                <Container style={style_theme.styles.scrollContainter}>
                    <Container style={activity_body.styles.activityImageContainer}>
                    </Container>
                    <Container style={activity_body.styles.activityInformationContainer}>
                        <Text style={activity_body.styles.activityHeaderFont}>Activity of the week</Text>
                        <Text style={activity_body.styles.activityHeaderFont}>East Coast Park Cycling</Text>
                        <Text></Text>
                        <Text>70 Stamford Road</Text>
                        <Text>Singapore 178901</Text>
                        <Text></Text>
                        <Text>Open from 5PM to 12AM</Text>
                        <Text></Text>
                        <Text>Price:</Text>
                        <Text>SGD8-12/hour for Adult</Text>
                        <Text>SGD6-8/hour for child</Text>
                    </Container>
                    <Container>
                        <TouchableHighlight style={activity_body.styles.findSquadButton} onPress={() => navigate('DrinkScreen')}>
                            <View>
                                <Text style={activity_body.styles.findSquadFont}> Find a squad!</Text>
                            </View>
                        </TouchableHighlight>
                    </Container>

                </Container>
            </Container>
        );
    }
}