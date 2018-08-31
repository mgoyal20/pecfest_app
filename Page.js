import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    TouchableNativeFeedback,
    AsyncStorage
} from 'react-native';

import Home from './Home.js'
import Team from './Team.js'
import Profile from './Profile.js'
import Events from './Events.js'
import UserDetails from './userDetails.js'
import Developers from './developers'

var pecfestID = 'null'
export default class Page extends Component {

    componentDidMount() {
        AsyncStorage.getItem('pecfestID').then((value) => {
            pecfestID = value;
        });
    }

    componentDidUpdate() {
        AsyncStorage.getItem('pecfestID').then((value) => {
            pecfestID = value;
        });
    }

    render() {

        switch (this.props.message) {
            case 'Home':
                return (
                    <Home/>

                )

            case 'Events':
                return (

                    <Events message={'Home'}/>
                )
            case 'Team':
                return (

                    <Team/>
                )
            case 'Profile':
                return (

                    <Profile/>
                )

            case 'userDetails':
                return (
                    <UserDetails/>
                )
            case 'Developers':
                return (
                    <Developers/>
                )
            default:
                return (

                    <View style={{
                        flex: 1,
                        backgroundColor: '#a51c30',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text>Nothing</Text>
                        <Text>Hello jhdjahjdhajdhajhdjahdjahdjahjdhajdh</Text>
                    </View>
                )

        }

    }
}
