import React from 'react';
import Welcome from './Screens/Welcome/Welcome';
import Home from './Screens/Home/Home';
import FavHotels from './Screens/FavHotels/FavHotels';
import Settings from './Screens/Settings/Settings';
import HotelDetails from './Screens/HotelDetails/HotelDetails';
import { MyHeader } from './Screens/Home/components';
import {createStackNavigator} from 'react-navigation';
import {StyleSheet,Dimensions,I18nManager} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;



const StackNav = createStackNavigator({
  Welcome: { screen: Welcome},
  HotelDetails: { screen: HotelDetails},
  Home: { screen: Home},
  FavHotels: { screen: FavHotels},
  Settings: { screen: Settings}
},{
    initialRouteName: 'Home',
    headerMode :'none'
}
);

export default StackNav;
