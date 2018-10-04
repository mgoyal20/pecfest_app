import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableNativeFeedback,
} from 'react-native';

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};

export default class EventCard extends Component {
    state = {
        back: 'false',
        home: 'none',
    }

    render() {
        return (
            <View style={styles.eventCard}>
                <View>
                    <Text style={styles.eventName}>{this.props.event.name}</Text>
                    <Text
                        style={styles.eventDescription}>{this.props.event.shortDescription.substr(0, 250)}{this.props.event.shortDescription.length > 250 ? "..." : ""}</Text>
                    <Text style={styles.teamSize}>Team
                        Size: {this.props.event.minSize}-{this.props.event.maxSize}.</Text>
                    <Text style={styles.time}>Day {this.props.event.day}: {this.props.event.time}</Text>
                    <View style={{backgroundColor: colors.separator, height: 1,}}/>
                    <View style={{
                        backgroundColor: '#ffffff',
                        height: 40,
                        alignItems: 'flex-end',
                        marginTop: 16,
                        marginBottom: 16,
                        bottom: 0
                    }}>
                        <TouchableNativeFeedback onPress={() => this.props.onRegister(this.props.event)}
                                                 background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                            <View style={styles.button}>
                                <Text style={{
                                    color: '#ffffff',
                                    fontFamily: 'Montserrat-Medium',
                                    fontSize: 18
                                }}>Register</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>
            </View>
        )
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
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 16,
    },
    eventName: {
        fontFamily: 'Montserrat-Medium',
        color: colors.normal,
        fontSize: 24,
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
        elevation: 0,
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