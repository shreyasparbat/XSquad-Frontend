import React, { Component } from 'react';
import { Modal, Button, ActivityIndicator, StyleSheet, View } from 'react-native';

class LoadingIndicator extends Component {
      
   render() {
      
      return (
            <Modal
                  visible={this.props.isLoading}
                  animationType={'none'}
                  onRequestClose={() => this.closeModal()}
                  transparent={true}
            >
                  <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>

                              <ActivityIndicator
                                    animating = {true}
                                    color = '#F48562'
                                    size = "large"
                                    style = {styles.activityIndicator}
                              />
                        </View>
                  </View>
            </Modal>
      )
   }
}
export default LoadingIndicator

const styles = StyleSheet.create ({
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      innerContainer: {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      activityIndicator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 80
      }
})