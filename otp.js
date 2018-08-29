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
  Picker,
  CheckBox,
  BackHandler,
  Linking
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Login from './login'
import Profile from './Profile'
import user from './user'
import Register from './register'
const styles = require('./Styles');
export default class VerifyOtp extends Component {
    constructor(props){
       super(props);
       this.state = {
            status: '',
            otp: '',
            value: "Home",
            done: false,
            forgotBack: false,
            disabled: false,
            checking: false,
        };
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    componentDidMount(){
       BackHandler.addEventListener('hardwareBackPress', this.goBack.bind(this, 'Register'));
    }

    goBack = screen => {
       this.setState({ value: screen })
       return true;
    }

    changeScreen = screen => {
       this.setState({ value: screen })
    }

    handleFailed = (err) => {
       console.log(err);

       this.setState({
           checking: false,
           error: true,
           message: err.message,
       })
    };

    handleNext = () => {
       user.verifyOtp(this.state.otp, this.props.mobile, { onSuccess: (id) => {
               this.props.done(id)
               setTimeout(this.props.onSuccess, 1000);
           },
           onFailed: this.handleFailed });
       this.setState({ checking: true });
    };

    handleChange = ({ target }) => {
       this.setState({ otp: target.value, error: false });
    };

    render(){
       if(this.state.value == 'Home'){
           return (
           <ScrollView style= {{flex: 1, backgroundColor: '#ffffff'}} contentContainerStyle={{alignItems: 'center'}}>
               <View style = {{height : 20}}>
                   <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
               </View>
               <View style={{backgroundColor: 'white', height: 56, width: Dimensions.get('window').width}}>
                   <TouchableNativeFeedback onPress={this.changeScreen.bind(this, 'Register')} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                   <View style={styles.navButton}>
                   <Image source = {require('./icons/ic_arrow_back.png')}  style={[styles.tabIcon, {tintColor: colors.normal}]}/>
                   </View>
                   </TouchableNativeFeedback>
               </View>
               <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 22}}>Verify OTP</Text>
               <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 16, marginTop: 10, marginBottom: 16}}>OTP sent on your registered mobile number.</Text>
               <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                   <View style={styles.inputFieldView}>
                   <TextInput onChangeText = {(otp) => this.setState({otp})} keyboardType="numeric" style={styles.inputField} placeholder={'Enter OTP'}
                    underlineColorAndroid={'white'} autoCapitalize={'none'} blurOnSubmit={false} selectionColor={colors.teal}
                    blurOnSubmit={ true } returnKeyType={ "done" }
                    ref={ input => { this.inputs['otp'] = input;}}/>
                   </View>
               </View>
               <TouchableOpacity  onPress={this.handleNext} background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                   <View style={{marginLeft: 16, marginRight: 16, height: 50, borderColor: colors.teal, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 50, marginBottom: 8, width: Dimensions.get('window').width-32}}>
                       <Text style = {{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Submit OTP</Text>
                   </View>
               </TouchableOpacity>
               { this.state.loggingIn ? <ActivityIndicator animating={true} style={{marginTop: 12}} size={'small'} color={colors.teal} /> : <View /> }

             </ScrollView>
       )
       }
       if(this.state.value == 'login'){
           return(
           <Login from = {"profile"} />
           )
           }

       if(this.state.value == 'profile'){
           return(
           <Profile />
           )
       }

       if(this.state.value == 'Register'){
            return(
            <Register from = {"profile"}/>
            )
       }
    }

}
