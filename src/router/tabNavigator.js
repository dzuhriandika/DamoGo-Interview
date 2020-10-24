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
import Home from '../svg/Home';
import Maps from '../svg/Maps';
import Cart from '../svg/Cart';
import Favorit from '../svg/Favorit';
import History from '../svg/History';

export const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Home />
          //<Icon name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    Maps: {
      screen: MapsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Maps />,
      },
    },
    Favorit: {
      screen: FavoritStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Favorit />,
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Cart />,
      },
    },
    History: {
      screen: HistoryStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <History />,
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
