import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
    ImageBackground
} from 'react-native';

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};

export default class SponsorCard extends Component {

    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.teal, false)}
                                     useForeground={true}>
                <ImageBackground source={{uri: 'http://assets.pecfest.in/images/' + this.props.name}}
                                 resizeMode={'contain'} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    marginLeft: 8,
                    marginRight: 8,
                    backgroundColor: 'white',
                    borderRadius: 0,
                    marginTop: 4
                }}>
                </ImageBackground>
            </TouchableNativeFeedback>
        )
    }
}
