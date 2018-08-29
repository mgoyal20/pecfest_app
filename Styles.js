'use strict';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

var React = require('react-native');
const colors = { selected: '#ff5a5f', normal: '#484848' , teal: '#008489', StatusBarTeal: '#066f73', separator: '#ebebeb',statusBarLight: '#f0f0f0'};


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
        elevation: 0,
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

module.exports = styles;