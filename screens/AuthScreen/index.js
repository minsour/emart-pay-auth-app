import React from 'react';
import { View, Image, Alert } from 'react-native';
import { IconButton, Text, Button } from 'react-native-paper';
import UploadImage from '../../components/UploadImage';
import styles from './styles';
import CameraComponent from '../../components/Camera';
import { inject, observer } from 'mobx-react';
import { sendImage } from '../../apis';
import { LoadingComponent } from '../../components/LoadingComponent';
import { Loading } from '../../components/Loading';
import FingerPrintScreen from '../../components/FingerPrintComponent';
import { Platform } from 'expo-core';

@inject('cameraStore', 'userStore', 'clickEventStore')
@observer
export default class AuthScreen extends React.Component {
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
     this.transferImages() : 
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
      '사용자 인증을 위해 사진을 전송하시겠습니까?',
      [
        {text: '취소', onPress: () => console.log('Cancel'), style: 'cancel'},
        {text: '전송', onPress: () => {
          this.scanFingerprint();
        }}
      ]
    )
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width:80, height:16, marginLeft: 14}}
      />
    ),
    headerLeft: (
      <IconButton
        icon="arrow-back"
        size={20}
        onPress={() => navigation.state.params.leftButton()}
      />
    )
  });
  
  leftButton = () => this.props.navigation.pop()

  transferImages = async () => {
    this.props.clickEventStore.showLoading('transfer');
    await sendImage(this.props.userStore.token, 
      this.props.cameraStore.photo['idCard'], 
      this.props.cameraStore.photo['faceImage'])
      .then(response=> {
        console.log(response)
        this.props.clickEventStore.hideLoading('transfer');
      });
    this.props.navigation.navigate('Main');
  }

  render() {
    if(this.props.cameraStore.camera['idCard']) {
      return(
        <CameraComponent label={'idCard'}/>
      );
    }
    if(this.props.cameraStore.camera['faceImage']) {
      return(
        <CameraComponent label={'faceImage'}/>
      );
    }
    return (
        <View> 
          <View style={styles.imageContainer}>
            <UploadImage title='민증' label='idCard'/>
            <UploadImage title='실물사진' label='faceImage'/>
          </View>
          <View style={styles.buttonContainer}>
          {this.props.cameraStore.photo['idCard'] !== '' && 
           this.props.cameraStore.photo['faceImage'] !== '' ?
            <Button style={styles.button} onPress={Platform.OS === 'android' ? this.showAndroidAlert : this.scanFingerprint}>
              <Text style={styles.buttonFont}>전송</Text>
            </Button> :
            <Button style={styles.notButton}>
              <Text style={styles.notButtonFont}>전송</Text>
            </Button>
          }
          </View>
          {this.props.clickEventStore.visible['transfer'] &&
            <LoadingComponent visibleKey={'transfer'}><Loading>사진 전송중</Loading></LoadingComponent>
          }
        </View>
    );
  }
}
