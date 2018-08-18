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
export default class SponsorCard extends Component{
  



  render(){

    return(
      <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.teal, false)} useForeground={true}>
        <ImageBackground source = {{uri: 'http://assets.pecfest.in/images/'+this.props.name}} resizeMode={'contain'} style={{alignItems: 'center',justifyContent: 'center',flex: 1, marginLeft: 8 ,marginRight: 8, backgroundColor: 'white', borderRadius: 0, marginTop: 4}} >
        
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