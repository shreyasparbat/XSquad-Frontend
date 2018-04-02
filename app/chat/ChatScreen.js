import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from './FirebaseUtil';

import CustomHeader from '../components/CustomHeader';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  
  render() {
    console.log("Chat room id = " + this.props.navigation.state.params.chatRoomId);
    console.log("Name = " + this.props.navigation.state.params.name);
    return (
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