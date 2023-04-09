import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,TextInput,I18nManager,ActivityIndicator,Alert,Image,Picker,ImageBackground,ToastAndroid,ScrollView,Dimensions,YellowBox,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
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
import AsyncStorage from '@react-native-community/async-storage';
import { HotelItem } from './hotelscomponents';

class Hotels extends React.Component{

constructor(props) {
  super(props);
  this.state = {
    DefaultHotels:[],
    ShowedHotels:[],
    InnerLoading:false
  }
}

HotelsList(){
  if(this.state.ShowedHotels.length===0)
    return (<Image style={styles.LogoIMG} source={require('../../../res/noresaults.png')}/>)
  let Items = [];
    for (let i = 0; i < this.state.ShowedHotels.length; i++)
      Items.push(<HotelItem key={i} Data={this.state.ShowedHotels[i]} Navigator={this.props.Navigator}/>)
    return Items;
}

componentDidMount() {
  this.props.onRef(this)
}

componentWillUnmount() {
  this.props.onRef(undefined)
}

SetDefaultHotels(MyHotels){
  this.RefreshIsFavHotels(MyHotels);
}

async RefreshIsFavHotels(MyHotels){
  try{
  let ThisShowedHotels = MyHotels;
  let SavedFavHotels=[];
  await AsyncStorage.getItem('HotelsItems')
      .then(req => JSON.parse(req))
      .then(json => SavedFavHotels=json)
      .catch(error => console.log('error!'))
      if(SavedFavHotels!==null){
        for(let i=0;i<ThisShowedHotels.length;i++)
        {
          for(let y=0;y<SavedFavHotels.length;y++){
            if(ThisShowedHotels[i].HotelID===SavedFavHotels[y].HotelID){
                ThisShowedHotels[i].IsFav=true;
                break;
              }
          }
        }
        this.setState({InnerLoading:false,DefaultHotels:ThisShowedHotels,ShowedHotels:ThisShowedHotels})
      }else
          this.setState({InnerLoading:false,DefaultHotels:MyHotels,ShowedHotels:MyHotels})
        }catch(e){
          alert(e)
  }
}

SearchThisHotel(Loc){
this.setState({InnerLoading:true})
    if(Loc.length===0)
      {
        this.setState({InnerLoading:false,ShowedHotels:this.state.DefaultHotels})
        return;
    }
    let ResultHotels = [];
    for(let i=0;i<this.state.DefaultHotels.length;i++)
    {
      if(this.state.DefaultHotels[i].Name.toLowerCase().includes(Loc.toLowerCase())
    ||this.state.DefaultHotels[i].Location.toLowerCase().includes(Loc.toLowerCase()))
        ResultHotels.push(this.state.DefaultHotels[i]);
    }
    this.setState({InnerLoading:false,ShowedHotels:ResultHotels})
}

SortHotelsBy(SortNo){
  this.setState({InnerLoading:true})
  let ResultHotels = this.state.DefaultHotels;

  switch (SortNo) {
    case 1:
      ResultHotels.sort((a, b) => (a.Price < b.Price) ? 1 : -1)
      break;
      case 2:
        ResultHotels.sort((a, b) => (a.Rating < b.Rating) ? 1 : -1)
        break;
        case 3:
          ResultHotels.sort((a, b) => (a.Recommendations < b.Recommendations) ? 1 : -1)
          break;
          case 4:
            ResultHotels.sort((a, b) => (a.Stars < b.Stars) ? 1 : -1)
            break;
            case 5:
              ResultHotels.sort((a, b) => (a.Price < b.Price) ? 1 : -1)
              ResultHotels.sort((a, b) => (a.Stars < b.Stars) ? 1 : -1)
              break;
              case 6:
                ResultHotels.sort((a, b) => (a.Location > b.Location) ? 1 : -1)
                break;
    default:

  }
  this.setState({InnerLoading:false,ShowedHotels:ResultHotels})
}

FilterHotelsBy(FiltersState){
  let ResultHotels = [];
  for(let i=0;i<this.state.DefaultHotels.length;i++)
  {
    if(this.state.DefaultHotels[i].Price<=FiltersState.Price
    &&this.state.DefaultHotels[i].Rating>=FiltersState.ActualRating
  &&FiltersState.Stars[this.state.DefaultHotels[i].Stars-1])
        ResultHotels.push(this.state.DefaultHotels[i]);
  }

  this.setState({InnerLoading:false,ShowedHotels:ResultHotels})
}


render() {
  if(this.props.Isloading===true||this.state.InnerLoading===true)
    return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>);
  return(
    <View style={{alignItems:'center'}}>
      {this.HotelsList()}
    </View>
  )
}
}


const styles = StyleSheet.create({
})

export {Hotels};
