import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,I18nManager,Alert,Image,Picker,ImageBackground,ToastAndroid,ScrollView,Dimensions,YellowBox,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,Footer,Radio
  ,FooterTab,Input,Label,Item
} from "native-base";
import { Icon,CheckBox } from 'react-native-elements';
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Require cycle:']);
import { StackActions, NavigationActions } from 'react-navigation';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;

class MyFooter extends React.Component{


  render() {
    return(<Footer>
            <FooterTab  style={styles.Footer}>
            <Button vertical onPress={()=>this.props.Navigator.navigate('Home')}>
              <Icon name="search" color={this.props.SelectedTab===1?('#ffd400'):('grey')}/>
              <Text style={{color:this.props.SelectedTab===1?('#ffd400'):('grey')}}>Search</Text>
            </Button>
            <Button vertical onPress={()=>this.props.Navigator.navigate('Home')}>
            <Icon name="favorite" color={this.props.SelectedTab===2?('#ff1500'):('grey')}/>
            <Text style={{color:this.props.SelectedTab===2?('#ff1500'):('grey')}}>Favorite</Text>
            </Button>
            <Button vertical onPress={()=>this.props.Navigator.navigate('Home')}>
            <Icon name="settings" color={this.props.SelectedTab===3?('#0086f4'):('grey')}/>
            <Text style={{color:this.props.SelectedTab===3?('#0055ff'):('grey')}}>Settings</Text>
            </Button>
            </FooterTab>
          </Footer>)
  }
}


const styles = StyleSheet.create({
Footer:{backgroundColor:'white'}
})

export {MyFooter};
