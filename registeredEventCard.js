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
    Button
} from 'react-native';


import Events_home from './Events_home'
import NavBar from './navBar'
import EventDetails from './eventDetails'
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

const haddings = {
    tech: 'Technical Events',
    cult: 'Cultural Events',
    lect: 'Lectures',
    work: 'Workshops',
    shows: 'Shows'
};

var eventsList = {'IEEE': 2, 'CSS': 4};
export default class RegisteredEventCard extends Component {


    state = {
        back: 'false',
        home: 'none',
        isLoading: true,
        event: null,

    }

    handleClick = val => {
        //this.setState({ back: val })
        //Alert.alert(val)
        this.setState({home: val})
    }

    componentDidMount() {
        api.getEvent(this.props.eventId, {
            onSuccess: (value) => {
                this.setState({isLoading: false, event: value})

            },
            onFailed: (value) => {
                Alert.alert(JSON.stringify('Please check your network connection.'));
            }
        })
    }

    render() {

        if (this.state.isLoading) {
            return <View/>
        } else {
            return (

                <View>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                        <View style={{
                            width: Dimensions.get('window').width,
                            paddingTop: 16,
                            paddingBottom: 16,
                            justifyContent: 'center',
                            elevation: 0,
                            borderRadius: 4,
                            marginLeft: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            marginRight: 0,
                            paddingLeft: 16,
                            paddingRight: 16
                        }}>
                            <Text style={{
                                fontSize: 26,
                                fontFamily: 'Montserrat-Medium',
                                color: colors.normal
                            }}>{this.state.event.name}</Text>
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: colors.teal,
                                fontSize: 14
                            }}>Day {this.state.event.day} @ {this.state.event.time}</Text>
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: colors.teal,
                                fontSize: 14
                            }}>Venue: {this.state.event.location}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{backgroundColor: colors.separator, height: 1}}/>
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

    teamSize: {
        fontFamily: 'Montserrat-Regular',
        color: colors.normal,
        fontSize: 16,
        paddingTop: 0,
        //paddingBottom: 16,
    },
    time: {
        fontFamily: 'Montserrat-Regular',
        color: colors.teal,
        fontSize: 16,
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
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0,

    },

    eventCard: {
        backgroundColor: '#ffffff',
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 8,
        marginBottom: 16,
        marginTop: 16,
        marginLeft: 8,
        elevation: 4,
        borderRadius: 4,
        width: Dimensions.get('window').width - 40,
        height: 284,
        justifyContent: 'center'
    },
});