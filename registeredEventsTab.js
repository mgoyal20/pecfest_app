import React, {Component} from 'react';
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
    Button,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

import Events_Home from './Events_home'
import RegisteredEventCard from './registeredEventCard'
import {api} from './eventdb'

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};
const h = Dimensions.get('window').height;
var sizeTeam = null;
var bool = false;
export default class RegisteredEventTab extends Component {


    handleClick = () => {
        this.setState({back: true})
        //Alert.alert(val)
    }


    state = {
        back: false,
        isLoading: true,
        events: null,
    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', () => {


            this.setState({back: true})
            return true;
        });

        api.getRegisteredEvents(global.user.pecfestId, {
            onSuccess: (value) => {
                this.setState({isLoading: false, events: value.result})

            },
            onFailed: (value) => {
                Alert.alert(JSON.stringify('Please check your network connection.'));
            }
        })

    }


    returnCards = () => {
        var cards = [];
        for (let i = 0; i < this.state.events.length; i++) {
            cards.push(
                <RegisteredEventCard key={i} eventId={this.state.events[i].eventId}
                                     eventName={this.state.events[i].eventName}/>
            )
        }

        return cards;
    }

    render() {

        if (!this.state.back) {
            if (this.state.isLoading) {
                return (
                    <ScrollView style={{backgroundColor: 'white'}}>
                        <StatusBar backgroundColor={colors.StatusBarTeal} barStyle="light-content"/>
                        <View style={styles.navBar}>
                            <TouchableNativeFeedback onPress={this.handleClick}
                                                     background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                                <View style={styles.navButton}>
                                    <Image source={require('./icons/ic_arrow_back.png')}
                                           style={[styles.tabIcon, {tintColor: '#ffffff'}]}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{backgroundColor: colors.teal}}>
                            <Text style={styles.mainHadding}>Registered Events</Text>
                        </View>
                        <View style={{marginTop: 32}}>
                            <ActivityIndicator size={'large'}/>
                        </View>

                    </ScrollView>


                )
            } else {
                return (
                    <ScrollView style={{backgroundColor: 'white'}}>
                        <StatusBar backgroundColor={colors.StatusBarTeal} barStyle="light-content"/>
                        <View style={styles.navBar}>
                            <TouchableNativeFeedback onPress={this.handleClick}
                                                     background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                                <View style={styles.navButton}>
                                    <Image source={require('./icons/ic_arrow_back.png')}
                                           style={[styles.tabIcon, {tintColor: '#ffffff'}]}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{backgroundColor: colors.teal}}>
                            <Text style={styles.mainHadding}>Registered Events</Text>
                        </View>
                        {this.returnCards()}

                    </ScrollView>


                )
            }
        } else {
            return (<Events_Home/>)
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
    mainHadding: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        fontSize: 36,
        paddingLeft: 16,
        paddingTop: 0,
        paddingBottom: 16,
    },

    tab: {
        width: Dimensions.get('window').width / 3,
    },

    brief: {
        fontFamily: 'Montserrat-Light',
        color: '#484848',
        fontSize: 14,
        paddingLeft: 16,
        paddingRight: 36,
        paddingTop: 16,
        paddingBottom: 0
    },

    rules: {
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
        bottom: 0,
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

    teamSize: {
        fontFamily: 'Montserrat-Regular',
        color: colors.normal,
        fontSize: 18,
        paddingTop: 0,
        //paddingBottom: 16,
    },

    navButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: colors.teal,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
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

    prizeMoney: {
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

    eventDescription: {
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

    navBar: {
        height: 56,
        backgroundColor: colors.teal
    },

    eventCard: {
        backgroundColor: '#ffffff',
        elevation: 0,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 8,
        marginBottom: 16,
    },
});
