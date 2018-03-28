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
import EatScreen from './EatScreen';
import DrinkScreen from './DrinkScreen';
import DoScreen from './DoScreen';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');
var api = require('../../api');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            activities: {}
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

        await this.getActivitiesFromDatabase();

        this.setState({ fontLoaded: true });
    }

    handleBackButton() {
        return true;
    }

    getActivitiesFromDatabase = async storeInfo => {
        this.setState({ isLoading: true });
        return fetch(api.API_SERVER_URL + api.GET_ACTIVITIES, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(async (responseJson) => {
                await this.setState({ isLoading: false });
                if (!responseJson.error) {
                    console.log("ResponseJson: " + responseJson);
                    this.setState({ activities: responseJson });
                    //this.setActivities(responseJson);
                    console.log("set state:" + this.state.activities);
                } else {
                    this.setState({ isLoading: true });
                    if (responseJson.error === null || responseJson.error) {
                        this.onError('No Activities');
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

    setActivities = async (activities) => {
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

    getActivities = async () => {
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
        var activities_list = [];
        console.log("This state activities: " + this.state.activities);
        console.log("This state activities length: " + this.state.activities.length);

        for (let i = 0; i < this.state.activities.length; i++) {
            var activity = this.state.activities[i];
            console.log("Activity " + i + " = " + activity.object + activity.activity_name, + activity.activity_id);
            activities_list.push(

                <Container>
                    <View>
                        <Text> {activity.activity_name} </Text>
                        <TouchableOpacity style={main_body.styles.ActivityImage} onPress={() => navigate('ActivityScreen')}>

                            {/*  ../resources/img/singapore-zam-zam-restaurant.jpg */}

                            <Image style={main_body.styles.ActivityImage} source={{ uri: 'https://assets.pokemon.com/static2/_ui/img/global/three-characters.png' }} />
                        </TouchableOpacity>
                    </View>
                </Container>
            )
        }

        //console.log(activities_list);

        return (

            <ScrollView contentContainerStyle={style_theme.styles.homescreenContentContainer}>
                <View style={main_body.styles.WhiteSpace}></View>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <Container style={style_theme.styles.scrollContainter}>
                    <View style={main_body.styles.ChooseSomething}>
                        <Text style={main_body.styles.chooseSomethingFont}>Choose something to do</Text>
                    </View>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={main_body.styles.SpotOfTheWeekFont}>Activities of the week</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={main_body.styles.ActivityImage} onPress={() => navigate('ActivityScreen')}>
                                <Image style={main_body.styles.ActivityImage} source={require("../resources/img/activity_one.png")} />
                            </TouchableOpacity>
                        </View>
                    </Container>
                    {activities_list}


                </Container>
            </ScrollView>

        );
    }

}
