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
import * as Progress from 'react-native-progress';

class RatingSection extends React.Component{

  RatingColor(Rating){
    if(Rating<7)
      return '#c94a30';
      else if(Rating==7)
        return '#f48f00';
        else if(Rating<=7.5)
          return '#71a340';
          else if(Rating==8)
            return '#428500';
            else
              return '#316300';
  }

  RatingName(Rating){
    if(Rating<7)
      return 'Not Bad';
      else if(Rating==7)
        return 'OK';
        else if(Rating<=7.5)
          return 'Good';
          else if(Rating==8)
            return 'Very Good';
            else
              return 'Excellent';
  }

  RatingBoxItem(Rating){
    return(
      <View style={[styles.RatingBox,{backgroundColor:this.RatingColor(Rating)}]}>
        <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}>{Rating}</Text>
      </View>
    );
  }

  MyProgressBar(Prog,Rate,Name){
    return(
      <View style={{width:'50%',height:'100%'}}>
        <View style={{height:'50%',width:'100%',flexDirection:'row'}}>
          <Text style={{width:'75%',fontSize:16,color:'#37454D'}}>{Name}</Text>
          <Text style={{width:'20%',fontSize:16,color:'#37454D'}}>{Rate} </Text>
        </View>
        <View style={{height:'50%',width:'100%',flexDirection:'row'}}>
          <Progress.Bar animated={false} progress={Prog} height={20} color={'#316300'} style={{backgroundColor:'#EBECED',borderColor:'transparent',height:'35%',width:'90%'}} />
        </View>
      </View>
    )
  }

  render() {
    return(
      <View style={styles.RatingView}>
      <Text style={{width:'100%',marginTop:'5%',color:'#37454D',
      fontSize:18}}>Rating</Text>
      <View style={{height:'100%',width:'100%'}}>
        <View style={{alignItems:'center',flexDirection:'row',height:'25%',width:'100%'}}>
          {this.RatingBoxItem(this.props.HotelData.Rating.Value)}
          <Text style={{fontSize:24,fontWeight:'bold',color:'#37454D'}}>  {this.RatingName(this.props.HotelData.Rating.Value)}</Text>
        </View>
        <View style={{width:'100%',height:'65%'}}>
          <View style={{flexDirection:'row',width:'100%',height:'30%'}}>
            {this.MyProgressBar(0.9,8.9,'Location')}
            {this.MyProgressBar(0.9,8.9,'Rooms')}
          </View>
          <View style={{flexDirection:'row',width:'100%',height:'30%'}}>
            {this.MyProgressBar(0.9,8.9,'Service')}
            {this.MyProgressBar(0.9,8.9,'CleanLiness')}
          </View>
          <TouchableOpacity style={{alignItems:'flex-end',width:'100%',height:'30%'}} onPress={()=>this.props.ShowThisPopBTN('1')}>
            <Text style={{width:'30%',marginTop:'5%',fontWeight:'bold',color:'#0682AF',
            fontSize:18}}>SEE MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
        )
  }
}


const styles = StyleSheet.create({
  RatingBox:{borderRadius:3,
  justifyContent:'center',alignItems:'center',height:'70%',width:'15.5%'},
  RatingView:{alignSelf:'center',borderBottomWidth:1,borderColor:'silver',
    height:ScreenHeight*.45,width:ScreenWidth*.9
  }
})

export {RatingSection};
