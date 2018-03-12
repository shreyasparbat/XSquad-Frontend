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
import CustomHeader from '../components/CustomHeader';
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
                <CustomHeader menu='yes' nav={this.props.navigation} />

                <Container style={style_theme.styles.scrollContainter}>
                    <View style={main_body.styles.WhiteSpace}></View>
                    <View style={main_body.styles.WhiteSpace}>
                        <Text style={main_body.styles.normalFont}>Here's what you saved:</Text>
                    </View>

                </Container>
            </Container>




        );
    }
}