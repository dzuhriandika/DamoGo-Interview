import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/Home';
import MapsScreen from '../screens/Maps';
import CartScreen from '../screens/Cart';
import FavoritScreen from '../screens/Favorit';
import HistoryScreen from '../screens/History';

export const SplashScreenStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const MapsStack = createStackNavigator(
  {
    Maps: {
      screen: MapsScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Profile'},
);

MapsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const FavoritStack = createStackNavigator(
  {
    Favorit: {
      screen: FavoritScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Favorit'},
);

MapsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const CartStack = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Cart'},
);

CartStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const HistoryStack = createStackNavigator(
  {
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'History'},
);

HistoryStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
