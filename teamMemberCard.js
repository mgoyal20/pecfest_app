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
  ImageBackground,
  Button
} from 'react-native';


import Events_home from './Events_home'
import NavBar from './navBar'
import Communications from 'react-native-communications';
import EventDetails from './eventDetails'


const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb'};
const hc = (Dimensions.get('window').width-24)/2;

const haddings = {tech: 'Technical Events', cult: 'Cultural Events', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};

var eventsList = {'IEEE': 2, 'CSS': 4};
export default class TeamMemberCard extends Component{
  



  render(){

    return(
      <TouchableNativeFeedback onPress={() => Communications.phonecall(this.props.phone, true)} background={TouchableNativeFeedback.Ripple(colors.teal, false)} useForeground={true}>
        <ImageBackground source = {{uri: 'http://assets.pecfest.in/team/'+this.props.photo+'.jpg'}} style={{alignItems: 'center',justifyContent: 'flex-end',flex: 1, height: hc , width: hc, marginLeft: 4 ,marginRight: 4, backgroundColor: 'white', borderRadius: 0, marginTop: 4, elevation: 2}} >
          <View  style = {{width: hc, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 0, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Montserrat-Regular', color: 'white', fontSize: 16}}>{this.props.name}</Text>
            <Text style={{fontFamily: 'Montserrat-Light', color: 'white', fontSize: 12}}>{this.props.phone}</Text>
          </View>

          
        </ImageBackground>
      </TouchableNativeFeedback>

      )

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