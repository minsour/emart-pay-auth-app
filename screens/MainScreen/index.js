import React from 'react';
import { View, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import MainNavigator from '../../navigation/MainNavigator';
import { Dialog, Paragraph, Text, Button, Provider } from 'react-native-paper';

@inject('cameraStore', 'userStore', 'clickEventStore')
@observer
export default class MainScreen extends React.Component {
  render() {
    return (
      <Provider>
        {this.props.cameraStore.clearPhoto('idCard')}
        {this.props.cameraStore.clearPhoto('faceImage')}
        <MainNavigator />
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
