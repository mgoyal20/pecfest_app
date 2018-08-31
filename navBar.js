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


const colors = {selected: '#ff5a5f', normal: '#a5a59a', teal: '#008489'};


export default class NavBar extends Component {


    render() {

        return (
            <View style={styles.navBar}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.teal, true)}>
                    <View style={styles.navButton}/>
                </TouchableNativeFeedback>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },


    navButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#ffffff',
        width: 56,
        height: 56,
    },

    navBar: {
        position: 'absolute',
        top: 0,
        height: 56,
        right: 0,
        left: 0,
        backgroundColor: '#ac120c',
        flexDirection: 'row'
    },

    scrollContainer: {
        position: 'absolute',
        top: 56,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#ffffff'
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


    category: {
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10,
        flex: 1,

    }
});