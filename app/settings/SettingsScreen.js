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
import SettingsHeader from '../components/SettingsHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');


export default class SavedScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    render() {
        return (

            <Container>
                <View style={main_body.styles.WhiteSpace}></View>
                <SettingsHeader menu='yes' nav={this.props.navigation} />

                <Container style={style_theme.styles.scrollContainter}>
                    <View style={main_body.styles.WhiteSpace}></View>
                    <Container>
                        <View style={main_body.styles.WhiteSpace}>
                            <Text style={main_body.styles.normalFont}>Current location</Text>
                        </View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.WhiteSpace}>
                            <Text style={main_body.styles.normalFont}>GPS Settings</Text>
                        </View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.WhiteSpace}>
                            <Text style={main_body.styles.normalFont}>Notifications</Text>
                        </View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.WhiteSpace}>
                            <Text style={main_body.styles.normalFont}>On-boarding</Text>
                        </View>
                    </Container>

                </Container>
            </Container>




        );
    }
}