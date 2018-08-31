import React, {Component, PropTypes} from 'react';
import {
    Platform,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    StatusBar,
    Alert,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
    AsyncStorage,
    BackHandler

} from 'react-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation'
import Page from './Page'

const colors = {selected: '#ff5a5f', normal: '#484848'};
const homeIcon = './icons/ic_home_36pt.png';
import Events from './Events.js'

var loggedIn = 'false';
var pecfestID = 'null';
var user = {};

export default class App extends React.Component<{}> {
    state = {
        message: "Home",
        loading: true,
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Montserrat-Regular': require("./assets/fonts/Montserrat-Regular.ttf"),
            'Montserrat-Medium': require("./assets/fonts/Montserrat-Medium.ttf"),
            'Montserrat-Light': require("./assets/fonts/Montserrat-Light.ttf"),
        });
        this.setState({loading: false});
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp);
        AsyncStorage.getItem('loggedIn').then((value) => {
            if (value === 'true') {
                AsyncStorage.getItem('user').then((value) => {
                    global.user = JSON.parse(value);
                    global.loggedIn = true;
                });
            }
        });
    }

    handleClick = message => {
        if (message === 'Profile') {
            if (global.loggedIn === true) {
                this.setState({message: 'userDetails'})
            } else {
                this.setState({message: message});
            }


        } else {
            this.setState({message: message})
        }
    };


    render() {
        if (this.state.loading) {
            return <Expo.AppLoading/>;
        }
        return (
            <View style={styles.container}>
                <View style={{height: 20}}>
                    <StatusBar backgroundColor={colors.statusBarLight} barStyle="dark-content"/>
                </View>
                <View style={styles.pageContainer}>
                    <Page message={this.state.message}/>
                </View>
                <View style={styles.bottomNav} elevation={10}>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, "Home")}
                                             background={TouchableNativeFeedback.Ripple(colors.selected, true)}>
                        <View style={styles.tabIconContainer}>
                            <Image source={require('./icons/ic_whatshot.png')}
                                   style={[styles.tabIcon, {tintColor: (this.state.message === 'Home') ? colors.selected : colors.normal}]}/>

                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, "Events")}
                                             background={TouchableNativeFeedback.Ripple(colors.selected, true)}>
                        <View style={styles.tabIconContainer}>
                            <Image source={require('./icons/ic_event.png')}
                                   style={[styles.tabIcon, {tintColor: (this.state.message === 'Events') ? colors.selected : colors.normal}]}/>

                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, "Team")}
                                             background={TouchableNativeFeedback.Ripple(colors.selected, true)}>
                        <View style={styles.tabIconContainer}>
                            <Image source={require('./icons/logopf.png')}
                                   style={[styles.tabIconMiddle, {tintColor: (this.state.message === 'Team') ? colors.selected : colors.normal}]}/>

                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, "Profile")}
                                             background={TouchableNativeFeedback.Ripple(colors.selected, true)}>
                        <View style={styles.tabIconContainer}>
                            <Image source={require('./icons/ic_person.png')}
                                   style={[styles.tabIcon, {tintColor: (this.state.message === 'Profile' || this.state.message === 'userDetails') ? colors.selected : colors.normal}]}/>

                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.handleClick.bind(this, "Developers")}
                                             background={TouchableNativeFeedback.Ripple(colors.selected, true)}>
                        <View style={styles.tabIconContainer}>
                            <Image source={require('./icons/code.png')}
                                   style={[styles.tabIcon, {tintColor: (this.state.message === 'Developers') ? colors.selected : colors.normal}]}/>

                        </View>
                    </TouchableNativeFeedback>

                </ View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },

    bottomNav: {
        position: 'absolute',
        height: 56,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'space-between',


    },

    tabIcon: {

        height: 24,
        width: 24,
    },

    tabIconMiddle: {

        height: 24,
        width: 24,
    },


    scrollContainer: {
        position: 'absolute',
        bottom: 56,
        top: 0,
        //height: Dimensions.get('window').height - 56-8,
    },
    contentContainer: {
        paddingVertical: 20,
    },

    tabIconContainer: {
        flex: 1,
        marginHorizontal: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    pageContainer: {
        position: 'absolute',
        bottom: 56,
        top: 0,
        left: 0,
        right: 0,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
