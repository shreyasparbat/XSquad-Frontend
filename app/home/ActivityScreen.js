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
var api = require('../../api');


export default class ActivityScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            activity: {}
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('backPress', this.handleBackButton);
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf'),
            // 'Open_Sans': require('../resources/fonts/Open_Sans/OpenSans-Regular.ttf'),
            // 'Open_Sans_bold': require('../resources/fonts/Open_Sans/OpenSans-Bold.ttf'),
            // 'Open_Sans_light': require('../resources/fonts/Open_Sans/OpenSans-Light.ttf'),
        });

        await this.getActivityFromDatabase();

        this.setState({ fontLoaded: true });
    }

    handleBackButton() {
        return true;
    }

    getActivityFromDatabase = async storeInfo => {
        this.setState({ isLoading: true });
        return fetch(api.API_SERVER_URL + api.GET_ACTIVITY_BY_ID, {
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
                    console.log("ResponseJson: " + responseJson);
                    this.setState({ activity: responseJson });
                    //this.setActivities(responseJson);
                    console.log("set state:" + this.state.activity);
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
                this.onError('Failed to get store data');
            });
    }

    setActivity = async (activities) => {
        /*   console.log("Setting acitivities: " + activities);
          for (let i = 0; i < activities.size; i++) {
              var activity = activities[i];
              console.log("Activity " + i + " = " + activity);
          } */

        //console.log("Stringify " + JSON.stringify(activities));
        try {
            await AsyncStorage.setItem('@activities', activities);
        } catch (error) {
            console.log(error);
            this.onError('Failed to set activities');
        }
    }

    getActivity = async () => {
        try {
            const value = await AsyncStorage.getItem('@activities');
            if (value !== null) {
                this.setState({ activities: JSON.parse(value) })
                //console.log("Pasring value " + JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
            this.onError('Failed to get activities.');
        }

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
                        <Text style={activity_body.styles.activityHeaderFont}>Zam Zam Restaurant</Text>
                        <Text></Text>
                        <Text>70 Stamford Road</Text>
                        <Text>Singapore 178901</Text>
                        <Text></Text>
                        <Text>Open from 5PM to 12AM</Text>
                        <Text></Text>
                        <Text>Price:</Text>
                        <Text>SGD8-12/hour for Adult</Text>
                        <Text>SGD6-8/hour for child</Text>
                        <TouchableOpacity onPress={() => {
                            this.dialogComponent.show();
                        }}>
                            <View style={main_body.styles.goButton}>
                                <Text style={[main_body.styles.buttonText]}>Learn More</Text>
                            </View>
                        </TouchableOpacity>
                    </Container>
                    <Container>
                        <TouchableHighlight style={activity_body.styles.findSquadButton} onPress={() => navigate('DrinkScreen')}>
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
            </Container>
        );
    }
}