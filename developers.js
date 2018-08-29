import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import Events_home from './Events_home'
import eventChoosenType from './eventChoosenType'
import {Router, Scene, Stack} from 'react-native-router-flux'

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']

const size = Dimensions.get('window').width/4;
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', white: '#ffffff', statusBarLight: '#f0f0f0'};
export default class Developers extends Component{

  handleClick = message => {
    this.setState({ message: message })

    Alert.alert(message)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
	render(){
		
		return (
      <View style={{flex:1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}} >
        <View style = {{height : 20}}>
          <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content" />
        </View>
      {/*<Image source={require('./developers/harman.png')} style={{height: 100, width: 100, borderRadius: 100}} />*/}
      <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 22, color: colors.normal, marginTop: 0}}>{'<'}Developers{'/>'}</Text>
      <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 18, color: colors.normal, marginTop: 8}}>Frontend</Text> 
      <View style={{flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'center', marginTop: 4}}>
        <View style={{alignItems: 'center', marginRight: 0}}>
          <Image source={require('./developers/harman.png')} style={{height: size, width: size, borderRadius: 100, marginRight:0}}/>
          <Text style={{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 16}}>Harman</Text>
          {/*<View style={{flexDirection: 'row'}}>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                          <Image source={require('./icons/facebook.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                            <Image source={require('./icons/email.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                    </View>*/}
        </View>
                
      </View>
      <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 18, color: colors.normal, marginTop: 16}}>Backend</Text> 

      <View style={{flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'space-around', marginTop: 8}}>
        <View style={{alignItems: 'center', marginRight: 0}}>
          <Image source={require('./developers/prince.png')} style={{height: size, width: size, borderRadius: 100, marginRight:0}}/>
          <Text style={{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 16}}>Pushpinder</Text>
          {/*<View style={{flexDirection: 'row'}}>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                          <Image source={require('./icons/facebook.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                            <Image source={require('./icons/email.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                    </View>*/}
        </View>
        <View style={{alignItems: 'center', marginRight: 0}}>
          <Image source={require('./developers/bindal.png')} style={{height: size, width: size, borderRadius: 100, marginRight:0}}/>
          <Text style={{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 16}}>Ankit</Text>
          {/*<View style={{flexDirection: 'row'}}>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                          <Image source={require('./icons/facebook.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                            <Image source={require('./icons/email.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                    </View>*/}
        </View>
        <View style={{alignItems: 'center', marginLeft: 0}}>
          <Image source={require('./developers/mitesh.png')} style={{height: size, width: size, borderRadius: 100, marginRight:0}}/>
          <Text style={{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 16}}>Mitesh</Text>
          {/*<View style={{flexDirection: 'row'}}>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                          <Image source={require('./icons/facebook.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={() => {Linking.openURL('https://www.facebook.com/pecfestofficial')}}>
                            <Image source={require('./icons/email.png')} style={{marginLeft:4, marginRight: 4, width: 24, height: 24, tintColor: colors.teal}} />
                      </TouchableWithoutFeedback>
                    </View>*/}
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

  pageContainer: {
    position: 'absolute',
    bottom: 56,
    top: 0,
    left: 0,
    right: 0,
  },

  category: {
  	backgroundColor: "#ffffff",
  	justifyContent: 'center',
  	alignItems: 'center',
  	//marginTop: 10,
  	flex:1,

  }
});

