import React, {Component} from 'react';
import {NativeModules, Platform,TouchableOpacity,StyleSheet,TextInput,ToastAndroid,Image,ImageBackground,I18nManager,Alert,ScrollView,Dimensions,YellowBox,AppState,View,StatusBar} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,
  Input
} from "native-base";
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Require cycle:']);
import { Icon} from 'react-native-elements';
import { MyFooter,SearchBox,SortPopMenu,FiltersPopMenu, Hotels ,PickDatePopMenu} from './components';
import moment from 'moment';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions';

class Home extends React.Component{

  constructor(props) {
       super(props);
       this.SortBTN = this.SortBTN.bind(this);
       this.FiltersBTN = this.FiltersBTN.bind(this);
       this.SortRespo = this.SortRespo.bind(this);
       this.FiltersRespo = this.FiltersRespo.bind(this);
       this.PickDateBTN = this.PickDateBTN.bind(this);
       this.PickDateRespo = this.PickDateRespo.bind(this);
       this.SearchRespo = this.SearchRespo.bind(this);
       this.HidePops = this.HidePops.bind(this);
       this.state = {
         Called:false,
            TestValue:false,
            ShowFiltersPop:false,
            ShowSortPop:false,
            ShowPickDatePop:false,
            StartDate:'07/15',
            EndDate:'07/15',
            Hotels: [],
            ResultHotels:'',
          }
     }

    componentDidMount(){
      this.props.fetchTasks();

    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.msg==='LOADING_SUCCESS'&&!this.state.Called){
          this.setState({Called:true,Hotels:nextProps.tasks.tasks.Hotels})
          this.HotelsChild.SetDefaultHotels(nextProps.tasks.tasks.Hotels);
        }
    }


FiltersBTN(){
  this.HidePops();
  this.setState({ShowFiltersPop:true})
}


SortBTN(){
  this.HidePops();
  this.setState({ShowSortPop:true})
}



HidePops(){
  this.setState({ShowPickDatePop:false,ShowFiltersPop:false,ShowSortPop:false})
}

PickDateBTN(){
  this.HidePops();
  this.setState({ShowPickDatePop:true})
}

PickDateRespo(s,e){
  this.HidePops();
  this.setState({StartDate:s,EndDate:e})
}

SearchRespo(Loc){
  this.HidePops();
  this.HotelsChild.SearchThisHotel(Loc);
}

SortRespo(SortType){
  this.HidePops();
  this.HotelsChild.SortHotelsBy(SortType);
}

FiltersRespo(FiltersState){
  this.HidePops();
  this.HotelsChild.FilterHotelsBy(FiltersState);
}


    render() {
      return(
        <View>
          <ScrollView style={{height:ScreenHeight*0.875,ScreenWidth:ScreenWidth}} showsVerticalScrollIndicator={false}>
          <Image style={styles.LogoIMG} source={require('../../res/logo.png')}/>
          <View style={{height:ScreenHeight*0.35,width:ScreenWidth*0.95,alignItems:'center',alignSelf:'center'}}>
            <SearchBox Sort={this.SortBTN} Filters={this.FiltersBTN} PickDate={this.PickDateBTN}
            StartDate={this.state.StartDate} EndDate={this.state.EndDate} SearchRespo={this.SearchRespo} Navigator={this.props.navigation}/>
          </View>
          <Hotels onRef={ref => (this.HotelsChild = ref)} Isloading={this.state.Called===false} Navigator={this.props.navigation}/>
          <View key='BottomMargin' style={{height:ScreenHeight*.1,width:ScreenWidth}}/>
          </ScrollView>
          <SortPopMenu Show={this.state.ShowSortPop} SortResp={this.SortRespo}/>
          <FiltersPopMenu Show={this.state.ShowFiltersPop} FiltersRespo={this.FiltersRespo}/>
          <PickDatePopMenu Show={this.state.ShowPickDatePop} PickDateRespo={this.PickDateRespo} HidePopMthd={this.HidePops}
          StartDate={this.state.StartDate} EndDate={this.state.EndDate}/>
          <MyFooter SelectedTab={1} Navigator={this.props.navigation}/>
        </View>
      )
    }
}



const styles = StyleSheet.create({
LogoIMG:{marginTop:'2%',resizeMode:'contain',alignSelf:'center',
  height:ScreenHeight*0.15,width:ScreenHeight*0.25
}
});

const mapStateToProps = state =>{
  return{
    error: state.HomeRed.error,
    loading: state.HomeRed.loading,
    tasks: state.HomeRed.tasks,
    msg: state.HomeRed.msg
  }
}

export default connect(mapStateToProps ,{ fetchTasks })( Home );
