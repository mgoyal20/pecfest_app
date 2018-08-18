import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback,
  Image,
  StatusBar,
  ScrollView, 
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Profile from './Profile.js'
import Register from './register.js'
import './global.js'

const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb',statusBarLight: '#f0f0f0'};


export default class UserDetails extends Component{

  constructor(props){
    super(props);
    this.props.from = 'profile';
  }

  
  state = {
    pecfestID : null,
    value:"Home",
    loggedIn: 'false',
  }

  goBack = screen => {
    this.setState({ value: screen })

    //Alert.alert(message)
  }

  logOut = () =>{
    
    
    this.setState({value: 'profile'})
    global.loggedIn = false;
    AsyncStorage.setItem('loggedIn', 'false')
  }
	
	render(){
    switch(this.state.value){
      case 'Home':
    		return (
    			<View style= {{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>

            <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
            <View style={{backgroundColor: colors.teal, marginBottom: 32, width: Dimensions.get('window').width/3, height: Dimensions.get('window').width/3, borderRadius: Dimensions.get('window').width/3, alignItems: 'center', justifyContent: 'center'}}>
              <Image source = {require('./icons/logopf.png')} style={{tintColor: '#ffffff', height: Dimensions.get('window').width/3-64, width: Dimensions.get('window').width/3-64 }}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <Text style={styles.userDetail}>{global.user.pecfestId}</Text>
              <Text style={styles.userDetailSub}>Pecfest ID</Text>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <Text style={styles.userDetail}>{global.user.name}</Text>
              <Text style={styles.userDetailSub}>Name</Text>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, borderColor: colors.teal, alignItems: 'center',borderWidth: 0, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
              <Text style={styles.userDetail}>{global.user.college}</Text>
              <Text style={styles.userDetailSub}>College</Text>
            </View>
            
          <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}} onPress={this.logOut}>Logout?</Text>
          </View>
  		)

      case 'profile':
        return(
          <Profile />
        )

      case 'register':
        return(
          <Register from = 'login' />
        )

    

      default:
        return(
          <Profile />
        )
    }
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
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
    elevation: 2,
    borderRadius: 4,
    width: Dimensions.get('window').width-16,
    justifyContent: 'center'
  },

  userDetail: {
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 22,
    textAlign: 'center',
  },

  userDetailSub: {
    fontFamily: 'Montserrat-Regular',
    color: colors.normal,
    fontSize: 12,
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

  logoText:{
    fontFamily: 'Montserrat-Medium',
    color: colors.teal,
    fontSize: 36,
    paddingTop: 0,
    //paddingBottom: 16,
  },

  sponsorText:{
    fontFamily: 'Montserrat-Medium',
    color: colors.normal,
    fontSize: 30,
    marginTop: 32,
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
    fontSize: 32,
    paddingTop: 0,
    paddingBottom: 0,
  },

  eventDescription:{
    fontFamily: 'Montserrat-Light',
    color: colors.normal,
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 0,

  },

  organiserHadding: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 34,
    paddingLeft: 16,
    //paddingTop: 16,
    paddingBottom: 0,
  },
  mainHadding: {
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff',
    fontSize: 36,
    paddingLeft: 16,
    paddingTop: 0,
    paddingBottom: 16,
  },

  brief:{
    fontFamily: 'Montserrat-Light',
    color: '#484848',
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 16
  },

  navButton: {
    position: 'absolute',
    left:0,
    top:0,
    backgroundColor: 'white',
    width:56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButton2: {
    position: 'absolute',
    right:0,
    top:0,
    backgroundColor: colors.teal,
    width:56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar:{
    height: 56,
    backgroundColor: colors.teal,
    flexDirection: 'row'
  },

  scrollContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom:0,
    backgroundColor: '#ffffff',
  },

  scrollContainer2: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom:0,
    backgroundColor: '#ffffff',
  },

  tabBarStyle: {
  	flexDirection: 'row',
  	backgroundColor: '#ffffff',
  },

  underLineStyle: {
  	backgroundColor: '#a51c30',
  	height: 1.5,
  },
  indicator: {
    backgroundColor: '#a51c30',
  },

  tab: {
  	width: Dimensions.get('window').width/2,
  },

  tabIcon: {
    
    height: 24,
    width: 24,
  },

  logo: {
    
    height: 80,
    width: 80,
  },

  sponsor: {
    
    height: 80,
  },

  label: {
    color: '#a5a59a',
    //fontWeight: '500',
    fontFamily: 'Montserrat-Light',

  },
  categoryLabel: {
    color: '#008489',
    //fontWeight: '500',
    fontFamily: 'Montserrat-Light',
    fontSize: 26,

  },


  category: {
  	backgroundColor: "#ffffff",
  	justifyContent: 'center',
  	alignItems: 'center',
  	//marginTop: 10,
  	flex:1,

  }
});