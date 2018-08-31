import React, {Component} from 'react';
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
    ActivityIndicator,
    BackHandler
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
    TouchableWithoutFeedback,


} from 'react-native-indicators';

import EvenChoosenType from './eventChoosenType';
import EvenChoosenType2 from './eventChoosenType2';
import Events from './Events';
import {Actions} from 'react-native-router-flux'
import Home from './Home'
import {api} from './eventdb'
import RegisteredEventTab from './registeredEventsTab'
import Login from './login'
import App from './App.js'

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Workshops', 'Shows']
const colors = {selected: '#ff5a5f', normal: '#a5a59a', teal: '#008489', white: '#ffffff', statusBarLight: '#f0f0f0'};
const h = Dimensions.get('window').height;

export default class Events_Home extends Component {
    state = {
        message: "Home",
        loading: true,

    }

    handleClick = message => {
        this.setState({message: message})

        //Alert.alert(message)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {

            BackHandler.exitApp();

            return true;

        });
        if (global.activities == null) {
            api.getActivities({
                onSuccess: (value) => {
                    //Alert.alert(JSON.stringify(value.length));
                    this.setState({loading: false, activities: value})
                    global.activities = value;
                },
                onFailed: (error) => {
                    Alert.alert('Check your network connection');
                }
            })
        } else {
            this.setState({loading: false})
        }
        //setTimeout(() => this.setState({ loading: false }), 100);
    }


    render() {

        if (this.state.message == 'Home' || this.props.message == 'Home')
            if (this.state.loading) {
                return (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
                        <ActivityIndicator size={'large'} color={colors.teal}/>
                    </View>
                )

            } else {
                return (

                    <View style={styles.container}>
                        <View style={{height: 20}}>
                            <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
                        </View>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'tech')}
                                                 background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                            <View style={styles.category}><Text
                                style={styles.categoryLabel}>{categoryNames[0]}</Text></View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'cult')}
                                                 background={TouchableNativeFeedback.Ripple(colors.white, false)}>
                            <View style={styles.categoryTeal}><Text
                                style={styles.categoryLabelWhite}>{categoryNames[1]}</Text></View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'lect')}
                                                 background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                            <View style={styles.category}><Text
                                style={styles.categoryLabel}>{categoryNames[2]}</Text></View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'shows')}
                                                 background={TouchableNativeFeedback.Ripple(colors.white, false)}>
                            <View style={styles.categoryTeal}><Text
                                style={styles.categoryLabelWhite}>{categoryNames[4]}</Text></View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'reg')}
                                                 background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                            <View style={styles.category}><Text style={styles.categoryLabel}>Registered</Text></View>
                        </TouchableNativeFeedback>
                    </View>
                )
            }
        else {
            if (this.state.message != "lect" && this.state.message != "work" && this.state.message != "shows" && this.state.message != "reg") {
                return (
                    <EvenChoosenType category={this.state.message}/>
                )
            } else {
                if (this.state.message == "reg") {
                    if (global.loggedIn)
                        return (
                            <RegisteredEventTab/>
                        )
                    else {
                        Alert.alert('Please login first')
                        return (<Login from={'events'}/>)
                    }
                } else {
                    return (
                        <EvenChoosenType2 category={this.state.message}/>
                    )
                }
            }
        }

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
        width: Dimensions.get('window').width / 2,
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

    categoryLabelWhite: {
        color: '#ffffff',
        //fontWeight: '500',
        fontFamily: 'Montserrat-Light',
        fontSize: 26,

    },


    category: {
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10,
        flex: 1,

    },

    categoryTeal: {
        backgroundColor: "#008489",
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10,
        flex: 1,

    }
});