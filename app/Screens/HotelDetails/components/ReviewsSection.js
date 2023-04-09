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

class ReviewsSection extends React.Component{


  render() {
    return(
      <View style={styles.RatingView}>
        <Text style={{width:'100%',marginTop:'5%',color:'#37454D',fontSize:18}}>Guest Reviews</Text>
        <Text style={{width:'100%',marginTop:'5%',color:'#37454D',fontSize:14}}>Very nice hotel,
         food was good, staff welcome was excellent,bathroom and bedroom were both very clean</Text>
         <Text style={{width:'100%',marginTop:'5%',fontWeight:'bold',color:'#37454D',fontSize:14}}>Reviewed on Feb 2019 by Mhmd GH</Text>
         <TouchableOpacity onPress={()=>this.props.ShowThisPopBTN('2')} style={{alignItems:'flex-end',marginTop:'7%',width:'100%',height:'30%'}}>
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

export {ReviewsSection};
