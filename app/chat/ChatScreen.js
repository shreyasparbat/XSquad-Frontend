import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from 'FirebaseUtil';

import CustomHeader from '../components/CustomHeader';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
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