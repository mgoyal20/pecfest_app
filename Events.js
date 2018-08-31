import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    TouchableNativeFeedback,
    Image,
    ScrollView
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import Events_home from './Events_home'
import eventChoosenType from './eventChoosenType'
import {Router, Scene, Stack} from 'react-native-router-flux'

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = {selected: '#ff5a5f', normal: '#a5a59a', teal: '#008489'};
const h = Dimensions.get('window').height;

export default class Events extends Component {

    handleClick = message => {
        this.setState({message: message})

        Alert.alert(message)
    }
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {

        return (
            <Events_home/>
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
        flex: 1,

    }
});

