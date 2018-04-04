import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from './FirebaseUtil';
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
import CustomHeader from '../components/CustomHeader';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };

  render() {
    console.log("Chat room id = " + this.props.navigation.state.params.chatRoomId);
    console.log("Name = " + this.props.navigation.state.params.name);

    return (
      <View style={{ flex: 1 }}>
        <CustomHeader backButton={"yes"} nav={this.props.navigation} />
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => {
            FirebaseUtil.sendMessage(message);
          }}
          user={{
            _id: FirebaseUtil.getUid(),
            name: this.props.navigation.state.params.name,
          }}
        />
      </View>
    );
  }
  componentDidMount() {
    FirebaseUtil.loadMessages(this.props.navigation.state.params.chatRoomId, (message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    FirebaseUtil.closeChat();
  }
}

Chat.defaultProps = {
  name: 'MyCoolUserName',
};