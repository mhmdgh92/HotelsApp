import React, {Component} from 'react';
import {NativeModules, Platform,Modal,TouchableOpacity,StyleSheet,ToastAndroid,Image,
  ImageBackground,I18nManager,Alert,BackHandler,ScrollView,Dimensions,ActivityIndicator,YellowBox,AppState,View,StatusBar} from 'react-native';
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
  Radio,
  List,
  ListItem,ProgressBar
} from "native-base";
import { StackActions, NavigationActions } from 'react-navigation';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { RatingSection,ReviewsSection,AmenitiesSection,HotelDesc,HotelMap,RatingPop,ReviewsPop,AmentiesPop,DescPop} from './components';
const IMAGES = {
  image1: require('../../res/S1.png'),
  image2: require('../../res/S2.png'),
  image3: require('../../res/S3.png'),
  image4: require('../../res/S4.png'),
  image5: require('../../res/S5.png')
}
import {connect} from 'react-redux';
import {fetchHotelDetailsTasks} from '../../actions';

class HotelDetails extends React.Component{

  constructor(props) {
      super(props);
      this.ShowThisPop = this.ShowThisPop.bind(this);
      this.HidePop = this.HidePop.bind(this);
      this.state = {
        RatingPopShow:false,
        ShowImgsViwer:false,
        ReviewsPopShow:false,
        AmentiesPopShow:false,
        DescPopShow:false,
        Isloading:true,
        Data: {}
}
    }

    componentDidMount() {
       this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
       this.props.fetchHotelDetailsTasks(this.props.navigation.state.params.HotelID);
     }

     componentWillUnmount() {
       this.backHandler.remove()
     }

     handleBackPress = () => {
       if(this.state.RatingPopShow||this.state.ShowImgsViwer||this.state.ReviewsPopShow
       ||this.state.DescPopShow||this.state.AmentiesPopShow){
         this.HidePop();
         return true;
       }
       this.props.navigation.navigate('Home');
       return true;
     }

     UNSAFE_componentWillReceiveProps(nextProps){
       if(nextProps.msg==='LOADING_SUCCESS'&&this.state.Isloading){
          this.setState({Isloading:false,Data:nextProps.tasks.tasks})
       }
     }

    RatingColor(Rating){
      if(Rating<7)
        return '#c94a30';
        else if(Rating==7)
          return '#f48f00';
          else if(Rating<=7.5)
            return '#71a340';
            else if(Rating==8)
              return '#428500';
              else
                return '#316300';
    }

    RatingName(Rating){
      if(Rating<7)
        return 'Not Bad';
        else if(Rating==7)
          return 'OK';
          else if(Rating<=7.5)
            return 'Good';
            else if(Rating==8)
              return 'Very Good';
              else
                return 'Excellent';
    }

ShowImageViewer(){
  this.setState({ShowImgsViwer:true})
}

BackArrow(){
  return(<Icon name='arrow-back' size={28} color='white' onPress={()=>this.BackBTN()}/>)
}

HotelImagesViewer(){
  return(
    <Modal onRequestClose={() => { this.HidePop();}} visible={this.state.ShowImgsViwer} transparent={true}
    onBackButtonPress ={()=>this.setState({ShowImgsViwer:false})}>
      <ImageViewer enablePreload enableSwipeDown
      renderHeader={() => <TouchableOpacity onPress={()=>this.setState({ShowImgsViwer:false})}
      style={{marginTop:'2.5%',alignSelf:'center',width:'95%',alignItems:'flex-start'}}>
        <Icon name='arrow-back' size={28} color='white'/>
      </TouchableOpacity>}
         onSwipeDown={()=>this.setState({ShowImgsViwer:false})} imageUrls={this.state.Data.Imgs}/>
    </Modal>)
}

BackBTN(){
  this.props.navigation.goBack();
}

ShareBTN(){

}

FavBTN(){

}

getImage(num) {
  return IMAGES['image' + num];
}

RatingBoxItem(Rating){
  return(
    <View style={[styles.RatingBox,{backgroundColor:this.RatingColor(Rating)}]}>
      <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}>{Rating}</Text>
    </View>
  );
}

//Pops Section
ShowThisPop(PopNo){
  if(PopNo==='1')
    this.setState({RatingPopShow:true})
    else if(PopNo==='2')
      this.setState({ReviewsPopShow:true})
      else if(PopNo==='3')
        this.setState({AmentiesPopShow:true})
        else if(PopNo==='4')
          this.setState({DescPopShow:true})
}

