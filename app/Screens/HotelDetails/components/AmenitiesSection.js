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

class AmenitiesSection extends React.Component{


AmenitieItem(Active,IconName,Txt){
  return(
    <View style={{alignItems:'center',flexDirection:'row',width:'50%',height:'100%'}}>
      <Icon size={30} name={IconName} color={Active?('#5B676E'):('#D3D5D7')}/>
      <Text style={{color:Active?('#5B676E'):('#D3D5D7'),fontSize:17}}>{'  '+Txt}</Text>
    </View>
  )
}

  render() {
    return(
      <View style={styles.RatingView}>
        <Text style={{width:'100%',marginTop:'5%',color:'#37454D',fontSize:18}}>Amenities</Text>
        <View style={{alignItems:'center',justifyContent:'center',width:'100%',height:'65%'}}>
          <View style={[styles.RowView]}>
              {this.AmenitieItem(false,'wifi','Wifi in lobby')}
              {this.AmenitieItem(true,'wifi','Wifi in rooms')}
          </View>

          <View style={[styles.RowView]}>
          {this.AmenitieItem(false,'pool','Pool')}
          {this.AmenitieItem(true,'spa','Spa')}
          </View>

          <View style={[styles.RowView]}>
          {this.AmenitieItem(false,'local-parking','Parking')}
          {this.AmenitieItem(true,'pets','Pets')}
          </View>

        </View>
        <TouchableOpacity style={{alignItems:'flex-end',width:'100%',height:'20%'}} onPress={()=>this.props.ShowThisPopBTN('3')}>
          <Text style={{width:'30%',fontWeight:'bold',color:'#0682AF',fontSize:18}}>
          SEE MORE
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  RowView:{justifyContent:'center',alignItems:'center',flexDirection:'row',width:'95%',height:'28%'},
  RatingBox:{borderRadius:3,
  justifyContent:'center',alignItems:'center',height:'70%',width:'15.5%'},
  RatingView:{alignSelf:'center',borderBottomWidth:1,borderColor:'silver',
    height:ScreenHeight*.4,width:ScreenWidth*.9
  }
})

export {AmenitiesSection};
