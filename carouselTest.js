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
    StatusBar
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
    TouchableWithoutFeedback
} from 'react-native-indicators';

import Events_home from './Events_home'
import NavBar from './navBar'
import EventCard from './eventCard'
import EventDetails from './eventDetails'
//import Carousel from 'react-native-looped-carousel';

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};
const h = Dimensions.get('window').height;
const organiser = {tech: ['CSS', 'IEEE'], cult: ['Natyamanch', 'PEB'], lect: [], work: [], shows: []};
var events = {}
var eventsList = {'IEEE': 2, 'CSS': 3, 'Natyamanch': 3, 'PEB': 4};

const haddings = {
    tech: 'Technical Events',
    cult: 'Cultural Events',
    lect: 'Lectures',
    work: 'Workshops',
    shows: 'Shows'
};


export default class CarouselTest extends Component {

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={{height: 500, width: Dimensions.get('window').width, backgroundColor: colors.normal}}/>
                <ScrollView style={styles.scrollContainer} horizontal={true}
                            contentConntainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'white'}}/>
                    <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'black'}}/>
                    <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'red'}}/>
                </ScrollView>

            </ScrollView>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },

    eventCard: {
        backgroundColor: '#ffffff',
        elevation: 0,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 8,
        marginBottom: 16,
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

    eventDescription: {
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

    brief: {
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
        left: 0,
        top: 0,
        backgroundColor: colors.teal,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },

    navButton2: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: colors.teal,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navBar: {
        height: 56,
        backgroundColor: colors.teal,
        flexDirection: 'row'
    },

    scrollContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        //bottom:0,
        backgroundColor: colors.teal,
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

    tabIcon: {

        height: 24,
        width: 24,
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
        flex: 1,

    }
});