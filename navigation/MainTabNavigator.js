import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '홈',
  tabBarIcon: ({focused, tintColor}) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
  tabBarOptions: { 
    activeTintColor:'#FAB400'
  }
};

const TvStack = createStackNavigator({
  Home: HomeScreen,
});

TvStack.navigationOptions = {
  tabBarLabel: '이마트24TV',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      color={tintColor}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}
    />
  ),
  tabBarOptions: { 
    activeTintColor:'#FAB400'
  }
};

const MenuStack = createStackNavigator({
  Home: HomeScreen,
});

MenuStack.navigationOptions = {
  tabBarLabel: '전체메뉴',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
    />
  ),
  tabBarOptions: { 
    activeTintColor:'#FAB400'
  }
};

const StoreStack = createStackNavigator({
  Home: HomeScreen,
});

StoreStack.navigationOptions = {
  tabBarLabel: '매장',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
  tabBarOptions: { 
    activeTintColor:'#FAB400'
  }
};

const MyPageStack = createStackNavigator({
  Home: HomeScreen,
});

MyPageStack.navigationOptions = {
  tabBarLabel: '마이페이지',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  tabBarOptions: { 
    activeTintColor:'#FAB400'
  }
};

export default createBottomTabNavigator({
  HomeStack,
  TvStack: TvStack,
  MenuStack: MenuStack,
  StoreStack,
  MyPageStack
});
