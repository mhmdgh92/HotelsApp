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
import moment from 'moment';
import { DateRangePicker } from './searchboxcomponents';

class PickDatePopMenu extends React.Component{

  componentWillMount(){
    this.animatedValue = new Animated.Value(ScreenHeight);
  }

  TogglePopShow(ShowOrHide){
    if(ShowOrHide)
    {
    console.log('2');
    this.animatedValue = new Animated.Value(ScreenHeight*1);
    Animated.timing(this.animatedValue,{
      toValue:0,
      duration:500
    }).start()
      console.log("True");
    }else{
      this.animatedValue = new Animated.Value(0);
      Animated.timing(this.animatedValue,{
        toValue:ScreenHeight,
        duration:350
      }).start()
      console.log('1');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.Show)
          this.TogglePopShow(true);
  }



DateRangeChoosed(s,e){
  this.props.PickDateRespo(moment(s).format('MM/DD'),moment(e).format('MM/DD'));
  this.TogglePopShow(false);
}

DateRange(){
  return(
  <View style={styles.DateRangecontainer}>
  <DateRangePicker
    style={{width:'100%',height:'100%'}}
    onSuccess={(s, e)=>this.DateRangeChoosed(s,e)}
    theme={{ markColor: '#007fad', markTextColor: 'white' }}/>
      </View>
    )
}

holahere(){
  alert('here')
  this.DateRangeChoosed('0','0');
}

MyHeader(){
  return(
    <View style={styles.Headerstyle}>
      <TouchableOpacity onPress={()=>this.holahere()}
        style={{marginLeft:'2.5%',alignSelf:'center',width:'10%',alignItems:'flex-start'}}>
        <Icon name='arrow-back' size={28} color='grey'/>
      </TouchableOpacity>
      <Text style={{fontSize:22}}>{'  Date Range'}</Text>
    </View>
  )
}

  render() {
    const animatedStyle = {top:this.animatedValue}
    return(
      <Animated.View style={[styles.absolute,{backgroundColor:'white',height:'100%',width:'100%'},animatedStyle]}>
      {this.MyHeader()}
      <View style={{backgroundColor:'red',width:'100%',height:'85%'}}>
        {this.DateRange()}
      </View>
      </Animated.View>
    );

  }
}


const styles = StyleSheet.create({
  DateRangecontainer: {
  height:'100%',width:'100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
  StarIMG:{width:'100%',height:'100%',resizeMode:'contain'},
  StarsBox:{marginRight:'3.5%',marginLeft:'2.7%',borderRadius:5,justifyContent:'center',alignItems:'center',height:'60%',width:'14%'},
  RatingBox:{marginRight:'3.5%',marginLeft:'3.5%',borderRadius:5,justifyContent:'center',alignItems:'center',height:'60%',width:'14%',backgroundColor:'#c94a30'},
    RadioStyle:{alignItems:'center',height:'15%',width:'100%',flexDirection:'row'},
    absolute:{position: 'absolute', top: ScreenHeight*1, left: 0, right: 0, bottom: 0, alignItems: 'center'},
    Headerstyle:{borderBottomWidth:.1,flexDirection:'row',shadowColor: '#000',alignItems:'center',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,height:'10%',width:'100%'},
})

export {PickDatePopMenu};
