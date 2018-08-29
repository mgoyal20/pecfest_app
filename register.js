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
  TouchableOpacity,
  Picker,
  CheckBox
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Login from './login'
import Profile from './Profile'
import user from './user'
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb',statusBarLight: '#f0f0f0'};
const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pecfestID : "pecfest ID",
            value: "Home",
            done: false,
            submitting: false,
            message:'',
            otpForm: false,
            signIn: false,
            fName:null,
            lName:null,
            college: null,
            gender: null,
            accomodation: 0,
            mobileNumber: null,
            email: null,
            password: null
          }
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
      }

      focusNextField(id) {
        this.inputs[id].focus();
      }



  goBack = screen => {
    this.setState({ value: screen })

    //Alert.alert(message)
  }



  isValidfName() {
      if(this.state.fName == null){
        return false;
      }
      var res = this.state.fName.split(" ");
      if(res.length > 1){
          return false;
      }
      return this.state.fName.length > 2;

  }

  isValidlName() {
      if(this.state.lName == null){
        return false;
      }
      var res = this.state.lName.split(" ");
      if(res.length > 1){
          return false;
      }
      return this.state.fName.length > 2;
    }

  isValidCollege() {
      if(this.state.college == null){
        return false;
      }
      return this.state.college.length !== 0;
  }

  handleVerifyOtp = () => {
          this.setState({ otp: true })
      };

  handleSignUp = () => {
          const errors = [];
          this.handleVerifyOtp();
          if (!this.isValidfName()) {
              errors.push('First Name');
          }

          if (!this.isValidlName()) {
              errors.push('Last Name');
          }

          if (this.state.mobileNumber == null || !this.state.mobileNumber.match(/[0-9]{10,10}/)) {
            errors.push('Mobile')
          }

          if (!this.isValidCollege()) {
            errors.push('College');
          }

          if (this.state.email == null || !this.state.email.match(emailre)) {
              errors.push('Email')
          }

          if(this.state.password == null){
              errors.push('Password');
          }

          if (errors.length > 0) {
              const message = errors.join(', ') + (errors.length == 1 ? ' is ' : ' are ') + 'invalid.';
              this.setState({disabled: true, error: true, message: message});
              Alert.alert(message);
              return;
          }
          var md5 = require('md5');
          const newUser = {
              firstName: this.state.fName,
              lastName : this.state.lName,
              email: this.state.email,
              mobile: this.state.mobileNumber,
              college: this.state.college,
              accomodation: this.state.accomodation,
              gender: this.state.gender,
              password : md5(this.state.password)
          };
          this.setState({ User: newUser } );

          user.signUp(newUser, {
              onSuccess: (res) => {
                  user.checkVerified(this.state.newUser.mobile, {
                      onSuccess: (verified) => {
                          console.log(verified);
                          if (verified) {
                              // send user to the login page
                              //this.props.onContinueToLogin()
                              this.setState({ signIn: true});

                          } else {
                          console.log('Reached here');
                              this.setState({ submitting: false, otp: true, pecfestId: res.pecfestId, otpForm: true, value: 'otpForm' });

                          }
                      },
                      onFailed: (err) => {
                          this.setState({ submitting: false, error: true, message: err.message || 'Unknown error occured.' });
                      }
                  })
              },
              onFailed: (err) => {
                  if (typeof err.ACK !== 'undefined') {
                      if (err.ACK === 'ALREADY') {
                          this.setState({ message: 'Account already exists. Verifying...' });
                          user.checkVerified(this.state.User.mobile, {
                              onSuccess: verified => {
                                  console.log(verified);
                                  if (verified) {
                                      // send user to the login page
                                      //this.props.onContinueToLogin()
                                      this.setState({ signIn: true});
                                  } else {
                                  console.log('Reached in failed else');
                                      this.setState({ submitting: false, otp: true, otpForm: true , value: 'otpForm'})
                                  }
                              },
                              onFailed: (err) => {
                                  this.setState({ submitting: false, error: true, message: err.message || 'Unknown error occurred 2' });
                              }
                          })
                      }
                  }
              }
          });

          this.setState({ submitting: true, submitMessage: 'Verifying account...' });
      };

	render(){
    if(this.state.value == 'Home'){
    		return (
    		<View style={{flex: 1,  backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
    		<View style = {{height : 20}}>
                <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
            </View>
            <View style={{backgroundColor: 'white', height: 56, width: Dimensions.get('window').width}}>
                <TouchableNativeFeedback onPress={this.goBack.bind(this, this.props.from)} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                    <View style={styles.navButton}>
                        <Image source = {require('./icons/ic_arrow_back.png')}  style={[styles.tabIcon, {tintColor: colors.normal}]}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 22}}>Sign Up</Text>
            <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 12, marginBottom: 16}}>The fun is just few details away.</Text>
            <KeyboardAwareScrollView style= {{flex: 1, backgroundColor: '#ffffff'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput onChangeText = {(fName) => this.setState({fName})} style={styles.inputField} placeholder={'First Name'}
              underlineColorAndroid={'white'} autoCapitalize={'words'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ false } onSubmitEditing={() => { this.focusNextField('lName');}} returnKeyType={ "next" }
              ref={ input => { this.inputs['fName'] = input;}} />

            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput onChangeText = {(lName) => this.setState({lName})} style={styles.inputField} placeholder={'Last Name'}
              underlineColorAndroid={'white'} autoCapitalize={'words'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ false } onSubmitEditing={() => { this.focusNextField('mobile');}} returnKeyType={ "next" }
                            ref={ input => { this.inputs['lName'] = input;}}/>

            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput onChangeText = {(mobileNumber) => this.setState({mobileNumber})} keyboardType="phone-pad" style={styles.inputField} placeholder={'Your Mobile Number (in 10 digits)'}
              underlineColorAndroid={'white'} autoCapitalize={'none'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ false } onSubmitEditing={() => { this.focusNextField('college');}} returnKeyType={ "next" }
                                          ref={ input => { this.inputs['mobile'] = input;}}/>

            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput onChangeText = {(college) => this.setState({college})} style={styles.inputField} placeholder={'Your College'}
              underlineColorAndroid={'white'} autoCapitalize={'words'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ false } onSubmitEditing={() => { this.focusNextField('email');}} returnKeyType={ "next" }
                                          ref={ input => { this.inputs['college'] = input;}}/>

            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput onChangeText = {(email) => this.setState({email})} keyboardType="email-address" style={styles.inputField} placeholder={'Your Email ID'}
              underlineColorAndroid={'white'} autoCapitalize={'none'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ false } onSubmitEditing={() => { this.focusNextField('password');}} returnKeyType={ "next" }
                                          ref={ input => { this.inputs['email'] = input;}}/>

            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <TextInput secureTextEntry={true} onChangeText = {(password) => this.setState({password})} style={styles.inputField} placeholder={'Enter Your Password'}
              underlineColorAndroid={'white'} autoCapitalize={'none'} blurOnSubmit={false} selectionColor={colors.teal}
              blurOnSubmit={ true } returnKeyType={ "done" } ref={ input => { this.inputs['password'] = input;}}/>
            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
            <Text style={{color: colors.teal, fontSize: 22, marginTop: 10}}>Gender</Text>
            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <Picker selectedValue={this.state.gender} onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
              style={styles.pickerField} mode={'dropdown'} itemStyle={{alignItems: 'center', color: colors.teal}} prompt={"Gender"}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
                        <Text style={{color: colors.teal, fontSize: 22, marginTop: 10}}>Accomodation</Text>
                        </ScrollView>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.inputFieldView}>
              <Picker selectedValue={this.state.accomodation} onValueChange={(itemValue, itemIndex) => this.setState({accomodation: itemValue})}
              style={styles.pickerField} mode={'dropdown'} itemStyle={{alignItems: 'center', color: colors.teal}} prompt={"Accomodation"}>
                <Picker.Item label="Yes" value="1" />
                <Picker.Item label="No" value="0" />
              </Picker>
            </ScrollView>

            <TouchableOpacity  onPress={this.handleSignUp} background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                                    <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
                                      <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Next</Text>
                                    </View>
                                  </TouchableOpacity>


          </KeyboardAwareScrollView>
          </View>
    		)
    }
    if(this.state.value == 'login'){
        return(
          <Login />
        )
    }
    if(this.state.value == 'profile'){
        return(
          <Profile />
        )
    }
    if(this.state.otpForm && this.state.value == 'otpForm' ){
        return(
            <VerifyOtp />
        )
    }
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  pickerField:{
    width: Dimensions.get('window').width - 32,
    alignItems: 'center',
    color: colors.teal
   },

  inputFieldView:{
  marginLeft: 16,
  marginRight: 16,
  height: 50,
  borderColor: colors.teal,
  alignItems: 'center',
  borderWidth: 0,
  borderRadius: 50,
  marginBottom: 8,
  width: Dimensions.get('window').width-32
  },

  inputField:{position: 'absolute',
  top: 3,
  width: Dimensions.get('window').width-32,
  borderWidth: 0,
  borderColor: 'white',
  textAlign: 'center',
  fontFamily: 'Montserrat-Regular',
  fontSize: 22,
  height: 49,
  color: colors.teal
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