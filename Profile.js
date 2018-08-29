import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback,
  StatusBar,
  TouchableWithoutFeedback,
  AsyncStorage,
  Linking
} from 'react-native';

import Login from './login';
import Register from './register';
import UserDetails from './userDetails'
import './global'
import { createTransition, FlipX } from 'react-native-transition';


const colors = { selected: '#ff5a5f', normal: '#a5a59a' , teal: '#008489', white: '#ffffff', statusBarLight: '#f0f0f0'};
const Transition = createTransition(FlipX);
var loggedIn = 'false';
var pecfestID = 'null';


export default class Profile extends Component{

   componentDidMount(){
    
  }

  state = {
    value: 'Home'
  }
  
  

  changeScreen = screen => {
    this.setState({ value: screen })

   // Alert.alert(loggedIn)
  }


	render(){
			
			if(this.state.value == 'Home'){
        return ( <View style={{flex: 1,  backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
                  <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content" />
                  <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 22}}>#Pecfest2018</Text>
                  <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 12, marginBottom: 16, textAlign:'center'}}>Please Login or Sign Up and be a part of the Pecfest family.</Text>
                    <TouchableWithoutFeedback onPress={this.changeScreen.bind(this, 'Login')} background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                    <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 16, width: Dimensions.get('window').width-32}}>
                      <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Login</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback  onPress={this.changeScreen.bind(this, 'Register')} background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                    <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 16, width: Dimensions.get('window').width-32}}>
                      <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Sign Up</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )
      }

      if(this.state.value == 'Login'){
        return (
          <Login from = {"profile"}/>
        )
      }

      if(this.state.value == 'Register'){
        return (
          <Register from = {"profile"}/>
        )
      }

      if(this.state.value == 'userDetails'){
        return (
          <UserDetails pecfestID = {pecfestID}/>
        )
      }

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  tabBarStyle: {
    flexDirection: 'row',
    backgroundColor: colors.teal,
    elevation: 0,
    height: 56
  },

  indicator: {
    backgroundColor: '#ff5a5f',
    height: 2
  },

  tab: {
    width: Dimensions.get('window').width/3,
  },

  brief:{
    fontFamily: 'Montserrat-Light',
    color: '#484848',
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 0
  },

  rules:{
    fontFamily: 'Montserrat-Light',
    color: '#484848',
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 36,
    paddingTop: 0,
    paddingBottom: 16
  },

  scrollContainer: {
    position: 'relative',
    top: 0,
    right: 0,
    left: 0,
    bottom:0,
    backgroundColor: '#ffffff',
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

  navButton: {
    position: 'absolute',
    left:0,
    top:0,
    backgroundColor: colors.teal,
    width:56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainHadding: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 36,
    paddingLeft: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },

  mainHadding2: {
    fontFamily: 'Montserrat-Medium',
    color: colors.teal,
    fontSize: 36,
    paddingLeft: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },

  mainHadding_below: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 24,
    paddingLeft: 16,
    paddingTop: -8,
    paddingBottom: 16,
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

  eventRulesHadding: {
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 36,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 16,

  },

  phoneNumber: {
    fontFamily: 'Montserrat-Regular',
    color: colors.normal,
    fontSize: 24,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 16,

  },

  eventDescription:{
    fontFamily: 'Montserrat-Light',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 0,

  },
  tabIcon: {
    
    height: 24,
    width: 24,
  },

  navBar:{
    height: 56,
    backgroundColor: colors.teal
  },

  eventCard:{
    backgroundColor: '#ffffff',
    elevation: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
    marginBottom: 16,
  },
});