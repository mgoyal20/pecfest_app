import React, {Component} from 'react';
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
    ImageBackground,
    TouchableHighlight,
    Linking
} from 'react-native';

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};

import TeamMembers from './teamScroll'
import Sponsors from './sponsorScroll'

export default class Team extends Component {

    state = {
        tab: 0,
        loadingTeam: false
    }

    changeTab = val => {
        this.setState({tab: val})
        //Alert.alert(val)
    }


    render() {
        return (
            <ScrollView style={styles.scrollContainer} contentContainerStyle={{alignItems: 'center'}}>
                <StatusBar backgroundColor={'rgba(0,0,0,0.8)'} barStyle="light-content"/>
                <View style={{backgroundColor: '#ffffff', alignItems: 'center'}}>
                    <ImageBackground source={{uri: 'http://pecfest.in/Images/background.jpg'}}
                                     style={{alignItems: 'center'}}>
                        <Image source={require('./icons/logopf.png')}
                               style={[styles.logo, {tintColor: 'white', marginTop: 56}]}/>
                        <Text style={styles.logoText}>#Pecfest2018</Text>
                        <Text style={{
                            marginRight: 8,
                            marginLeft: 8,
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Medium',
                            fontSize: 16,
                            color: 'white',
                            marginBottom: 0
                        }}>26th October to 28th October</Text>
                        <Text style={{
                            marginRight: 8,
                            marginLeft: 8,
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Medium',
                            fontSize: 16,
                            color: 'white',
                            marginBottom: 8
                        }}>Make your friends jealous by tweeting, posting, or whatever it is you do with the hashtag
                            #Pecfest2018 #CityOfStars.</Text>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'transparent',
                            height: 24,
                            width: Dimensions.get('window').width,
                            marginBottom: 16,
                            justifyContent: 'center'
                        }}>
                            <TouchableHighlight onPress={() => {
                                Linking.openURL('https://www.facebook.com/pecfestofficial')
                            }}>
                                <Image source={require('./icons/facebook-logo.png')} style={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    width: 24,
                                    height: 24,
                                    tintColor: 'white'
                                }}/>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                Linking.openURL('https://www.youtube.com/channel/UCLaByTlNKxBJDkNqbjtUmdw')
                            }}>
                                <Image source={require('./icons/youtube-logo.png')} style={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    width: 24,
                                    height: 24,
                                    tintColor: 'white'
                                }}/>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                Linking.openURL('https://www.instagram.com/pec.pecfest/')
                            }}>
                                <Image source={require('./icons/instagram-logo.png')} style={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    width: 24,
                                    height: 24,
                                    tintColor: 'white'
                                }}/>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                Linking.openURL('https://goo.gl/maps/1n5dYQuLVrq')
                            }}>
                                <Image source={require('./icons/google-maps.png')} style={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    width: 24,
                                    height: 24,
                                    tintColor: 'white'
                                }}/>
                            </TouchableHighlight>
                        </View>
                    </ImageBackground>
                    {!this.state.tab ? (
                        <View style={{alignItems: 'center'}}>
                            <View style={{
                                marginTop: 0,
                                height: 56,
                                backgroundColor: '#ffffff',
                                width: Dimensions.get('window').width,
                                flexDirection: 'row'
                            }}>
                                <TouchableNativeFeedback onPress={this.changeTab.bind(this, 0)}
                                                         background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Regular',
                                            fontSize: 20,
                                            color: colors.teal
                                        }}>Team</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={this.changeTab.bind(this, 1)}
                                                         background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Regular',
                                            fontSize: 20,
                                            color: '#bbbbbb'
                                        }}>Sponsors</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{
                                backgroundColor: '#eeeeee',
                                height: 3,
                                width: Dimensions.get('window').width,
                                flexDirection: 'row'
                            }}>
                                <View style={{backgroundColor: colors.teal, flex: 1}}/>
                                <View style={{backgroundColor: '#cccccc', flex: 1}}/>
                            </View>
                            <Text style={styles.sponsorText}>Our Team</Text>
                            <Text style={{
                                marginRight: 8,
                                marginLeft: 8,
                                marginBottom: 16,
                                textAlign: 'center',
                                fontFamily: 'Montserrat-Regular',
                                fontSize: 16,
                                color: colors.normal
                            }}>These are the people behind all the fun you have at the #Pecfest. They work day and night
                                to make this possible.</Text>
                            <View style={{
                                height: 1,
                                backgroundColor: '#cccccc',
                                width: (3 * Dimensions.get('window').width) / 4,
                                marginLeft: 32,
                                marginRight: 32
                            }}/>
                            <TeamMembers/>
                        </View>
                    ) : (
                        <View>
                            <View style={{
                                marginTop: 0,
                                height: 56,
                                backgroundColor: '#ffffff',
                                width: Dimensions.get('window').width,
                                flexDirection: 'row'
                            }}>
                                <TouchableNativeFeedback onPress={this.changeTab.bind(this, 0)}
                                                         background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Regular',
                                            fontSize: 20,
                                            color: '#bbbbbb'
                                        }}>Team</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={this.changeTab.bind(this, 1)}
                                                         background={TouchableNativeFeedback.Ripple(colors.teal, false)}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Regular',
                                            fontSize: 20,
                                            color: colors.teal
                                        }}>Sponsors</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{
                                backgroundColor: '#eeeeee',
                                height: 3,
                                width: Dimensions.get('window').width,
                                flexDirection: 'row'
                            }}>
                                <View style={{backgroundColor: '#cccccc', flex: 1}}/>
                                <View style={{backgroundColor: colors.teal, flex: 1}}/>
                            </View>
                            <View style={{width: Dimensions.get('window').width, alignItems: 'center'}}>
                                <Text style={styles.sponsorText}>Our Sponsors</Text>
                                <Text style={{
                                    marginBottom: 16,
                                    marginRight: 8,
                                    marginLeft: 8,
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: 16,
                                    color: colors.normal
                                }}>We love the sponsors for this Pecfest. They make all of this fun stuff possible, and
                                    we couldn't have done it without them.</Text>
                                <View style={{
                                    height: 1,
                                    backgroundColor: '#cccccc',
                                    width: (3 * Dimensions.get('window').width) / 4,
                                    marginLeft: 32,
                                    marginRight: 32
                                }}/>
                                <Sponsors/>
                            </View>
                        </View>

                    )}
                </View>
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
        marginTop: 16,
        marginLeft: 8,
        elevation: 2,
        borderRadius: 4,
        width: Dimensions.get('window').width - 16,
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

    teamSize: {
        fontFamily: 'Montserrat-Regular',
        color: colors.normal,
        fontSize: 18,
        paddingTop: 0,
        //paddingBottom: 16,
    },

    logoText: {
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: 36,
        paddingTop: 0,
        //paddingBottom: 16,
    },

    sponsorText: {
        fontFamily: 'Montserrat-Medium',
        color: colors.normal,
        fontSize: 30,
        marginTop: 32,
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
        fontSize: 32,
        paddingTop: 0,
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
        bottom: 0,
        backgroundColor: '#ffffff',
        paddingBottom: 16
    },

    scrollContainer2: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
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
        flex: 1,

    }
});