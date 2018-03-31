import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from 'FirebaseUtil';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          FirebaseUtil.sendMessage(message);
        }}
        user={{
          _id: FirebaseUtil.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
  componentDidMount() {
    FirebaseUtil.loadMessages(this.props.chatRoomId, (message) => {
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