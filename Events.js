import React, {Component} from 'react';
import {
    Alert
} from 'react-native';

import Events_home from './Events_home'

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

