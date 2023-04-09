import React, {Component} from 'react';
import {TouchableOpacity,Linking,StyleSheet,I18nManager,Alert,Image,Picker,ImageBackground,ToastAndroid,ScrollView,Dimensions,YellowBox,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
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
import MapView,{Marker }  from 'react-native-maps';

class HotelMap extends React.Component{

MyMapView(){
  return(

    <MapView
      mapType ='standard'
      onMapReady={() => this.setState({ marginBottom: 1 })}
      showsCompass={true}
      style={styles.MapStyle}
      showsMyLocationButton={true}
      initialRegion={{
        latitude: 31.52200,
        longitude: 34.45309,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      }}>
      <Marker
              coordinate={{
                latitude: 31.52200,
                longitude: 34.45309
              }}
            />
      </MapView>

  )
}

handleOfficalWebsiteClick = () => {
   Linking.canOpenURL('https://www.google.com/').then(supported => {
     if (supported) {
       Linking.openURL('https://www.google.com/');
     } else {
       console.log("Don't know how to open URI: " + 'https://www.google.com/');
     }
   });
 };

 handlePhoneNoClick (PhoneNo){
   Linking.openURL(`tel:`+PhoneNo)
  }


  render() {
    return(
      <View style={styles.ContainerView}>
        <Text style={{width:'100%',color:'#37454D',fontSize:18}}>Contact</Text>
        <Text style={{marginTop:'5%',width:'100%',color:'grey',fontSize:16}}>24 Prescot street, E1 8BB, London</Text>
        <View style={styles.MapView}>

          {this.MyMapView()}

        </View>
        <TouchableOpacity onPress={()=>this.handlePhoneNoClick('123124')} style={{marginTop:'5%',width:'100%',height:'10%'}}>
          <Text style={{color:'#0682AF',
          fontSize:19}}>+123456789789</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.handleOfficalWebsiteClick} style={{marginTop:'3%',width:'100%',height:'30%'}}>
           <Text style={{color:'#0682AF',fontSize:19}}>Offical Website</Text>
         </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  MapView:{justifyContent:'center',alignItems:'center',marginTop:'5%',
  width:'100%',height:'65%',backgroundColor:'rgba(1,1,1,.02)',
  borderRadius:5,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 2},
  ContainerView:{marginTop:'5%',alignSelf:'center',
    height:ScreenHeight*.55,width:ScreenWidth*.9
  },MapStyle:{borderRadius:5,
    width: '99%', height: '97%', zIndex: 0},
})

export {HotelMap};
