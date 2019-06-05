import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('clickEventStore')
@observer
export default class FingerPrintScreen extends Component {
  
  state = {
    compatible: false,
    fingerprints: false,
    result: ''
  }
  
  componentDidMount() {
    this.checkDeviceForHardware();
    this.checkForFingerprints();
  }
  
  checkDeviceForHardware = async () => {
    let compatible = await Expo.LocalAuthentication.hasHardwareAsync();
    this.setState({compatible})
  }
  
  checkForFingerprints = async () => {
    let fingerprints = await Expo.LocalAuthentication.isEnrolledAsync();
    this.setState({fingerprints})
  }
  
  scanFingerprint = async () => {
   await Expo.LocalAuthentication.authenticateAsync('Scan your finger.')
   .then(result => {
     result.success ? 
      this.props.success() :
      Alert.alert(
        '다시 인증해주시기 바랍니다.',
        [
          {text: '확인', onPress: () => {
            this.props.clickEventStore.fingerPrint['transfer'] = false;
          }}
        ]
      );
   });
  }
  
  render() {
    return (
      <View>
        {this.scanFingerprint()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#056ecf',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'   
  }
});