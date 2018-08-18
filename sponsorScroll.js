import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  StatusBar, 
  ActivityIndicator,
  Button
} from 'react-native';


import Events_home from './Events_home'
import NavBar from './navBar'
import EventDetails from './eventDetails'
import SponsorCard from './sponsorCard'
import {api} from './eventdb'
import './global'


const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb'};
const h = Dimensions.get('window').height;

const haddings = {tech: 'Technical Events', cult: 'Cultural Events', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};



var eventsList = {'IEEE': 2, 'CSS': 4};
export default class Sponsors extends Component{

  state = {
    isLoading: true,
    sponsors: null,
  }

  

componentDidMount(){
  api.getSponsors({
      onSuccess: (value) =>{
        this.setState({isLoading: false})
        
      },
      onFailed: (value) =>{
        Alert.alert('Please check your network connection.'); 
      } 
    })

}
  
  
returnMembers = () =>{
    var members = [];
    for(let i = 0; i<global.sponsors.length; i++){
      var sponsorsOfType = [];
      if(typeof  (global.sponsors[i].sponsors.length)!='undefined'){
        for(let j = 0; j<global.sponsors[i].sponsors.length; j++){
          sponsorsOfType.push(
            <SponsorCard key={j} name = {global.sponsors[i].sponsors[j].image}/>
          )
        }
      }
      
      if(global.sponsors[i].sponsors.length<=3 && global.sponsors[i].sponsors.length>0){
        if(global.sponsors[i].sponsors.length == 1){
          members.push(
            <View key={i} style = {{alignItems: 'center'}}>
                <Text style = {{fontFamily: 'Montserrat-Medium', color: colors.normal, fontSize: 22, marginTop: 24, marginBottom: 24}}>{global.sponsors[i].type}</Text>
                <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/3 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
                  {sponsorsOfType}
                </View>   
            </View>

          )
        }else{
          members.push(
            <View key={i} style = {{alignItems: 'center'}}>
                <Text style = {{fontFamily: 'Montserrat-Medium', color: colors.normal, fontSize: 22, marginTop: 24, marginBottom: 24}}>{global.sponsors[i].type}</Text>
                <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/3 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
                  {sponsorsOfType}
                </View>   
            </View>

          )
        }
      }else{
        var remainder = global.sponsors[i].sponsors.length%3;
        var y = global.sponsors[i].sponsors.length/3;
        for(let k = 0; k<y; k++){
          members.push(
            <View key={i} style = {{alignItems: 'center'}}>
                {(k == 0)?<Text style = {{fontFamily: 'Montserrat-Medium', color: colors.normal, fontSize: 22, marginTop: 24, marginBottom: 24}}>{global.sponsors[i].type}</Text>:<View/>}
                <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/3 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
                  {sponsorsOfType[3*k]}
                  {sponsorsOfType[3*k+1]}
                  {sponsorsOfType[3*k+2]}
                </View>   
            </View>

          )
        }
      }
    }

    

    return members;
  }

  render() {
    if(this.state.isLoading){
      return (
        <View style={{marginTop: 32}}>
          <ActivityIndicator size={'large'}  />
        </View>

      )
    }else{
      return (
        <View>
          {this.returnMembers()}
        </View>

      )
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  button: {
    height: 40,
    width: 120,
    right: 0,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
  },

  teamSize:{
    fontFamily: 'Montserrat-Regular',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    //paddingBottom: 16,
  },

  prizeMoney:{
    fontFamily: 'Montserrat-Regular',
    color: colors.teal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 16,
  },
  eventName: {
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 36,
    paddingTop: 16,
    paddingBottom: 0,
  },

  eventDescription:{
    fontFamily: 'Montserrat-Light',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 0,

  },

  eventCard:{
    backgroundColor: '#ffffff',
    elevation: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 8,
    elevation: 4,
    borderRadius: 4,
    width: Dimensions.get('window').width-40,
    height: 284,
    justifyContent: 'center'
  },
});