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
            activity: {},
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

    getActivityFromDatabase = async (activity_id) => {
        this.setState({ isLoading: true });
        console.log("going to fetch..");
        return fetch(api.API_SERVER_URL + api.GET_ACTIVITY_BY_ID, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                activityID: activity_id
            })
        })
            .then((response) => response.json())
            .then(async (responseJson) => {
                await this.setState({ isLoading: false });
                //console.log("ResponseJson is " + responseJson);
                if (!responseJson.error) {
                    this.setState({ activity: responseJson });
                    //console.log("set state:" + JSON.stringify(this.state.activity));
                } else {
                    this.setState({ isLoading: true });
                    console.log("getactivityfromdb error");
                    if (responseJson.error === null || responseJson.error) {
                        this.onError('Activity does not exist.');
                    } else {
                        this.onError(responseJson.error);
                    }
                }

            })
            .catch((error) => {
                this.setState({ isLoading: false });
                this.onError('Failed to get activity data');
            });
        console.log("ended without catching");
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <CustomHeader style={activity_body.styles.activityHeaderFont} backButton={"yes"} showName={true} name='Food spot of the week' nav={this.props.navigation} />
                <Container style={style_theme.styles.scrollContainter}>
                    <Container style={activity_body.styles.activityImageContainer}>
                        <Image style={activity_body.styles.activityImageContainer} source={require("../resources/img/singapore-zam-zam-restaurant.jpg")} />
                    </Container>
                    <Container style={activity_body.styles.activityInformationContainer}>
                        <Text style={activity_body.styles.activityHeaderFont}>{this.state.activity.activity_name}</Text>
                        <Text></Text>
                        <Text>{this.state.activity.address_line_1}</Text>
                        <Text>{this.state.activity.address_line_2}</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text>Price:</Text>
                        <Text>{this.state.activity.price_adult}</Text>
                        <Text>{this.state.activity.price_child}</Text>
                        <TouchableOpacity onPress={() => {
                            this.dialogComponent.show();
                        }}>
                            <Text style={[main_body.styles.buttonText]}>Click for more Info</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.dialogComponent.show();
                        }}>
                            <Text style={[main_body.styles.buttonText]}>Check who's going!</Text>
                        </TouchableOpacity>
                    </Container>
                    <Container>
                        <TouchableHighlight style={activity_body.styles.findSquadButton} onPress={() => navigate('SelectNumFriendsScreen')}>
                            <View>
                                <Text style={activity_body.styles.findSquadFont}>Find a squad!</Text>
                            </View>
                        </TouchableHighlight>
                    </Container>
                </Container>
                <DialogComponent
                    ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
                    dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                >
                    <View>
                        <Image style={activity_body.styles.activityImageContainer} source={require("../resources/img/singapore-zam-zam-restaurant.jpg")} />
                    </View>
                </DialogComponent>
            </Container >
        );
    }
}