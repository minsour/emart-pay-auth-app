import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen
});