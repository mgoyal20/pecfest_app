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
import TeamMemberCard from './teamMemberCard'


const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb'};
const h = Dimensions.get('window').height;

const haddings = {tech: 'Technical Events', cult: 'Cultural Events', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};

var eventsList = {'IEEE': 2, 'CSS': 4};
export default class TeamMembers extends Component{

  state = {
    isLoading: true,
  }

  componentDidMount() {
  setTimeout( () => {
     this.setState({isLoading: false})
  },1000);
}
  
  
returnMembers = () =>{
    var members = [];
    members.push(
      <View key={1} style = {{alignItems: 'center'}}>
        <Text style = {{fontFamily: 'Montserrat-Medium', color: colors.normal, fontSize: 22, marginTop: 12, marginBottom: 8}}>Convener</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Utsav Dahiya'} phone={'+91-8968388133'} photo={'1'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Medium', color: colors.normal, fontSize: 22, marginTop: 8, marginBottom: 8}}>Co-Convener</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Lakshay Piplani'} phone={'+91-9877299387'} photo={'2'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Secretary</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Eshaan Sharma'} phone={''}photo={'3'}/>
              <TeamMemberCard name={'Ayush Anand'} phone={'+91-8427353298'}photo={'4'}/>
            </View>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Simran Katyal'} phone={'+91-9815022114'} photo={'5'}/>
              <TeamMemberCard name={'Swanya Singh'} phone={''} photo={'6'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8, marginBottom: 8}}>Marketing</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Mayank Mittal'} phone={'+91-8968264826'} photo={'7'}/>
              <TeamMemberCard name={'Pallabh Singh'} phone={'+91-7837442166'} photo={'8'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Infrastructure</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Anreet Singh Bhamra'} phone={'+91-9501519521'} photo={'9'}/>
              <TeamMemberCard name={'Dipanshu Agarwal'} phone={'+91-7696115624'} photo={'10'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Event Coordination (Cultural)</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Aayush Parasher'} phone={'+91-7837307607'} photo={'11'}/>
              <TeamMemberCard name={'Parv Khurana'} phone={'+91-9988720701'} photo={'12'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Event Coordination (Technical)</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Japmanjeet Singh Gill'} phone={''} photo={'13'}/>
              <TeamMemberCard name={'Kanish Bajaj'} phone={'+91-8872887200'} photo={'14'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Security and Descipline</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8), height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Tejwinder Singh'} phone={'+91-9646224771'} photo={'15'}/>
              <TeamMemberCard name={'Jasraj Singh Sandhu'} phone={'+91-7210000077'} photo={'16'}/>
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Finance</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Dil Raj Singh Mand'} phone={''} photo={'17'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Printing, Publishing and Stationary</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Pushkar Bansal'} phone={'+91-9915658241'} photo={'18'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Publicity (Offline and Branding)</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Aneeetinder Kaur Saini'} phone={''} photo={'19'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Alumni & Industry Relations</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Rupal Verma'} phone={''} photo={'20'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Creative</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Ashish Puri'} phone={'+91-7589492304'} photo={'21'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Public Relations and Media</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Aarushi'} phone={'+91-9888128463'} photo={'22'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Hospitality & Logistics</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Hansin Garg'} phone={'+91-8558888850'} photo={'23'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8}}>Mega Shows</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4}}>
              <TeamMemberCard name={'Vikramaditya Singh'} phone={'+91-8527165044'} photo={'24'}/>
              
            </View>
            <Text style = {{fontFamily: 'Montserrat-Regular', color: colors.normal, fontSize: 22, marginTop: 8,marginBottom: 8, textAlign: 'center'}}>Online Publicity and Website Management</Text>
            <View style={{backgroundColor: 'white', width: (Dimensions.get('window').width-8)/2, height:(Dimensions.get('window').width-24)/2 + 8, flexDirection: 'row', marginRight: 4, marginLeft: 4, marginBottom: 16}}>
              <TeamMemberCard name={'Mitesh Kakkar'} phone={'+91-8054962709'} photo={'25'}/>
              
            </View>
      </View>
    )

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