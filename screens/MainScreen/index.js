import React from 'react';
import { View, Image, Alert } from 'react-native';
import { inject, observer } from 'mobx-react';
import MainNavigator from '../../navigation/MainNavigator';
import { Dialog, Paragraph, Text, Button, Provider } from 'react-native-paper';

@inject('cameraStore', 'userStore', 'clickEventStore', 'navigateStore')
@observer
export default class MainScreen extends React.Component {
  state = {
    compatible: false,
    fingerprints: false,
    result: ''
  }
  
  componentDidMount() {
    this.checkDeviceForHardware();
    this.checkForFingerprints();

    this.props.navigation.setParams({
      leftButton: this.leftButton
    });
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
     this.props.navigation.navigate('QrPay') : 
     Alert.alert(
      '실패',
      '인증을 다시 해주시기 바랍니다.',
      [
        {text: '확인'}
      ]
     )
   });
  }
  showAndroidAlert = () => {
    Alert.alert(
      '',
      '결제를 진행하시겠습니까?',
      [
        {text: '취소', onPress: () => console.log('Cancel'), style: 'cancel'},
        {text: '확인', onPress: () => {
          this.scanFingerprint();
        }}
      ]
    )
  }
  
  render() {
    return (
      <Provider>
        {this.props.cameraStore.clearPhoto('idCard')}
        {this.props.cameraStore.clearPhoto('faceImage')}
        <MainNavigator />
        { this.props.navigateStore.qr && 
          this.showAndroidAlert()
        }
        <Dialog
            visible={this.props.clickEventStore.auth}
            onDismiss={() => {this.props.clickEventStore.auth = false}}>
            <Dialog.Title>사용자 인증을 먼저 해주시기 바랍니다.</Dialog.Title>
            <Dialog.Content>
              <Paragraph>인증을 먼저 진행하시겠습니까?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button style={{ marginRight: 15 }} onPress={() => {
                this.props.clickEventStore.auth=false;
              }}>
                <Text>취소</Text>
              </Button>
              <Button style={{ marginRight: 10 }} onPress={() => {
                this.props.clickEventStore.auth=false;
                this.props.navigation.navigate('Auth');
              }}>
                <Text>확인</Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Provider>
    );
  }
}
