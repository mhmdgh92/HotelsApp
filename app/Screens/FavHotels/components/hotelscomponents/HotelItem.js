import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,TextInput,I18nManager,Alert,Image,Picker,ImageBackground,ToastAndroid,ScrollView,Dimensions,YellowBox,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
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
const IMAGES = {
  image1: require('../../../../res/S1.png'),
  image2: require('../../../../res/S2.png'),
  image3: require('../../../../res/S3.png'),
  image4: require('../../../../res/S4.png'),
  image5: require('../../../../res/S5.png')
}

class HotelItem extends React.Component{


  getImage(num) {
    return IMAGES['image' + num];
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

  RatingBoxItem(Rating){
    return(
      <View style={[styles.RatingBox,{backgroundColor:this.RatingColor(Rating)}]}>
        <Text style={{fontSize:14,color:'white'}}>{Rating}+</Text>
      </View>
    );
  }

  OnItemClick(){
    console.log('HotelID: this.props.Data.Id:'+this.props.Data.HotelID);
    this.props.Navigator.navigate('HotelDetails', {
        HotelID: this.props.Data.HotelID
      });
  }

HotelItem(Name,StarsNo,Price,Img,Rating,IsFav){
  return(
    <TouchableOpacity activeOpacity={1} onPress={this.OnItemClick.bind(this)} style={{marginTop:ScreenWidth*.05,backgroundColor:'white',height:ScreenWidth*.65,width:ScreenWidth*.9,borderRadius: 10}}>
      <ImageBackground source={{uri: ''+Img}} imageStyle={styles.HotelIMGStyle} style={styles.HotelItem}>
        <TouchableOpacity style={{width:'10%',marginTop:'5%',marginRight:'5%'}}>
            <Icon size={30} name={IsFav?("favorite"):("favorite-border")} color={IsFav?('#ff1500'):('grey')}/>
        </TouchableOpacity>
      </ImageBackground>
      <View style={{flexDirection:'row'}}>
        <Text style={{width:'80%',marginLeft:'5%',fontWeight:'500',marginTop:'3%',fontSize:20,color:'grey'}}>{Name}</Text>
        <Image style={{marginTop:'1.5%',width:'10%',height:'100%',resizeMode:'contain'}} source={this.getImage(StarsNo)} />
      </View>
      <View style={{flexDirection:'row',marginTop:'3%',height:'20%',width:'100%'}}>
      <View style={{marginLeft:'5%',height:'100%',width:'45%'}}>
        <Text style={{fontWeight:'500',fontSize:24,color:'#478807'}}>${Price}</Text>
        <Text style={{fontWeight:'500',fontSize:12,color:'silver'}}>price per night</Text>
      </View>
      <View style={{marginTop:'2%',alignItems:'flex-end',height:'100%',width:'50%'}}>
        {this.RatingBoxItem(Rating)}
      </View>
      </View>
    </TouchableOpacity>
  )
}

render() {
  let MyData = this.props.Data;
  return(
    <View>
      {this.HotelItem(MyData.Name,MyData.Stars,MyData.Price,MyData.Img,MyData.Rating,MyData.IsFav)}
    </View>
  )
}
}


const styles = StyleSheet.create({
  HotelIMGStyle:{resizeMode:'cover',height:'100%',width:'100%',borderTopRightRadius: 10,borderTopLeftRadius:10},
  HotelItem:{alignItems:'flex-end',width:'100%',height:'55%'},
  RatingBox:{marginRight:'8%',borderRadius:3,
  justifyContent:'center',alignItems:'center',height:'60%',width:'20%'},
})

export {HotelItem};
