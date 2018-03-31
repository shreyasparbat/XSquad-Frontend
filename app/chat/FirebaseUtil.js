import firebase from 'firebase';

class FirebaseUtil {
  uid = '';
  messagesRef = null;

  /*
  * Connect to Firebase
  */
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyD6b-1Id5tf3IK_zQUhUlSnrnvSbGMNIhE",
      authDomain: "chatrooms-bb327.firebaseapp.com",
      databaseURL: "https://chatrooms-bb327.firebaseio.com",
      projectId: "chatrooms-bb327",
      storageBucket: "chatrooms-bb327.appspot.com",
      messagingSenderId: "43020138522"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }
  
  /*
  * Retrieves messages from Firebase
  */
  loadMessages(chatRoomId, callback) {
    this.messagesRef = firebase.database().ref(chatRoomId);
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }

  /*
  * Pushes messages to Firebase
  */
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }

  /*
  * Closes connection to Firebase
  */
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new FirebaseUtil();