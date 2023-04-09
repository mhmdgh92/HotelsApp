
import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,I18nManager,Animated,Alert,Image,Picker,ImageBackground,ToastAndroid,ScrollView,Dimensions,YellowBox,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
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

class ReviewsPop extends React.Component{

  BarRatingColor(Rating){
    if(Rating<7)
      return '#aff26d';
      else if(Rating==7)
        return '#90cc56';
        else if(Rating<=7.5)
          return '#71a340';
          else if(Rating==8)
            return '#428500';
            else
              return '#316300';
  }

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
          <Text style={{fontSize:14,color:'white'}}>{Rating}</Text>
        </View>
      );
    }

ReviewItem(){
  return(
    <View style={{marginTop:'5%',alignSelf:'center',height:ScreenHeight*.25,width:ScreenWidth*.9}}>
    <View style={{alignItems:'center',flexDirection:'row',height:'25%',width:'100%'}}>
      {this.RatingBoxItem(this.props.HotelData.Rating.Value)}
      <Text style={{fontSize:20,fontWeight:'bold',color:'#37454D'}}>  {this.RatingName(this.props.HotelData.Rating.Value)}</Text>
    </View>
    <Text style={{width:'90%',marginTop:'5%',color:'#37454D',fontSize:14}}>Very nice hotel,
    food was good, staff welcome was excellent,bathroom and bedroom were both very clean</Text>
    <Text style={{width:'100%',marginTop:'5%',fontWeight:'bold',color:'#37454D',fontSize:14}}>Reviewed on Feb 2019 by Mhmd GH</Text>
    </View>
  )
}

  render() {
    return(
      <View style={styles.RatingView}>
        <View style={styles.Headerstyle}>
          <TouchableOpacity onPress={()=>this.props.HidePopMthd()}
            style={{marginLeft:'2.5%',alignSelf:'center',width:'10%',alignItems:'flex-start'}}>
            <Icon name='arrow-back' size={28} color='black'/>
          </TouchableOpacity>
          <Text style={{fontSize:22}}>{'  Guest Reviews'}</Text>
        </View>
        <ScrollView>
        {this.ReviewItem()}
        {this.ReviewItem()}
        {this.ReviewItem()}
        {this.ReviewItem()}
        {this.ReviewItem()}
        {this.ReviewItem()}
        <View style={styles.BottomMarginView}/>
        </ScrollView>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  BottomMarginView:{
    height:ScreenHeight*.1,width:ScreenWidth
  },
  RatingBox:{borderRadius:5,justifyContent:'center',alignItems:'center',
  width:'10%',height:'100%',backgroundColor:'#c94a30'},
  Headerstyle:{borderBottomWidth:.1,flexDirection:'row',shadowColor: '#000',alignItems:'center',
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,height:'10%',width:'100%'},
    RadioStyle:{alignItems:'center',height:'15%',width:'100%',flexDirection:'row'},
    absolute:{position: 'absolute', top: ScreenHeight*1, left: 0, right: 0, bottom: 0, alignItems: 'center'},
    RatingView:{backgroundColor:'white',alignSelf:'center',borderBottomWidth:1,borderColor:'silver',
      height:ScreenHeight,width:ScreenWidth
    }
})

export {ReviewsPop};
