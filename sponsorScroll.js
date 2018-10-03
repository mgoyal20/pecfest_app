import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions
} from 'react-native';
import SponsorCard from './sponsorCard'
import './global'

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};

export default class Sponsors extends Component {

    state = {
        sponsors: null,
    }

    returnMembers = () => {
        var members = [];
        for (let i = 0; i < global.sponsors.length; i++) {
            var sponsorsOfType = [];
            if (typeof  (global.sponsors[i].sponsors.length) != 'undefined') {
                for (let j = 0; j < global.sponsors[i].sponsors.length; j++) {
                    sponsorsOfType.push(
                        <SponsorCard key={j} name={global.sponsors[i].sponsors[j].image}/>
                    )
                }
            }

            if (global.sponsors[i].sponsors.length <= 3 && global.sponsors[i].sponsors.length > 0) {
                if (global.sponsors[i].sponsors.length == 1) {
                    members.push(
                        <View key={i} style={{alignItems: 'center'}}>
                            <Text style={{
                                fontFamily: 'Montserrat-Medium',
                                color: colors.normal,
                                fontSize: 22,
                                marginTop: 24,
                                marginBottom: 24
                            }}>{global.sponsors[i].type}</Text>
                            <View style={{
                                backgroundColor: 'white',
                                width: (Dimensions.get('window').width - 8) / 2,
                                height: (Dimensions.get('window').width - 24) / 3 + 8,
                                flexDirection: 'row',
                                marginRight: 4,
                                marginLeft: 4
                            }}>
                                {sponsorsOfType}
                            </View>
                        </View>
                    )
                } else {
                    members.push(
                        <View key={i} style={{alignItems: 'center'}}>
                            <Text style={{
                                fontFamily: 'Montserrat-Medium',
                                color: colors.normal,
                                fontSize: 22,
                                marginTop: 24,
                                marginBottom: 24
                            }}>{global.sponsors[i].type}</Text>
                            <View style={{
                                backgroundColor: 'white',
                                width: (Dimensions.get('window').width - 8),
                                height: (Dimensions.get('window').width - 24) / 3 + 8,
                                flexDirection: 'row',
                                marginRight: 4,
                                marginLeft: 4
                            }}>
                                {sponsorsOfType}
                            </View>
                        </View>
                    )
                }
            } else {
                var y = global.sponsors[i].sponsors.length / 3;
                for (let k = 0; k < y; k++) {
                    members.push(
                        <View key={i} style={{alignItems: 'center'}}>
                            {(k == 0) ? <Text style={{
                                fontFamily: 'Montserrat-Medium',
                                color: colors.normal,
                                fontSize: 22,
                                marginTop: 24,
                                marginBottom: 24
                            }}>{global.sponsors[i].type}</Text> : <View/>}
                            <View style={{
                                backgroundColor: 'white',
                                width: (Dimensions.get('window').width - 8),
                                height: (Dimensions.get('window').width - 24) / 3 + 8,
                                flexDirection: 'row',
                                marginRight: 4,
                                marginLeft: 4
                            }}>
                                {sponsorsOfType[3 * k]}
                                {sponsorsOfType[3 * k + 1]}
                                {sponsorsOfType[3 * k + 2]}
                            </View>
                        </View>
                    )
                }
            }
        }
        return members;
    }

    render() {
        return (
            <View>
                {this.returnMembers()}
            </View>

        )
    }
}