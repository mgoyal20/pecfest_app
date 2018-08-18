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
  TextInput,
  BackHandler,
  Button
} from 'react-native';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android'

import Slider from 'react-native-slider'
import Events_home from './Events_home'
import NavBar from './navBar'
import RegisterTab from './registerTab';
import EvenChoosenType from './eventChoosenType'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Communications from 'react-native-communications';
import ContactCard from './contactCard'
import './eventdb.js'

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb'};
const h = Dimensions.get('window').height;

const haddings = {tech: 'Technical Events', cult: 'Cultural Events', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};

var eventsList = {'IEEE': 2, 'CSS': 4};
var names = ['Harman', 'Mitesh', 'Prince', 'Vishwas', 'Kuljeet', 'Dilraj', 'Roy', 'Harjot']
var aboutEvents = {'Rangmanch Rangmanch' : {'details': '“The blood has been spilt, you may clean it but the stains will stay!” – Anonymous.\nHere’s to the spotlight shining, the red curtains retreating and the acting that will drown you into a sea of emotions. You may cry, may even laugh or watch with an unwavering gaze. You see it every day, but you have never seen it before. The plethora of expressions, diversity of unimaginable characters, red of the blood all to impress you! Actors from the region will enliven the stage and perform their hearts out to stand victorious in this tough clash of theatre-acting. Welcome to the Stage play competition.', 'rules': '1. Time limit - 30 minutes to 75 minutes (empty stage to empty stage).\n2. There would be no restriction on the number of members in a team.\n3. All the members of teams must have a valid college ID card in order to participate.\n4. The play may be in Hindi, English or Hinglish.\n5. No type of banners, stickers are allowed on the stage backdrop.\n6. Use of fire/water/smoke machines on stage (or anywhere in its vicinity) is strictly prohibited.\n7. Teams must bring all the costumes and props with them as the organizing committee will not provide anything except for a few chairs and tables for stage setting.\n8. Mikes and Lights will be provided and are expected to appoint someone to operate them during the performance.\n9. Teams are expected to mention approximate time for their plays at the time of registration.\n10. Registration will be done online or team Leader can contact above mentioned event coordinator.'}}

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]}>
                            <Text style={styles.label}>This is the Home Page</Text>
                          </View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#8ddca4' } ]} />;

var idInputs = [];
export default class EventDetails extends Component{

