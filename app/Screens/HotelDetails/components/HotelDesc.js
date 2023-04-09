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

class HotelDesc extends React.Component{


  render() {
    return(
      <View style={styles.RatingView}>
        <Text style={{width:'100%',marginTop:'5%',color:'#37454D',fontSize:18}}>Hotel Description</Text>
        <Text style={{width:'100%',marginTop:'5%',color:'grey',fontSize:15}}>The Hotel Hesperia is the right
         choice for visitors who are searching for a combination of charm, peace and quiet, and a convenient position from which to explore Venice. It is a small, comfortable hotel, situated on the Canale di Cannaregio.</Text>
         <TouchableOpacity onPress={()=>this.props.ShowThisPopBTN('4')} style={{alignItems:'flex-end',marginTop:'2%',width:'100%',height:'25%'}}>
           <Text style={{width:'30%',marginTop:'5%',fontWeight:'bold',color:'#0682AF',
           fontSize:18}}>SEE MORE</Text>
         </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  RatingView:{borderBottomWidth:1,borderColor:'silver',alignSelf:'center',
    height:ScreenHeight*.375,width:ScreenWidth*.9
  }
})

export {HotelDesc};
