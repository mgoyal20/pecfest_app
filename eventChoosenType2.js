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
    BackHandler,
    ImageBackground
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
import CarouselTest from './carouselTest'
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
const organiser = {tech: ['CSS', 'IEEE'], cult: ['Natyamanch', 'PEB'], lect: [], work: [], shows: []};
var events = null;
var eventsList = {'IEEE': 20, 'CSS': 30, 'Natyamanch': 3, 'PEB': 4};

const haddings = {
    tech: 'Technical Events',
    cult: 'Cultural Events',
    lect: 'Lectures',
    work: 'Workshops',
    shows: 'Shows'
};
const parent_category = {tech: 'Technical', cult: 'Cultural', lect: 'Lectures', work: 'Workshops', shows: 'Shows'};

var eventToPass = 'hello'
var sub_categories = null;
var category_data = null;
const w = Dimensions.get('window').width;


export default class EventChoosenType2 extends Component {


    state = {
        back: 'false',
        carousel: 'false',
        loading: false,
        category: 'none',
        goToDetails: 'false',
        activities: null,
        cardsLoading: false,

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleClick.bind(this, 'true'));
    }

    handleClick = val => {
        this.setState({back: val})
        return true;
        //Alert.alert(val)
    }

    testCarousel = val => {
        //Alert.alert(val)
        this.setState({carousel: val})
    }

    openDetails = (val, event) => {
        this.setState({goToDetails: val, selectedEvent: event})
    }

    render() {

        if (!this.state.loading) {
            var organiserViews = [];
            //Alert.alert(JSON.stringify(global.activities.length));

            for (let i = 0; i < global.activities.length; i++) {
                if (global.activities[i].parent_category == parent_category[this.props.category]) {
                    sub_categories = global.activities[i].sub_categories;
                    category_data = global.activities[i];
                    //Alert.alert(JSON.stringify(sub_categories.length))
                    break;
                }
            }
            for (let i = 0; i < sub_categories.length; i++) {
                // var cards = [];
                // for(let j = 0; j<4; j++){
                //     cards.push(
                //     <View style={styles.eventCard} key={j}>
                //           <View>
                //             <Text style={styles.eventName}>Rangmanch </Text>
                //             <Text style={styles.eventDescription}>Fight your robots against each other.</Text>
                //             <Text style={styles.teamSize}>Team Size: 1-4.</Text>
                //             <Text style={styles.prizeMoney}>1st prize: Rs. 20,000</Text>
                //             <View style={{backgroundColor: colors.separator, height:1,}}/>
                //             <View style={{backgroundColor: '#ffffff', height: 40, alignItems: 'flex-end', marginTop: 16, marginBottom: 16, bottom: 0}}>
                //               <TouchableNativeFeedback onPress={this.openDetails.bind(this, 'true')} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                //                 <View style={styles.button}>
                //                   <Text style={{color: '#ffffff', fontFamily: 'Montserrat-Medium', fontSize: 18}}>Register</Text>
                //                 </View>
                //               </TouchableNativeFeedback>
                //             <Text style={{color: colors.teal, position: 'absolute', left:0, bottom: 0, fontFamily: 'Montserrat-Medium',fontSize: 18}}>Day 1: 4 PM</Text>
                //             </View>

                //             </View>
                //     </View>
                //   )
                // }
                organiserViews.push(
                    <View key={i} style={{flex: 1}}>
                        <View style={{backgroundColor: 'white', flex: 1}}>
                            <Text style={styles.organiserHadding2}>{sub_categories[i].name}</Text>
                        </View>
                        <View style={{
                            height: Dimensions.get('window').width / 0.7,
                            width: Dimensions.get('window').width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{height: w / 0.7, width: w, justifyContent: 'center', alignItems: 'center'}}>
                                <ImageBackground source={{uri: 'http://pecfest.in' + sub_categories[i].posterUrl}}
                                                 style={{
                                                     width: w - 32,
                                                     height: (w - 32) / 0.7,
                                                     backgroundColor: '#f0f0f0'
                                                 }}/>
                            </View>
                        </View>
                    </View>
                )
            }
        }

        if (this.state.back == 'true') {
            return (
                <Events_home/>
            )
        }

        if (this.state.goToDetails == 'true') {
            return (
                <EventDetails event={this.state.selectedEvent} backCategory={this.props.category}/>
            )
        }

        if (this.state.carousel == 'true') {
            return (
                <CarouselTest/>
            )
        }
        return (

            <View style={{backgroundColor: '#ffffff', flex: 1}}>
                <StatusBar backgroundColor={colors.StatusBarTeal} barStyle="light-content"/>
                <View style={styles.navBar}>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'true')}
                                             background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                        <View style={styles.navButton}>
                            <Image source={require('./icons/ic_arrow_back.png')}
                                   style={[styles.tabIcon, {tintColor: '#ffffff'}]}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{backgroundColor: colors.teal}}>
                    <Text style={styles.mainHadding}>{haddings[this.props.category]}</Text>
                </View>
                <View style={{
                    backgroundColor: colors.separator,
                    height: 1,
                    width: Dimensions.get('window').width - 16,
                    left: 8
                }}/>
                <MaterialIndicator color={colors.teal}/>
                {this.state.loading ? <View/> : <ScrollView style={styles.scrollContainer}>
                    <View style={styles.navBar}>
                        <TouchableNativeFeedback onPress={this.handleClick.bind(this, 'true')}
                                                 background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                            <View style={styles.navButton}>
                                <Image source={require('./icons/ic_arrow_back.png')}
                                       style={[styles.tabIcon, {tintColor: '#ffffff'}]}/>
                            </View>
                        </TouchableNativeFeedback>

                    </View>
                    <View style={{backgroundColor: colors.teal}}>
                        <Text style={styles.mainHadding}>{haddings[this.props.category]}</Text>
                    </View>
                    <Text style={styles.brief}>{category_data.description}  </Text>
                    <View style={{
                        backgroundColor: colors.separator,
                        height: 1,
                        width: Dimensions.get('window').width - 16,
                        left: 8
                    }}/>
                    <View style={{marginTop: 16}}>
                        {organiserViews}

                    </View>


                </ ScrollView>}
            </View>
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
        fontSize: 26,
        paddingLeft: 16,
        //paddingTop: 16,
        paddingBottom: 0,
    },

    organiserHadding2: {
        fontFamily: 'Montserrat-Regular',
        color: colors.normal,
        fontSize: 22,
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
        fontSize: 16,
        paddingLeft: 16,
        paddingRight: 36,
        paddingTop: 16,
        paddingBottom: 16,
        textAlign: 'justify'
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

    label: {
        color: '#a5a59a',
        //fontWeight: '500',
        fontFamily: 'Montserrat-Light',

    },
    categoryLabel: {
        color: '#008489',
        //fontWeight: '500',
        fontFamily: 'Montserrat-Light',
        fontSize: 22,

    },


    category: {
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10,
        flex: 1,

    }
});