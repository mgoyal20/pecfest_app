import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator,
    BackHandler,
    Linking
} from 'react-native';

import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

import Profile from './Profile'
import Register from './register'
import UserDetails from './userDetails'
import './global'
import user from './user'
import RegisteredEventTab from './registeredEventsTab'
import Events_Home from './Events_home'

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb',
    statusBarLight: '#f0f0f0'
};
const styles = require('./Styles');
var md5 = require('md5');
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }


    state = {
        pecfestID: null,
        password: null,
        value: "Home",
        user: null,
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack.bind(this, this.props.from));
    }

    goBack = screen => {
        this.setState({value: screen});
        return true;
        //Alert.alert(message)
    };

    changeScreen = screen => {
        this.setState({value: screen})

        // Alert.alert(loggedIn)
    };


    logIn = () => {
        //Alert.alert(md5(this.state.password));
        if (this.state.pecfestID != null) {
            user.login(this.state.pecfestID, md5(this.state.password), {
                onSuccess: (user) => {
                    global.loggedIn = true;
                    global.user = user;
                    AsyncStorage.setItem('loggedIn', 'true', () => {
                        AsyncStorage.setItem('user', JSON.stringify(user));
                        if (this.props.from === 'profile') {
                            this.setState({value: 'userDetails', user: user})
                        } else {
                            this.setState({value: 'registerTab', user: user})
                        }
                    });


                },
                onFailed: (error) => {
                    if (error.message)
                        Alert.alert(error.message);
                    else if (error.ACK)
                        Alert.alert("Wrong PECFEST ID.");
                    else
                        Alert.alert("Check your internet connection.");

                    this.setState({loggingIn: false})
                }

            });

            this.setState({loggingIn: true})
        } else {
            Alert.alert("No Pecfest ID entered.")
        }
    };

    render() {
        switch (this.state.value) {
            case 'Home':
                return (
                    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}
                                contentContainerStyle={{alignItems: 'center'}}>
                        <View style={{height: 20}}>
                            <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
                        </View>
                        <View style={{backgroundColor: 'white', height: 56, width: Dimensions.get('window').width}}>
                            <TouchableNativeFeedback onPress={this.goBack.bind(this, this.props.from)}
                                                     background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                                <View style={styles.navButton}>
                                    <Image source={require('./icons/ic_arrow_back.png')}
                                           style={[styles.tabIcon, {tintColor: colors.normal}]}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{
                            marginTop: Dimensions.get('window').width / 3 - 56,
                            backgroundColor: colors.teal,
                            marginBottom: 32,
                            width: Dimensions.get('window').width / 3,
                            height: Dimensions.get('window').width / 3,
                            borderRadius: Dimensions.get('window').width / 3,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('./icons/logopf.png')} style={{
                                tintColor: '#ffffff',
                                height: Dimensions.get('window').width / 3 - 64,
                                width: Dimensions.get('window').width / 3 - 64
                            }}/>
                        </View>
                        <View
                            style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.inputFieldView}>
                                <TextInput onChangeText={(pecfestID) => this.setState({pecfestID})}
                                           style={styles.inputField} placeholder={'Enter Your Pecfest ID'}
                                           underlineColorAndroid={'white'} autoCapitalize={'characters'}
                                           blurOnSubmit={false} selectionColor={colors.teal}
                                           onSubmitEditing={() => {
                                               this.focusNextField('password');
                                           }} returnKeyType={"next"}
                                           ref={input => {
                                               this.inputs['username'] = input;
                                           }}/>
                            </View>
                            <View style={styles.inputFieldView}>
                                <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}
                                           style={styles.inputField} placeholder={'Enter Your Password'}
                                           underlineColorAndroid={'white'} autoCapitalize={'none'}
                                           selectionColor={colors.teal}
                                           blurOnSubmit={true}
                                           returnKeyType={"done"}
                                           ref={input => {
                                               this.inputs['password'] = input;
                                           }}/>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.logIn}
                                          background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                            <View style={{
                                marginLeft: 16,
                                marginRight: 16,
                                height: 50,
                                borderColor: colors.teal,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderRadius: 50,
                                marginBottom: 8,
                                width: Dimensions.get('window').width - 32
                            }}>
                                <Text style={{
                                    color: colors.teal,
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: 22
                                }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableHighlight>
                            <Text style={{fontFamily: 'Montserrat-Light', color: colors.teal, textAlign: 'center'}}
                                  onPress={this.changeScreen.bind(this, 'Register')}>Don't have a Pecfest ID?{'\n'}Sign
                                Up</Text>
                        </TouchableHighlight>

                        {this.state.loggingIn ?
                            <ActivityIndicator animating={true} style={{marginTop: 12}} size={'small'}
                                               color={colors.teal}/> : <View/>}

                    </ScrollView>
                );

            case 'profile':
                return (
                    <Profile/>
                );

            case 'register':
                return (
                    <Register from='login'/>
                );

            case 'Register' :
                return (
                    <Register from={"login"}/>
                );

            case 'userDetails':
                return (
                    <UserDetails pecfestID={this.state.user.pecfestId} user={this.state.user}/>
                );
            case 'registerTab':
                return (
                    <RegisteredEventTab pecfestID={this.state.user.pecfestId} user={this.state.user}/>
                );
            case 'events':
                return (
                    <Events_Home/>
                );
            default:
                return (
                    <Profile/>
                );
        }
    }
}
