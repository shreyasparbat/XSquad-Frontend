import React from 'react';
import { Text, View, Button, Image, StyleSheet, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Icon, Header, Content, Left, Title, Body, Right, connectStyle } from 'native-base';

var style_theme = require('../stylesheets/theme');
var style_header = require('../stylesheets/customHeader');
var api = require('../../api');

class CustomHeader extends React.Component {

    _showName() {
        return (
            <View style={style_header.styles.body}>
                <Title>
                    <Text>{this.props.name}</Text>
                </Title>
            </View>
        )
    }
    _showIcon() {
        return (
            <View style={style_header.styles.body}>
                <Title>
                    <Image style={style_header.styles.headerIcon}
                        source={{ uri: api.API_SERVER_URL + '/images/app_logo.jpg' }} />
                </Title>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.nav;
        return (
            <Header style={style_header.styles.headerStyle}>
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

                    {this.props.cartAvail == 'yes' ?
                        <View style={style_header.styles.right}>
                            <MaterialIcons
                                name="shopping-cart"
                                style={style_header.styles.icon}
                                size={24}
                                onPress={() => navigate('Cart')} />
                        </View>
                        :
                        <View style={style_header.styles.right} />
                    }

                    {this.props.backButton == 'yes' ?
                        <View style={style_header.styles.backButtonLeft}>
                            <MaterialIcons
                                name="arrow-back"
                                style={style_header.styles.backButtonIcon}
                                size={25} onPress={() => { this.props.nav.goBack() }} />
                        </View>
                        :
                        <View />
                    }

                </View>
            </Header>
        );
    }
}

export default connectStyle('yourTheme.CustomHeader', style_header.styles)(CustomHeader);