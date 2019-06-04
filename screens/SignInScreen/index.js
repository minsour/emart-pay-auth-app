import React from 'react';
import { View, Keyboard, Text } from 'react-native';
import { TextInput, Dialog, Paragraph, Button, Portal, Provider } from 'react-native-paper';
import styles from './styles';
import { observable, action } from 'mobx';
import { observer, inject} from 'mobx-react';
import { signIn } from '../../apis';

@inject('clickEventStore', 'navigateStore', 'userStore')
@observer
class SignInScreen extends React.Component {
  // @observable name = '';
  // @observable userName = '';
  @observable email = '';
  @observable password = '';
  // @observable passwordConfirmation = '';
  render() {
    return (
      <Provider>
        <View>
        <View style={styles.listBody}>
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
          <View style={styles.buttonContainer}>
            {this.email.length != 0 && this.password.length != 0 ?
              <Button
                style={styles.button}
                //fontStyle={styles.buttonFont}
                onPress={this.clickButton}
              >
                <Text style={styles.buttonFont}>로그인</Text>
              </Button> :
              <Button
                style={styles.notButton}
                //fontStyle={styles.notButtonFont}
              >
              <Text style={styles.notButtonFont}>로그인</Text>
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
  @action changeEmail = (email) => {
    this.email = email
  }
  @action changePassword = (password) => {
    this.password = password
  }
  @action clickButton = () => {
    signIn(this.email, this.password)
      .then(result => {
        console.log(result)
        if(result.error == 'unauthorized')
          this.props.clickEventStore.signIn = true;
        else if(result.token)
          this.props.navigateStore.login = true;
          console.log('click')
          this.props.userStore.token = result.token;
      })
  }
}

export default SignInScreen;