  state = {
    back: 'false',
    age: 15,
    index: 0,
      routes: [
          { key: '1', icon: './icons/ic_home_36pt' },
          { key: '2', icon: './icons/ic_person'},
          { key: '3', icon: './icons/ic_person'},
      ], 
    teamSize: null,
    showInputs: false,
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBack.bind(this, 'true'));
  }
   handleHardwareBackPress = () => {
    Alert.alert('Hello');
    // return true to stop bubbling
    return true
  };

  getCoordinators = (event) => {
    let coordinators = event.coordinators.split(';');
    coordinators = coordinators.map(coordinator => {
      let name, phone, email;
      if (coordinator.indexOf(';') !== -1) {
        let splits = coordinator.split(';');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf(':') !== -1) {
        let splits = coordinator.split(':');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf('-') !== -1) {
        let splits = coordinator.split('-');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf('(') !== -1) {
        name = coordinator.split('(')[0];
        phone = coordinator.match(/\(([^)]+)\)/)[1]
      } else {
        name = coordinator;
      }

      return {
        name, phone, email
      }
    });


    return coordinators;
  }


  setInputs = () => {
    
    Alert.alert(JSON.stringify(this.state.teamSize));
    this.setState({showInputs: true});
  }

  returnContactCards = () => {
    let coordinators = this.props.event.coordinators.split(';');
    coordinators = coordinators.map(coordinator => {
      let name, phone, email;
      if (coordinator.indexOf(';') !== -1) {
        let splits = coordinator.split(';');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf(':') !== -1) {
        let splits = coordinator.split(':');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf('-') !== -1) {
        let splits = coordinator.split('-');

        name = splits[0];
        if (splits.length === 3) {
          phone = splits[1];
          email = splits[2];
        } else if (splits.length === 2) {
          phone = splits[1]
        }
      } else if (coordinator.indexOf('(') !== -1) {
        name = coordinator.split('(')[0];
        phone = coordinator.match(/\(([^)]+)\)/)[1]
      } else {
        name = coordinator;
      }

      return {
        name, phone, email
      }
    });
    var ContactCards = [];
    for(let i = 0; i<coordinators.length; i++){
      ContactCards.push(
        <ContactCard key = {i} name = {coordinators[i].name} phone = {coordinators[i].phone}/>
      )
    }

    return ContactCards;
  }
  
  returnContactsViews = () => {
    
    var ContactViews = [];
    if(this.returnContactCards().length%2 == 0){
      for(let i = 0; i<this.returnContactCards().length/2; i++){
        ContactViews.push(
          <View key = {i} style={{backgroundColor: 'white', width: Dimensions.get('window').width-8, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
            {this.returnContactCards()[2*i]}
            {this.returnContactCards()[2*i+1]}
          </View>
        )
      }
    }else{
      for(let i = 0; i<(this.returnContactCards().length-1)/2; i++){
        ContactViews.push(
          <View key = {i} style={{backgroundColor: 'white', width: Dimensions.get('window').width-8, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
            {this.returnContactCards()[2*i]}
            {this.returnContactCards()[2*i+1]}
          </View>
        )
      }
      ContactViews.push(
          <View  style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
            {this.returnContactCards()[this.returnContactCards().length-1]}
          </View>
        )
    }
    //Alert.alert(JSON.stringify(coordinators.length))
    return ContactViews;
  }
  
  FirstRoute = () => (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.brief}>{this.props.event.details.split('<br/>').join('\n')}</Text>
      <Text style={{fontFamily: 'Montserrat-Regular', color: colors.teal, fontSize: 22, marginLeft: 16}}>Prizes</Text>
      <Text style={{fontFamily: 'Montserrat-Regular', color: colors.teal, fontSize: 16, marginLeft: 16, borderColor: colors.teal, marginBottom: 0}}>{this.props.event.prize.split(';').join('\n')}</Text>
      <Text style={{fontFamily: 'Montserrat-Regular', color: colors.teal, fontSize: 22, marginLeft: 16}}>Venue</Text>
      <Text style={{fontFamily: 'Montserrat-Regular', color: colors.teal, fontSize: 16, marginLeft: 16, borderColor: colors.teal, marginBottom: 16}}>{this.props.event.location} on Day {this.props.event.day} @ {this.props.event.time}</Text>
      <View style={{backgroundColor: colors.separator, height:1,  width: Dimensions.get('window').width-16, left: 8}}/>
      {/*<Text style={styles.eventRulesHadding}>Rules</Text>*/}
      <Text style={styles.rules}>{this.props.event.rulesList.split('<br />').join('\n')}</Text>
      <TouchableWithoutFeedback onPress={this.changeIndex.bind(this, 1)} background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
        <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 16}}>
          <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Register</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
    )

  SecondRoute = () => {
    if (global.loggedIn) {
      return <RegisterTab event={this.props.event}/>
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Image source = {require('./icons/block.png')}  style={{tintColor: 'rgba(0,0,0,0.5)', height: 50, width: 50, marginBottom:8}}/>
          <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>Please login to register.</Text>
        </View>
      )
    }
  }

   ThirdRoute = () => (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={{alignItems: 'center'}}>
      <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 22, marginTop: 16}}>Coordinators</Text>
        <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 12, marginBottom: 16}}>Feel free to contact for any queries.</Text>
        
      {/*<View style={{backgroundColor: 'white', width: Dimensions.get('window').width-8, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
        {this.returnContactCards()}
      </View>*/}
      {this.returnContactsViews()}
      
    </ScrollView>
    )


    _handleIndexChange = index => this.setState({ index });


    _renderIcon = ({ route }) => {
      if(route.key == 1){
        return (
          <Image source = {require('./icons/ic_home_36pt.png')}  style={[styles.tabIcon, {tintColor: (this.state.message == 'Home') ? colors.selected : '#ffffff'}]}/>
        );
      }
      if(route.key == 2){
        return (
          <Image source = {require('./icons/register.png')}  style={[styles.tabIcon, {tintColor: (this.state.message == 'Home') ? colors.selected : '#ffffff'}]}/>
        );
      }
      if(route.key == 3){
        return (
          <Image source = {require('./icons/ic_contacts.png')}  style={[styles.tabIcon, {tintColor: (this.state.message == 'Home') ? colors.selected : '#ffffff'}]}/>
        );
      }

    };
    _renderHeader = props => {
      return (
          <TabBar {...props} scrollEnabled style={styles.tabBarStyle} renderIcon={this._renderIcon} indicatorStyle={styles.indicator} tabStyle={styles.tab}/>
      )
    }

    _renderScene = SceneMap({
      '1': this.FirstRoute,
      '2': this.SecondRoute,
      '3': this.ThirdRoute,
    });

  handleBack = val => {
    this.setState({ back: val })
    return true;
    //Alert.alert(val)
  }

  changeIndex = index => {
    this.setState({ index: index })
    //Alert.alert(val)
  }

  call = number => {
    Communications.phonecall(number, true)
    //Alert.alert(val)
  }
  render(){

    if(this.state.back == 'true'){
      return(
        <EvenChoosenType category={this.props.backCategory}/>
      )
    }
    return(

      <View style={styles.container}>
          <StatusBar backgroundColor={colors.StatusBarTeal} barStyle="light-content" />
          <View style={styles.navBar}>
            <TouchableNativeFeedback onPress={this.handleBack.bind(this, 'true')} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
               <View style={styles.navButton}>
                <Image source = {require('./icons/ic_arrow_back.png')}  style={[styles.tabIcon, {tintColor: '#ffffff'}]}/>
               </View>           
            </TouchableNativeFeedback>
           </View>
           <View style={{backgroundColor: colors.teal}}>
             <Text style={styles.mainHadding}>{this.props.event.name}</Text>
           </View>  
           <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
              />
          {/* <ScrollView style={styles.scrollContainer} >
            <Text style={styles.brief}>This institute organises events that acknowledges technological innovations and management procedures with accolades every year.  </Text>
            <View style={{backgroundColor: colors.separator, height:1,  width: Dimensions.get('window').width-16, left: 8}}/>
            <Text style = {styles.mainHadding, {color: '#000000', fontSize: 50}}>hello{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye{'\n'}oye</Text>
          </ScrollView>*/}
      </View>
      


    )
    

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

  text: {
    color: 'black',
    fontSize: 24,
  },
  slider: {
    width: 300,
  },
  indicator: {
    backgroundColor: '#eeeeee',
    height: 2,
    elevation: 4,
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
    paddingBottom: 12,
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
    fontSize: 26,
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
    fontSize: 26,
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