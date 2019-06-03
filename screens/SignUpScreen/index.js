import React from 'react';
import { View, Keyboard, Text } from 'react-native';
import { TextInput, Dialog, Paragraph, Button, Portal, Provider } from 'react-native-paper';
import styles from './styles';
import { observable, action } from 'mobx';
import { observer, inject} from 'mobx-react';
import { signUp } from '../../apis';

@inject('clickEventStore')
@observer
class SignUpScreen extends React.Component {
  @observable name = '';
  @observable userName = '';
  @observable email = '';
  @observable password = '';
  @observable passwordConfirmation = '';
  render() {
    return (
      <Provider>
        <View>
          <View style={styles.listBody}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.accountInput}
              label='이름'
              value={this.name}
              theme={{ colors: { placeholder: 'grey', primary: '#FAB400' }}}
              onChangeText={name => this.changeName(name)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.accountInput}
              label='닉네임'
              value={this.userName}
              theme={{ colors: { placeholder: 'grey', primary: '#FAB400' }}}
              onChangeText={userName => this.changeUserName(userName)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.accountInput}
              label='이메일'
              value={this.email}
              theme={{ colors: { placeholder: 'grey', primary: '#FAB400' }}}
              onChangeText={email => this.changeEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.accountInput}
              label='비밀번호'
              secureTextEntry={true}
              value={this.password}
              theme={{ colors: { placeholder: 'grey', primary: '#FAB400' }}}
              onChangeText={password => this.changePassword(password)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.accountInput}
              label='비밀번호확인'
              secureTextEntry={true}
              value={this.passwordConfirmation}
              theme={{ colors: { placeholder: 'grey', primary: '#FAB400' }}}
              onChangeText={passwordConfirmation => this.changePasswordConfirmation(passwordConfirmation)}
            />
          </View>
          <View style={styles.buttonContainer}>
            {this.email.length != 0 && this.password.length != 0 ?
              <Button
                style={styles.button}
                //fontStyle={styles.buttonFont}
                onPress={this.clickButton}
              >
                <Text style={styles.buttonFont}>회원가입</Text>
              </Button> :
              <Button
                style={styles.notButton}
                //fontStyle={styles.notButtonFont}
              >
              <Text style={styles.notButtonFont}>회원가입</Text>
              </Button>
            }
          </View>
          <View style={styles.bottomContainer}>
          </View>
        </View>
        </View>
      </Provider>
    );
  }
  @action changeName = (name) => {
    this.name = name
  }
  @action changeUserName = (userName) => {
    this.userName = userName
  }
  @action changeEmail = (email) => {
    this.email = email
  }
  @action changePassword = (password) => {
    this.password = password
  }
  @action changePasswordConfirmation = (passwordConfirmation) => {
    this.passwordConfirmation = passwordConfirmation
  }
  @action clickButton = () => {
    signUp(this.name, this.userName, this.email, this.password, this.passwordConfirmation)
      .then(result => {
        console.log(result);
        if(result.email == this.email) {
          this.props.clickEventStore.signUp = true;
        }
      })
  }
}

export default SignUpScreen;