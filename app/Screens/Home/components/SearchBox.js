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

class SearchBox extends React.Component{

    constructor(props) {

      super(props);
      this.state = {
        ShowDatePicker:false,
        Rooms:1,
        Guests:1
      }
    }

  DateBTN(){
    this.props.PickDate();
  }

SearchInThisLocation(Loc){
    this.props.SearchRespo(Loc);
}

RoomsEdit(PlusOrMinus){
  console.log('this.state.Rooms:'+this.state.Rooms);
  if(PlusOrMinus)
      this.setState({Rooms:this.state.Rooms+1});
  else
      if(this.state.Rooms>1)
        this.setState({Rooms:this.state.Rooms-1});
}

GuestsEdit(PlusOrMinus){
  console.log('this.state.Guests:'+this.state.Guests);
  if(PlusOrMinus)
      this.setState({Guests:this.state.Guests+1});
  else
      if(this.state.Guests>1)
        this.setState({Guests:this.state.Guests-1});
}

FiltersBTN(){
  this.props.Filters();
}

SortBTN(){
  this.props.Sort();
}

  render() {
    return(
      <View style={[styles.MainSearchBox,styles.Shaddow]}>
      <View style={{backgroundColor:'white',width:'90%',height:'90%'}}>
      <View style={{width:'100%',height:'40%'}}>
        <Text style={{marginTop:'2%',fontSize:12,color:'silver'}}>Destination</Text>
        <TextInput
         placeholder='Location'
         onSubmitEditing={(event) => {this.SearchInThisLocation(event.nativeEvent.text)}}
         style={styles.InputText} />
      </View>

      <View style={styles.DateAndSizeStyle}>
        <TouchableOpacity onPress={this.DateBTN.bind(this)} style={styles.DatePickstyle}>
        <Text>{this.props.StartDate+"  "+this.props.EndDate}</Text>
        </TouchableOpacity>
        <View style={styles.RoomBTN}>
          <View style={styles.EditRoomOrGeustStyle}>
            <Text style={{fontSize:14}}>Rooms:</Text>
            <Icon name='remove' size={16} color='red' onPress={()=>this.RoomsEdit(false)}/>
            <Text style={{fontSize:14}}>  {this.state.Rooms}  </Text>
            <Icon name='add' size={16} color='green' onPress={()=>this.RoomsEdit(true)}/>
          </View>
          <View style={styles.EditRoomOrGeustStyle}>
            <Text style={{fontSize:14}}>Guests:</Text>
            <Icon name='remove' size={16} color='red' onPress={()=>this.GuestsEdit(false)}/>
            <Text style={{fontSize:14}}>  {this.state.Guests}  </Text>
            <Icon name='add' size={16} color='green' onPress={()=>this.GuestsEdit(true)}/>
          </View>
        </View>
      </View>

      <View style={styles.FiltersStyles}>
        <TouchableOpacity onPress={this.FiltersBTN.bind(this)} style={styles.FilterorSortStyle}>
          <Icon name='filter-list' size={20} color='#007fad' />
          <Text style={{fontSize:16,color:'#007fad'}}> Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.SortBTN.bind(this)} style={styles.FilterorSortStyle}>
          <Icon name='sort' size={20} color='#007fad' />
          <Text style={{fontSize:16,color:'#007fad'}}> Sort</Text>
        </TouchableOpacity>
      </View>

      </View>
      </View>

      )
  }
}


const styles = StyleSheet.create({
  FiltersStyles:{flexDirection:'row',justifyContent:'center',width:'100%',height:'33%'},
  FilterorSortStyle:{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'50%',height:'100%'},
  EditRoomOrGeustStyle:{alignItems:'center',justifyContent:'center',height:'50%',width:'100%',flexDirection:'row'},
  RoomBTN:{justifyContent:'center',alignItems:'center',height:'100%',width:'50%'},
  DatePickstyle:{justifyContent:'center',alignItems:'center',borderRightWidth:1,borderColor:'#ebeced',height:'100%',width:'50%'},
  DateAndSizeStyle:{borderTopWidth:1,borderBottomWidth:1,borderColor:'#ebeced',flexDirection: 'row',width:'100%',height:'30%'},
  DateRangecontainer: {
  height:'130%',width:'100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
Footer:{backgroundColor:'white'},
MainSearchBox:{
  backgroundColor:'white',width:'100%',height:'95%',borderRadius: 10,justifyContent:'center',alignItems:'center'
},Shaddow:{
  borderRadius:10,
  shadowColor: '#000',
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 3},
  InputText:{
  marginTop:'2%',alignSelf:'center',textAlign:'center',height:'50%',width:'95%',backgroundColor:'#ebeced',borderRadius:50
},LoginBTN:{width:"95%",height:"80%",justifyContent: 'center',alignItems:'center',alignSelf:'center'}
})

export {SearchBox};
