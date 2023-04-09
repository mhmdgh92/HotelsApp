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

class SortPopMenu extends React.Component{

  constructor(props) {
            super(props);
            this.state = {
              SliderShow:false,
              SelectedSortType:1
            }
          }

  componentWillMount(){
    this.setState({SliderShow:true})
    this.animatedValue = new Animated.Value(ScreenHeight);
  }


  TogglePopShow(ShowOrHide){
    console.log("this.state.SliderShow:"+this.state.SliderShow+"||"+ShowOrHide);
    this.setState({SliderShow:ShowOrHide})
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

  SortByThis(SortType){
    this.setState({SelectedSortType:SortType})
    this.TogglePopShow(false);
    this.props.SortResp(SortType);
  }

  SortItem(SortNo,SortTxt){
    return(
      <TouchableOpacity onPress={this.SortByThis.bind(this,SortNo)} style={styles.RadioStyle}>
        <Radio onPress={this.SortByThis.bind(this,SortNo)} selected={this.state.SelectedSortType===SortNo}  style={{marginLeft:'15%'}}/>
        <Text style={{fontSize:20}}>  {SortTxt}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const animatedStyle = {top:this.animatedValue}
    return(
      <Animated.View style={[styles.absolute,{backgroundColor:'rgba(1,1,1,.2)',height:'100%',width:'100%'},animatedStyle]}>
        <View style={{marginTop:'30%',backgroundColor:'#f2f2f2',height:'70%',width:'100%'}}>
          <Text style={{fontSize:22,marginTop:'10%',marginLeft:'10%'}}>Sort By</Text>
          <View style={{height:'100%',width:'100%'}}>
          {this.SortItem(1,'Price')}
          {this.SortItem(2,'Ratings')}
          {this.SortItem(3,'Recommendations')}
          {this.SortItem(4,'Stars')}
          {this.SortItem(5,'Price & Stars')}
          {this.SortItem(6,'Location')}
          </View>
        </View>
      </Animated.View>
    );

  }
}


const styles = StyleSheet.create({
  RadioStyle:{alignItems:'center',height:'15%',width:'100%',flexDirection:'row'},
  absolute:{position: 'absolute', top: ScreenHeight*1, left: 0, right: 0, bottom: 0, justifyContent:'center', alignItems: 'center'},
})

export {SortPopMenu};
