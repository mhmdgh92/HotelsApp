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

class DescPop extends React.Component{

  render() {
    return(
      <View style={styles.RatingView}>
      <View style={styles.Headerstyle}>
        <TouchableOpacity onPress={()=>this.props.HidePopMthd()}
          style={{marginLeft:'2.5%',alignSelf:'center',width:'10%',alignItems:'flex-start'}}>
          <Icon name='arrow-back' size={28} color='black'/>
        </TouchableOpacity>
        <Text style={{fontSize:22}}>{'  Hotel Description'}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{alignSelf:'center',width:'90%'}}>
        <Text style={{width:'100%',marginTop:'5%',color:'#37454D',fontSize:18}}>Hotel Description</Text>
        <Text style={{width:'100%',marginTop:'5%',color:'grey',fontSize:15}}>
        asd asdasd
        asdasd
        asdasd
        asdasdasd
           </Text>
           <View style={styles.BottomMarginView}/>
      </ScrollView>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  RatingView:{
    height:ScreenHeight,width:ScreenWidth
  },
  BottomMarginView:{
    height:ScreenHeight*.15,width:ScreenWidth
  },Headerstyle:{borderBottomWidth:.1,flexDirection:'row',shadowColor: '#000',alignItems:'center',
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,height:'10%',width:'100%'},
})

export {DescPop};
