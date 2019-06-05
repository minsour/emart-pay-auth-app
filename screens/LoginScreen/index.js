import React from "react";
import { View, Image } from "react-native";
import { Button, Text, TouchableRipple, Dialog, Paragraph } from 'react-native-paper';
import styles from './styles';
import { action } from 'mobx';
import { observer, inject} from 'mobx-react';
import SignInScreen from "../SignInScreen";
import SignUpScreen from "../SignUpScreen";
import { LoadingComponent } from "../../components/LoadingComponent";
import { Loading } from "../../components/Loading";

const logoPath = require("../../assets/images/logo.png");

@inject('clickEventStore', 'navigateStore')
@observer
class LoginScreen extends React.Component {
  render() {
    if (this.props.navigateStore.login) {
      this.props.navigateStore.navigateMain();
      this.props.navigation.navigate('Main')
    }
    return (
      <View style={styles.logoContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={logoPath}
          />
        </View>
          <View style={styles.list}>
            <View style={styles.listTab}>
              <TouchableRipple
                style={styles.tabButton}
                onPress={this.renderToken}
              >
                <Text style={this.props.clickEventStore.loginSwitch ? styles.selectedFont : styles.unselectedFont}>
                로그인
                </Text>
              </TouchableRipple>
              <TouchableRipple
                style={styles.tabButton}
                onPress={this.renderEOA}
              >
                <Text style={this.props.clickEventStore.loginSwitch ? styles.unselectedFont : styles.selectedFont}>
                회원가입
                </Text>
              </TouchableRipple>
            </View>
            { this.props.clickEventStore.loginSwitch ?
              <SignInScreen navigation={this.props.navigation} /> :
              <SignUpScreen navigation={this.props.navigation} />
            }
          </View>
          <Dialog
          visible={this.props.clickEventStore.signUp}
          onDismiss={() => {
            this.props.clickEventStore.signUp = false
            this.props.clickEventStore.loginSwitch = true;
          }}>
          <Dialog.Title>환영합니다.</Dialog.Title>
          <Dialog.Content>
            <Paragraph>회원가입이 되셨습니다.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button style={{ marginRight: 10 }} onPress={() => {
              this.props.clickEventStore.signUp=false  
              this.props.clickEventStore.loginSwitch = true;
            }}>
              <Text>확인</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
        <Dialog
          visible={this.props.clickEventStore.signIn}
          onDismiss={() => {this.props.clickEventStore.signIn = false}}>
          <Dialog.Title>다시 입력해주세요.</Dialog.Title>
          <Dialog.Content>
            <Paragraph>계정 정보가 틀렸습니다.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button style={{ marginRight: 10 }} onPress={() => {
              this.props.clickEventStore.signIn=false}}>
              <Text>확인</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
        <View style={styles.bottom} />
      </View>
    );
  }
    
  @action renderToken = () => {
    this.props.clickEventStore.loginSwitch = true
  }
  @action renderEOA = () => { this.props.clickEventStore.loginSwitch = false }

  // private navigateToCreateWallet = () => {
  //   //this.props.tokenStore!.loadTokenList()
  //   this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
  //     destination: route.BACKUP_MNEMONIC_SCREEN
  //   });
  //   this.props.tokenStore!.getUpbitAccount("","")
  // };

  // private navigateToImportMnemonic = async () => {
  //   //this.props.tokenStore!.loadTokenList()
  //   await this.props.clipboardStore!.getClipBoard()
  //   this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
  //     destination: route.ENTER_MNEMONIC_SCREEN
  //   });
  // };
}

export default LoginScreen;