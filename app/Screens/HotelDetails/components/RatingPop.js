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

class RatingPop extends React.Component{

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
          <Text style={{fontSize:32,color:'white'}}>{Rating}</Text>
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
            <Progress.Bar animated={false} progress={Prog} height={20} color={this.BarRatingColor(Rate)} style={{backgroundColor:'#EBECED',borderColor:'transparent',height:'35%',width:'90%'}} />
          </View>
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
          <Text style={{fontSize:22}}>{'  Rating'}</Text>
        </View>
        <View style={{height:'100%',width:'100%'}}>
            <View style={{marginLeft:'5%',alignItems:'center',flexDirection:'row',height:'20%',width:'100%'}}>
              {this.RatingBoxItem(this.props.HotelData.Rating.Value)}
              <Text style={{fontSize:24,fontWeight:'bold',color:'#37454D'}}>  {this.RatingName(this.props.HotelData.Rating.Value)}</Text>
            </View>
            <View style={{alignSelf:'center',width:'90%',height:'65%'}}>
              <View style={{flexDirection:'row',width:'100%',height:'15%'}}>
                {this.MyProgressBar(0.8,7.9,'Location')}
                {this.MyProgressBar(0.9,7.9,'Rooms')}
              </View>
              <View style={{flexDirection:'row',width:'100%',height:'15%'}}>
                {this.MyProgressBar(0.9,7.4,'Services')}
                {this.MyProgressBar(0.9,6.9,'CleanLiness')}
              </View>
              <View style={{flexDirection:'row',width:'100%',height:'15%'}}>
                {this.MyProgressBar(0.9,8.9,'Value for money')}
                {this.MyProgressBar(0.9,8.9,'Comfort')}
              </View>
              <View style={{flexDirection:'row',width:'100%',height:'15%'}}>
                {this.MyProgressBar(0.9,8.9,'Facilities')}
                {this.MyProgressBar(0.9,8.9,'Building')}
              </View>
              <View style={{flexDirection:'row',width:'100%',height:'15%'}}>
                {this.MyProgressBar(0.9,8.9,'BreakFast')}
                {this.MyProgressBar(0.9,8.9,'Food')}
              </View>

            </View>
          </View>
        </View>
    );

  }
}


const styles = StyleSheet.create({
  RatingBox:{marginRight:'1.5%',marginLeft:'3.5%',borderRadius:5,justifyContent:'center',alignItems:'center',
  height:'60%',width:'20%',backgroundColor:'#c94a30'},
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

export {RatingPop};