HidePop(){
  this.setState({ReviewsPopShow:false,ShowImgsViwer:false,RatingPopShow:false,AmentiesPopShow:false,DescPopShow:false})
}

RatingPop(){
  if(this.state.RatingPopShow)
    return(<RatingPop HotelData={this.state.Data} HidePopMthd={this.HidePop}/>)
    return(<View/>)
}

ReviewsPop(){
  if(this.state.ReviewsPopShow)
    return(<ReviewsPop HotelData={this.state.Data} HidePopMthd={this.HidePop}/>)
    return(<View/>)
}

AmentiesPop(){
  if(this.state.AmentiesPopShow)
    return(<AmentiesPop HotelData={this.state.Data} HidePopMthd={this.HidePop}/>)
    return(<View/>)
}

DescPop(){
  if(this.state.DescPopShow)
    return(<DescPop HotelData={this.state.Data} HidePopMthd={this.HidePop}/>)
    return(<View/>)
}
//Pops Section

  render() {
    if(this.state.Isloading===true)
      return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>);
    let MyData = this.state.Data;
    return(
      <View>
      {this.RatingPop()}
      {this.HotelImagesViewer()}
      {this.ReviewsPop()}
      {this.AmentiesPop()}
      {this.DescPop()}
        <ScrollView style={{backgroundColor:'white',ScreenWidth:ScreenWidth}} showsVerticalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={.9} onPress={()=>this.ShowImageViewer()} style={styles.BigIMGView}>
            <ImageBackground source={{uri: ''+MyData.Imgs[0].url}} imageStyle={{flex:1}}
            style={{alignItems:'center',flex:1}}>
              <View style={{marginTop:'2%',flexDirection:'row',width:'90%',height:'15%'}}>
                <View style={{alignItems:'flex-start',width:'80%',height:'100%'}}>
                  <Icon name='arrow-back' size={28} color='white' onPress={()=>this.BackBTN()}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',width:'30%',height:'100%'}}>
                  <Icon name='share' size={28} color='white' onPress={()=>this.ShareBTN()}/>
                  <Icon name='arrow-back' opacity={0} size={10} color='white'/>
                  <Icon name='favorite-border' size={28} color='white' onPress={()=>this.FavBTN()}/>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.TitleView}>
            <Text style={{marginLeft:'5%',width:'75%',marginTop:'5%',color:'#37454D',fontWeight:'bold',fontSize:28}}>{MyData.Name}</Text>
            <Image style={{marginTop:'6%',width:'10%',height:'40%',resizeMode:'contain'}} source={this.getImage(3)} />
          </View>
          <RatingSection HotelData={MyData} ShowThisPopBTN={this.ShowThisPop}/>
          <ReviewsSection HotelData={MyData} ShowThisPopBTN={this.ShowThisPop}/>
          <AmenitiesSection HotelData={MyData} ShowThisPopBTN={this.ShowThisPop}/>
          <HotelDesc HotelData={MyData} ShowThisPopBTN={this.ShowThisPop}/>
          <HotelMap HotelData={MyData}/>
          <View style={styles.BottomMarginView}/>
        </ScrollView>
        </View>
    )
  }
  }





const styles = StyleSheet.create({
  RatingBox:{borderRadius:3,
  justifyContent:'center',alignItems:'center',height:'70%',width:'15.5%'},
  BottomMarginView:{
    height:ScreenHeight*.1,width:ScreenWidth
  },
  RatingView:{alignSelf:'center',
    height:ScreenHeight*.45,width:ScreenWidth*.9
  },
  TitleView:{borderBottomWidth:1,borderColor:'silver',
    flexDirection:'row',height:ScreenHeight*.15,width:ScreenWidth
  },
  BigIMGView:{
    height:ScreenHeight*.45,width:ScreenWidth
  }
});


const mapStateToProps = state =>{
  return{
    error: state.HotelDetailsRed.error,
    loading: state.HotelDetailsRed.loading,
    tasks: state.HotelDetailsRed.tasks,
    msg: state.HotelDetailsRed.msg
  }
}

export default connect(mapStateToProps ,{ fetchHotelDetailsTasks })( HotelDetails );
