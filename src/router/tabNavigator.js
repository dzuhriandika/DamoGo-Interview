/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeStack,
  MapsStack,
  FavoritStack,
  CartStack,
  HistoryStack,
} from './stackNavigator';

export const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    Maps: {
      screen: MapsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-list" color={tintColor} size={25} />
        ),
      },
    },
    Favorit: {
      screen: FavoritStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={25} />
        ),
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-list" color={tintColor} size={25} />
        ),
      },
    },
    History: {
      screen: HistoryStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    labeled: true,
    shifting: false,
    tabBarOptions: {
      activeTintColor: '#00A3E0',
      showLabel: true,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

export default AppStack;
