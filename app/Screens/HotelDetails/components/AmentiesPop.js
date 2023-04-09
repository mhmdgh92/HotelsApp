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

class AmentiesPop extends React.Component{


AmenitieItem(Active,IconName,Txt){
  return(
    <View style={{alignItems:'center',flexDirection:'row',width:'50%',height:'100%'}}>
      <Icon size={30} name={IconName} color={Active?('#5B676E'):('#D3D5D7')}/>
      <Text style={{color:Active?('#5B676E'):('#D3D5D7'),fontSize:17}}>{'  '+Txt}</Text>
    </View>
  )
}

HotelFacilitesList(){
  return (
    <View>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
      <Text style={styles.HotelFaciliteItemStyle}>{'  -Hotel Facilities'}</Text>
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
          <Text style={{fontSize:22}}>{'  Amenities'}</Text>
        </View>
        <View style={{alignSelf:'center',alignItems:'center',width:'97.5%',height:'40%',marginTop:'5%'}}>
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
          <View style={[styles.RowView]}>
              {this.AmenitieItem(false,'ac-unit','AC-unit')}
              {this.AmenitieItem(true,'restaurant','Restaurant')}
          </View>
          <View style={[styles.RowView]}>
              {this.AmenitieItem(false,'local-bar','Hotel Bar')}
              {this.AmenitieItem(true,'fitness-center','fitness-center')}
          </View>
         </View>
         <View style={{alignSelf:'center',marginTop:'5%',width:'95%',height:'40%'}}>
          <Text style={{fontSize:18,height:'15%'}}>{'  Hotel Facilities'}</Text>
            {this.HotelFacilitesList()}
         </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  HotelFaciliteItemStyle:{color:'grey',fontSize:14},
  RowView:{marginTop:'3.5%',justifyContent:'center',alignItems:'center',flexDirection:'row',width:'95%',height:'15%'},
  RatingBox:{borderRadius:3,
  justifyContent:'center',alignItems:'center',height:'70%',width:'15.5%'},
  RatingView:{backgroundColor:'white',alignSelf:'center',borderBottomWidth:1,borderColor:'silver',
    height:ScreenHeight,width:ScreenWidth
  },Headerstyle:{borderBottomWidth:.1,flexDirection:'row',shadowColor: '#000',alignItems:'center',
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,height:'10%',width:'100%'},
})

export {AmentiesPop};
