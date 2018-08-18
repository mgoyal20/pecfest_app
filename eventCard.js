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
  Button
} from 'react-native';


import Events_home from './Events_home'
import NavBar from './navBar'
import EventDetails from './eventDetails'


const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb'};
const h = Dimensions.get('window').height;

const haddings = {tech: 'Technical Events', cult: 'Cultural Events', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};

var eventsList = {'IEEE': 2, 'CSS': 4};
export default class EventCard extends Component{
  

   state = {
    back: 'false',
    home: 'none',
    
  }

  handleClick = val => {
    //this.setState({ back: val })
    //Alert.alert(val)
    this.setState({home: val})
  }

  render(){

    return(

      <View style={styles.eventCard} >
                  <View>
                    <Text style={styles.eventName}>{this.props.event.name}</Text>
                    <Text style={styles.eventDescription}>{this.props.event.shortDescription.trim()}</Text>
                    <Text style={styles.teamSize}>Team Size: {this.props.event.minSize}-{this.props.event.maxSize}.</Text>
                    <Text style={styles.time}>Day {this.props.event.day}: {this.props.event.time}</Text>
                    {/*<Text style={styles.prizeMoney}>1st prize: Rs. 20,000</Text>*/}
                    <View style={{backgroundColor: colors.separator, height:1,}}/>
                    <View style={{backgroundColor: '#ffffff', height: 40, alignItems: 'flex-end', marginTop: 16, marginBottom: 16, bottom: 0}}>
                      <TouchableNativeFeedback onPress={()=>this.props.onRegister(this.props.event)} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                        <View style={styles.button}>
                          <Text style={{color: '#ffffff', fontFamily: 'Montserrat-Medium', fontSize: 18}}>Register</Text>
                        </View>
                      </TouchableNativeFeedback>
                    {/*<Text style={{color: colors.teal, position: 'absolute', left:0, bottom: 0, fontFamily: 'Montserrat-Medium',fontSize: 18}}>Day 1: 4 PM</Text>*/}
                    </View>
                    
                    </View>
            </View>
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
    fontSize: 16,
    paddingTop: 0,
    //paddingBottom: 16,
  },
  time:{
    fontFamily: 'Montserrat-Regular',
    color: colors.teal,
    fontSize: 16,
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