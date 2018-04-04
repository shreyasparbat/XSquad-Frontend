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
    FlatList
} from 'react-native';

import {
    List,
    ListItem
} from "react-native-elements";

import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, Button, connectStyle, Footer, Toast } from 'native-base';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');
var home_body = require('../stylesheets/homescreenBody');
var api = require('../../api');

export default class SquadScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            user_name: "XSquad_default_name",
            rowData: [],
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
        // console.log("chatlistscrn userinfor " + user_info);
        if (user_info != null) {
            // We have data!!
            // console.log("----- First console log");
            // console.log("user_info is " + JSON.stringify(user_info));
            this.setState({ user_name: user_info.first_name})
            // console.log("CALLING API with user_ID = " + user_info.user_id);
            await this.getChatroomsForUser(user_info.user_id);
        } else {
            console.log('Routing to log in screen');
            this.props.navigation.navigate("LoginScreen");
        }


        this.setState({ fontLoaded: true });
    }

    handleBackButton() {
        return true;
    }

    getChatroomsForUser = async (user_id) => {
        this.setState({ isLoading: true });
        // console.log("going to fetch..");
        return fetch(api.API_SERVER_URL + api.LOAD_CHATROOMS, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                user_id: user_id
            })
        })
            .then((response) => response.json())
            .then(async (responseJson) => {
                await this.setState({ isLoading: false });
                if (!responseJson.error) {
                    this.setState({ rowData: responseJson });
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
                this.onError('Failed to get activity data');
            });
        console.log("ended without catching");
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log("rowdata is " + JSON.stringify(this.state.rowData));
        //console.log("state rowDATA is " + this.state.rowData);
        return (
            <Container Style={home_body.styles.homescreenContentContainer}>
                <CustomHeader menu='yes' nav={this.props.navigation} />

                <View style={main_body.styles.WhiteSpace}>
                    <Text style={main_body.styles.normalFont}>Your Squads:</Text>
                </View>
                <List>
                    <FlatList
                        data={this.state.rowData}
                        renderItem={({ item }) => (
                            <ListItem
                                key={item.chatroom_id}
                                roundAvatar
                                title={`${item.activity_name}`}
                                avatar={{ uri: "https://www.gravatar.com/avatar/" }}
                                onPress={() => navigate('ChatScreen', {
                                    chatRoomId: item.chatroom_id,
                                    name: this.state.user_name
                                })}
                            />
                        )}
                        keyExtractor={item => item.chatroom_id}
                    />
                </List>

            </Container>

        );
    }
}