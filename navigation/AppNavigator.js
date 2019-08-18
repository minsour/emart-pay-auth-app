import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';
import AuthScreen from '../screens/AuthScreen';
import MainScreen from '../screens/MainScreen';
import FingerPrintScreen from '../components/FingerPrintComponent';
import QrPayScreen from '../screens/QrPayScreen';

const InitialNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginNavigator,
  //FingerPrint: FingerPrintScreen,
  Main: MainScreen,
});

const AuthNavigator = createStackNavigator({
  AuthScreen: AuthScreen,
});

const QrPayNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthNavigator,
  QrPay: QrPayScreen
});

export default createAppContainer(createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Initial: InitialNavigator,
    QrPayNavigator: QrPayNavigator
  },
  {
    headerMode: 'none'
  })
);