import React, {Component} from 'react';
import {NativeModules, Platform,TouchableOpacity,StyleSheet,TextInput,ToastAndroid,Image,ImageBackground,I18nManager,Alert,ScrollView,Dimensions,YellowBox,AppState,View,StatusBar} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,
  Input
} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Require cycle:']);
import { Icon } from 'react-native-elements';
import moment from 'moment';
import { MyFooter} from '../Home/components';

class Settings extends React.Component{

    render() {
      return(
        <View>
          <View style={{height:ScreenHeight*0.875,ScreenWidth:ScreenWidth,backgroundColor:'red'}}>
          </View>
          <MyFooter SelectedTab={3} Navigator={this.props.navigation}/>
        </View>
      )
    }
}



const styles = StyleSheet.create({
});

export default Settings ;
