import React from 'react';
import { Text, View, Button, Image, StyleSheet, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Icon, Header, Content, Left, Title, Body, Right, connectStyle } from 'native-base';

var style_theme = require('../stylesheets/theme');
var style_header = require('../stylesheets/customHeader');
var main_body = require('../stylesheets/mainBody');

class CustomHeader extends React.Component {

    _showName() {
        return (
            <View style={style_header.styles.body}>
                <Title>

                </Title>
            </View>
        )
    }
    _showIcon() {
        return (
            <View style={style_header.styles.body}>

                <Text style={main_body.styles.settingsHeaderFont}>Settings</Text>

            </View>
        )
    }

    render() {
        const { navigate } = this.props.nav;
        return (
            <Header style={style_header.styles.settingsHeaderStyle}>
                <View style={style_header.styles.wrapper}>
                    {this.props.menu == 'yes' ?
                        <View style={style_header.styles.left}>
                            <Icon name="ios-menu"
                                style={style_header.styles.icon}
                                onPress={() => navigate('DrawerOpen')} />
                        </View>
                        :
                        <View style={style_header.styles.left} />
                    }


                    {this.props.showName ?
                        this._showName()
                        :
                        this._showIcon()
                    }

                </View>

            </Header>
        );
    }
}

export default connectStyle('yourTheme.CustomHeader', style_header.styles)(CustomHeader);