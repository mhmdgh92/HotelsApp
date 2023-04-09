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
import Slider from '@react-native-community/slider';
const IMAGES = {
  image1: require('../../../res/S1.png'),
  image2: require('../../../res/S2.png'),
  image3: require('../../../res/S3.png'),
  image4: require('../../../res/S4.png'),
  image5: require('../../../res/S5.png')
}

class FiltersPopMenu extends React.Component{

  constructor(props) {
            super(props);
            this.state = {
              Price:500,
              Rating:1,
              Stars:[true,true,true,true,true],
              ActualRating:0
            }
          }

  componentWillMount(){
    this.animatedValue = new Animated.Value(ScreenHeight);
  }

  getImage(num) {
    return IMAGES['image' + num];
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

  FilterByThis(SortType){
    this.setState({SelectedSortType:SortType})
    this.TogglePopShow(false);
    this.props.SortResp(SortType);
  }

  PriceSlider(value){
    this.setState({Price:value})
  }


ToggleThisStar(StarNo){
  const newStarsArray = [...this.state.Stars];
  newStarsArray[StarNo] = !newStarsArray[StarNo];
  this.setState({ Stars: newStarsArray });
}

RatingBoxItem(RateNo,Rating,BoxColor){
  return(
    <TouchableOpacity onPress={()=>this.setState({ActualRating:Rating,Rating:RateNo})} style={[styles.RatingBox,{backgroundColor:this.state.Rating>RateNo?('grey'):(BoxColor)}]}>
      <Text style={{fontSize:16,color:'white'}}>{Rating}+</Text>
    </TouchableOpacity>
  );
}

StarIMG(StarsNo){
  return(<Image style={styles.StarIMG} opacity={this.state.Stars[StarsNo]?(1):(.5)} source={this.getImage(StarsNo+1)}/>)
}

RatingStarsItem(StarsNo){
  return(
      <TouchableOpacity onPress={()=>this.ToggleThisStar(StarsNo)} style={[styles.StarsBox]}>
        {this.StarIMG(StarsNo)}
      </TouchableOpacity>
  );
}

ShowResultsBTN(){
  this.props.FiltersRespo(this.state);
  this.TogglePopShow(false);
}

  render() {
    const animatedStyle = {top:this.animatedValue}
    return(
      <Animated.View style={[styles.absolute,{backgroundColor:'white',height:'100%',width:'100%'},animatedStyle]}>
        <View style={styles.Headerstyle}>
          <Text style={{fontSize:22,fontWeight:'bold',marginTop:'5%',marginLeft:'5%'}}>Filters</Text>
        </View>
        <View style={{height:'15%',width:'100%',marginTop:'5%'}}>
          <Text style={{fontSize:16,marginTop:'2.5%',marginLeft:'7%'}}>Price Per Night</Text>
          <Text style={{fontSize:14,marginTop:'2.5%',marginLeft:'10%',color:'grey'}}>{Math.trunc(this.state.Price)}$</Text>
          <Slider
           style={{marginLeft:'5%',width: '90%', height: '30%'}}
           minimumValue={10}
           maximumValue={500}
           value={500}
           minimumTrackTintColor="#000000"
           maximumTrackTintColor="silver"
           onValueChange={(Value)=>this.PriceSlider(Value)}
          />
        </View>

        <View style={{height:'25%',width:'100%'}}>
          <Text style={{fontSize:16,marginTop:'2.5%',marginLeft:'7%'}}>Rating</Text>
          <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'50%',width:'90%'}}>
            {this.RatingBoxItem(1,'0','#c94a30')}
            {this.RatingBoxItem(2,'7','#f48f00')}
            {this.RatingBoxItem(3,'7.5','#71a340')}
            {this.RatingBoxItem(4,'8','#428500')}
            {this.RatingBoxItem(5,'8.5','#316300')}
          </View>
        </View>

        <View style={{height:'25%',width:'100%'}}>
          <Text style={{fontSize:16,marginTop:'2.5%',marginLeft:'7%'}}>Hotel Class</Text>
          <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'50%',width:'90%'}}>
            {this.RatingStarsItem(0)}
            {this.RatingStarsItem(1)}
            {this.RatingStarsItem(2)}
            {this.RatingStarsItem(3)}
            {this.RatingStarsItem(4)}
          </View>
        </View>

        <View style={{marginTop:'5%',justifyContent:'center',alignItems:'center',width:'100%',height:'12%'}}>
          <Button onPress={this.ShowResultsBTN.bind(this)} style={{justifyContent:'center',alignSelf:'center',width:'95%',height:'80%'}} info>
          <Text style={{fontSize:18}}>Show Results</Text>
          </Button>
        </View>

      </Animated.View>
    );

  }
}


const styles = StyleSheet.create({
  StarIMG:{width:'100%',height:'100%',resizeMode:'contain'},
  StarsBox:{marginRight:'3.5%',marginLeft:'2.7%',borderRadius:5,justifyContent:'center',alignItems:'center',height:'60%',width:'14%'},
  RatingBox:{marginRight:'3.5%',marginLeft:'3.5%',borderRadius:5,justifyContent:'center',alignItems:'center',height:'60%',width:'14%',backgroundColor:'#c94a30'},
  Headerstyle:{shadowColor: '#000',
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,height:'10%',width:'100%'},
    RadioStyle:{alignItems:'center',height:'15%',width:'100%',flexDirection:'row'},
    absolute:{position: 'absolute', top: ScreenHeight*1, left: 0, right: 0, bottom: 0, alignItems: 'center'},
})

export {FiltersPopMenu};
