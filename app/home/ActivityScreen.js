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
import { NavigationActions } from 'react-navigation';
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
            activity_id: null,
            user_id: null,
            rsvp_list: {}
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('backPress', this.handleBackButton);
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf')
        });
        this.setState({ fontLoaded: true });

        const activity_id = this.props.navigation.state.params.activity_id;
        //console.log("printing mount activity_id ... " + activity_id);
        await this.getActivityFromDatabase(activity_id);
        this.state.activity_id = activity_id;
        await this.getPeopleGoing(activity_id);
        //console.log("activity is" + JSON.stringify(this.state.activity));

        const u_i = await AsyncStorage.getItem('@userData');
        const user_info = JSON.parse(u_i);
        if (user_info != null) {
            // We have data!!
            //console.log("user_info is " + JSON.stringify(user_info));
            this.state.user_info = user_info;
            this.state.user_id = user_info.user_id;
            //console.log("state user_id is " + JSON.stringify(this.state.user_id));
            //console.log("user ID is " + user_id);
        }

        this.setState({
            activity_id: this.props.navigation.state.params.activity_id,
            user_id: user_info.user_id
        });


    }


    handleBackButton() {
        return true;
    }

    getActivityFromDatabase = async (activity_id) => {
        this.setState({ isLoading: true });
        console.log("going to fetch activity data..");
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
                    console.log("Get Activity success! " + JSON.stringify(this.state.activity));
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

    getPeopleGoing = async (activity_id) => {
        this.setState({ isLoading: true });
        console.log("going to fetch RSVP LIST..");
        return fetch(api.API_SERVER_URL + api.GET_RSVP, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                activity_id: activity_id
            })
        })
            .then((response) => response.json())
            .then(async (responseJson) => {
                await this.setState({ isLoading: false });
                if (!responseJson.error) {
                    this.setState({ rsvp_list: responseJson });
                    console.log("SUCCESS, RSVP LIST IS " + this.state.rsvp_list);
                } else {
                    this.setState({ isLoading: true });
                    if (responseJson.error === null || responseJson.error) {
                        this.onError('Activity does not exist.');
                    } else {
                        this.onError(responseJson.error);
                    }
                }

            })
            .catch((error) => {
                this.setState({ isLoading: false });
                this.onError('Failed to get People Going');
            });
        console.log("ended without catching");
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container>
                <CustomHeader style={activity_body.styles.activityHeaderFont} backButton={"yes"} nav={this.props.navigation} />
                <Container style={style_theme.styles.scrollContainter}>
                    <Container style={activity_body.styles.activityImageContainer}>
                        <Image style={activity_body.styles.activityImageContainer} source={{ uri: api.API_SERVER_URL + '/images/' + this.state.activity.activity_name + '.jpg' }} />
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
                            this.dialogComponent1.show();
                        }}>
                            <Text style={[activity_body.styles.clickLinkFont]}>Click for more Info</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.dialogComponent2.show();
                        }}>
                            <Text style={[activity_body.styles.clickLinkFont]}>Check who's going!</Text>
                        </TouchableOpacity>
                    </Container>
                    <Container>
                        <TouchableHighlight style={activity_body.styles.findSquadButton}
                            onPress={this.rsvp.bind(this)}>
                            <View>
                                <Text style={activity_body.styles.findSquadFont}>Join the fun!</Text>
                            </View>
                        </TouchableHighlight>
                    </Container>
                </Container>

                <DialogComponent
                    ref={(dialogComponent1) => { this.dialogComponent1 = dialogComponent1; }}
                    dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                >
                    <View>
                        <Image style={activity_body.styles.collateralImageContainer} source={{ uri: api.API_SERVER_URL + '/images/' + this.state.activity.activity_name + ' Info.jpg' }} />
                    </View>
                </DialogComponent>

                <DialogComponent
                    ref={(dialogComponent2) => { this.dialogComponent2 = dialogComponent2; }}
                    dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                >

                    <ScrollView contentContainerStyle={activity_body.styles.rsvpScrollContainer}>
                        <Text style={activity_body.styles.coolPeopleFont}> The Cool People </Text>
                        <List
                            dataArray={this.state.rsvp_list}
                            renderRow={(user) =>
                                <Text style={activity_body.styles.whoIsGoingFont}> {user.first_name}
                                    {console.log("RSVP PEOPLE! " + user.first_name)}
                                </Text>
                            }>
                        </List>
                    </ScrollView>

                </DialogComponent>

            </Container >
        );
    }

    rsvp = async () => {
        console.log("rsvp start");
        console.log("activity_id is " + this.state.activity_id);
        console.log("user_id is " + this.state.user_id);
        console.log("printing condition: " + (this.state.activity_id != null && this.state.user_id != null));
        if (this.state.activity_id != null && this.state.user_id != null) {

            //console.log("rsvp has activity_id " + activity_id + " and user_id " + user_id);
            this.setState({ isLoading: true });
            return fetch(api.API_SERVER_URL + api.FIND_SQUAD, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "user_id": this.state.user_id,
                    "activity_id": this.state.activity_id
                }),
            })
                .then((response) => response.json())
                .then(async (responseJson) => {
                    this.setState({ isLoading: false });
                    console.log(responseJson);
                    if (responseJson.message == "Wait") {
                        try {
                            console.log("navigating to waiting screen!");
                            this.props.navigation.navigate('WaitingScreen');
                        } catch (error) {
                            console.log(error);
                            this.onError('Error!');
                        }
                    } else {
                        this.props.navigation.navigate('ChatListScreen');
                    }
                })
                .catch((error) => {
                    this.setState({ isLoading: false });
                    this.setState({ submissionError: error });
                });
        } else {
            console.log("navigating to login screen");
            this.props.navigation.navigate('LoginScreen');
        }
        console.log("didnt go both");
        // this.props.navigator.navigate('CartScreen');
    }
}