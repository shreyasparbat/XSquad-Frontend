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
    ListView,
    FlatList
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
import EatScreen from './EatScreen';
import DrinkScreen from './DrinkScreen';
import DoScreen from './DoScreen';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');
var home_body = require('../stylesheets/homescreenBody');
var api = require('../../api');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            activities: {},
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('backPress', this.handleBackButton);
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf'),
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
                    this.setState({ activities: responseJson });
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

    render() {
        const { navigate } = this.props.navigation;
        return (

            <Container Style={home_body.styles.homescreenContentContainer}>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <View style={home_body.styles.ChooseSomething}>
                    <Text style={home_body.styles.chooseSomethingFont}>Choose something to do</Text>
                </View>
                <View style={home_body.styles.SpotOfTheWeek}>
                    <Text style={home_body.styles.ActivitiesOfTheWeekFont}>Activities of the week</Text>
                </View>
                <ScrollView>
                    <List
                        contentContainerStyle={home_body.styles.homescreenContentContainer}
                        dataArray={this.state.activities}
                        renderRow={(activity) =>
                            <View>
                                <Text style={home_body.styles.SpotOfTheWeekFont}> {activity.activity_name} </Text>
                                <TouchableOpacity
                                    style={home_body.styles.ActivityImage}
                                    onPress={() => navigate('ActivityScreen', { activity_id: activity.activity_id })}>
                                    <Image
                                        style={home_body.styles.ActivityImage}
                                        source={{ uri: 'https://assets.pokemon.com/static2/_ui/img/global/three-characters.png' }} />
                                </TouchableOpacity>
                                <View style={home_body.styles.SpotOfTheWeek} />
                            </View>
                        }>

                    </List>
                </ScrollView>
            </Container>


        );
    }

}
