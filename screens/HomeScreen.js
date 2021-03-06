import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { Dialog, Paragraph, Button } from 'react-native-paper';
import { inject, observer } from 'mobx-react';
import { getUser } from '../apis';

@inject('clickEventStore', 'navigateStore', 'userStore')
@observer
export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({
        openDialog: this.openDialog,
        openQrCamera: this.openQrCamera,
        isAuth: this.isAuth
    });
  }
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Image 
        source={require('../assets/images/logo.png')}
        style={{width:80, height:16, marginLeft: 14}}
      />
    ),
    headerRight: (
      <TouchableOpacity 
        onPress={() => navigation.state.params.isAuth()}>
        <Image
          source={require('../assets/images/QRpay.png')}
          style={{width: 38, height: 33, marginRight: 10}}
        />
      </TouchableOpacity> 
    )
  });

  isAuth = async () => {
    await getUser(this.props.userStore.token).then(result => {
      result.current_user.auth ?
      this.openQrCamera() :
      this.openDialog();
    })
  }

  openQrCamera = () => {
    this.props.navigateStore.qr = true;
  }

  openDialog = () => {
    this.props.clickEventStore.auth = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/main.jpeg')} style={{width: '100%', height: '100%'}}>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
