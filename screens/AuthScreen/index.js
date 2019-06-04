import React from 'react';
import { View, Image } from 'react-native';
import { IconButton, Text, Button } from 'react-native-paper';
import UploadImage from '../../components/UploadImage';
import styles from './styles';
import CameraComponent from '../../components/Camera';
import { inject, observer } from 'mobx-react';
import { sendImage } from '../../apis';

@inject('cameraStore', 'userStore')
@observer
export default class AuthScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({
        leftButton: this.leftButton
    });
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
    await sendImage(this.props.userStore.token, 
      this.props.cameraStore.photo['idCard'], 
      this.props.cameraStore.photo['faceImage'])
      .then(response=>console.log(response));
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
            <Button style={styles.button} onPress={this.transferImages}>
              <Text style={styles.buttonFont}>전송</Text>
            </Button> :
            <Button style={styles.notButton}>
              <Text style={styles.notButtonFont}>전송</Text>
            </Button>
          }
          </View>
        </View>
    );
  }
}
