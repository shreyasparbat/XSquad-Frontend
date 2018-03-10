import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    render() {
        return (

            <Container style={style_theme.styles.scrollContainter}>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <View style={main_body.styles.SpotOfTheWeek}></View>

                <View style={main_body.styles.SpotOfTheWeek}>
                    <Image source={require("../resources/img/Sub-Header.png")} />
                </View>

            </Container>

        );
    }
}