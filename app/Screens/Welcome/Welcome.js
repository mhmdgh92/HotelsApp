import React, {Component} from 'react';
import {NativeModules, Platform,TouchableOpacity,StyleSheet,ToastAndroid,Image,ImageBackground,I18nManager,Alert,ScrollView,Dimensions,YellowBox,AppState,View,StatusBar} from 'react-native';
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
  ListItem
} from "native-base";
import Flag from 'react-native-flags';
import { StackActions, NavigationActions } from 'react-navigation';

var locale="";
class Welcome extends React.Component{

  constructor(props) {

    super(props);
    this.state = {
      locale:'en',
      CurrentSelectedLang:1
    }
  }



componentDidMount(){
  if(Platform.OS == 'ios')
    this.setState({locale:NativeModules.SettingsManager.settings.AppleLocale})
  else
    this.setState({locale:NativeModules.I18nManager.localeIdentifier})
}

Header = () => {
return(
      <Header style={{backgroundColor:'white'}}>
      <StatusBar backgroundColor="#3b3b3b" barStyle="light-content" />
        <Left/>
        <Body>
        </Body>
        <Right/>
      </Header>
)
  }


SelecteThisOne(Key){
  console.log('Key:'+JSON.stringify(Key));
  this.setState({CurrentSelectedLang:Key})
}

SystemLan(){
  if(this.state.locale.includes('en'))
    return(<View>{this.SelectedLang(1,'United Kingdom','Great British','GB')}</View>);
    else if(this.state.locale.includes('fr'))
      return(<View>{this.SelectedLang(1,'France','Langue française','FR')}</View>);
      else
      return(<View>{this.SelectedLang(1,'UAE','اللغة العربية','AE')}</View>);
}


SelectedLang(Key,Title,Desc,CountryCode){
  if(Key>1){
    if(this.state.locale.includes('en')&&CountryCode=='GB')
      return(<View/>)
      else if(this.state.locale.includes('fr')&&CountryCode=='GB')
        return(<View/>)
        else if(this.state.locale.includes('ar')&&CountryCode=='AE')
          return(<View/>)
  }
  return(
    <TouchableOpacity onPress={this.SelecteThisOne.bind(this,Key)} style={{marginTop:'5%',flexDirection:'row'}}>
      <View style={{width:'90%',flexDirection:'row'}}>
      <Flag style={{marginTop:'2%'}} code={CountryCode}   size={32} />
      <View style={{marginLeft:'5%'}}>
        <Text>{Title}</Text>
        <Text style={{fontSize:13,color:'grey',marginTop:'2%'}}>{Desc}</Text>
        </View>
      </View>
      <Radio selected={this.state.CurrentSelectedLang===Key} style={{marginTop:'3%'}}/>
    </TouchableOpacity>
  );
}

ConfirmBTN(){
  console.log('ConfirmBTN');
  const resetAction = StackActions.reset({
     index: 0,
     actions: [NavigationActions.navigate({ routeName: 'Home' })],
   });
   this.props.navigation.dispatch(resetAction);
}

LangTxt(){
  if(this.state.locale.includes('en'))
    return(<View>
      <Text style={{fontSize:22}}>
        Based on your current system languange, we have chosen this language for you, is this correct?
      </Text>
      </View>);
    else if(this.state.locale.includes('fr'))
      return(<View>
        <Text style={{fontSize:22}}>
          En fonction de votre langue système actuelle, nous avons choisi cette langue pour vous, est-ce correct?
        </Text>
        </View>);
      else
      return(<View>
        <Text style={{fontSize:22}}>
          بناءا على لغة نظام هاتفك, فقد تم اختيار اللغة العربية, هل هذا صحيح؟
        </Text>
        </View>);
}

    render() {
      return(
        <View>
        {this.Header()}
        <ScrollView showsVerticalScrollIndicator={false} style={{width:'90%',marginTop:ScreenHeight*0.05,alignSelf:'center'}}>
          {this.LangTxt()}
          {this.SystemLan()}
          <Text style={{marginTop:'6%',fontSize:14}}>Choose a different Language</Text>
          {this.SelectedLang(2,'UAE','اللغة العربية','AE')}
          {this.SelectedLang(3,'United Kingdom','Great British','GB')}
          {this.SelectedLang(4,'France','Langue française','FR')}
          {this.SelectedLang(5,'India','हिंदी भाषाा','IN')}
          {this.SelectedLang(6,'China','中文','CN')}
          {this.SelectedLang(7,'Japan','日本語','JP')}
          {this.SelectedLang(8,'Portugal','Português','PT')}
          {this.SelectedLang(9,'Russia','Русский язык','RU')}
          <View style={{height:ScreenHeight*0.22}}/>
        </ScrollView>
          <View style={this.absoluteItem}>
          <Button onPress={this.ConfirmBTN.bind(this)} style={styles.LoginBTN} info><Text
            style={{fontSize:18}}>Confirm</Text></Button>
         </View>
        </View>
      )
    }

}

const styles = StyleSheet.create({
absoluteItem:{position: 'absolute', top:0, left:0, right: 0, bottom:0, justifyContent: 'center', alignItems: 'center',backgroundColor:'red'},
LoginBTN:{marginTop:ScreenHeight*-0.2,width:ScreenWidth*0.9,height:ScreenHeight*0.075,justifyContent: 'center',alignSelf:'center'}
});

export default Welcome;
