import React from 'react';
import { Text, View, Button, Image, AsyncStorage } from 'react-native';
import { Container } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../components/CustomHeader'

import { AppLoading, Font } from 'expo';

export default class ReferralScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Referral',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                name="loyalty"
                size={24}
                style={{color: tintColor}}
                >
                </MaterialIcons>
            );
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf'),  
            'Open_Sans': require('../resources/fonts/Open_Sans/OpenSans-Regular.ttf'),
            'Open_Sans_bold': require('../resources/fonts/Open_Sans/OpenSans-Bold.ttf'),
            'Open_Sans_light': require('../resources/fonts/Open_Sans/OpenSans-Light.ttf'),
        });
        
        this.setState({ fontLoaded: true });
    }

    render(){
        return(
            this.state.fontLoaded ? (
            <Container>
                <CustomHeader menu='yes' cartAvail='yes' name="Referral" nav={this.props.navigation} />
            </Container>
            ) : null
        );
    }
}
