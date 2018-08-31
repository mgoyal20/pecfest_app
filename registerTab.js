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
    Picker,
    TextInput,
    BackHandler,
    Button
} from 'react-native';
import user from './user';

const categoryNames = ['Technical', 'Cultural', 'Lectures', 'Shows', 'Workshops']
const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb',
    dull: '#ebebeb'
};
const h = Dimensions.get('window').height;
var sizeTeam = null;

export default class RegisterTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInputs: true,
            teamSize: props.event.minSize,
            inputs: {0: global.user.pecfestId},
            leaderId: global.user.pecfestId
        }
    }

    setInputs = (event) => {
        this.setState({showInputs: true});

    }

    handleChange = (i, value) => {
        const inputs = {...this.state.inputs};
        inputs[i] = value;
        this.setState({inputs})
    }

    handleSubmit = () => {
        const inputs = [];
        let invalid = false;

        for (const input in this.state.inputs) {
            if (this.state.inputs[input].length < 1) {
                invalid = true;
                break;
            }
            inputs.push(this.state.inputs[input])
        }

        if (invalid || inputs.length < this.state.teamSize) {
            this.setState({statusMessage: 'Please fill all the fields.'});
            return;
        }

        user.registerEvent(this.props.event, inputs, this.state.leaderId, {
            onSuccess: (res) => {
                this.setState({statusMessage: `Successfully registered for the event (${this.props.event.name}).`})
            },
            onFailed: (res) => {
                this.setState({statusMessage: res.message || 'Failed.'})
            }
        })

        this.setState({statusMessage: 'Registering...'})
    }

    returnInputs = () => {
        var inputs = [];
        for (let j = 0; j < this.state.teamSize; j++) {
            if (j == 0) {
                inputs.push(
                    <TextInput key={j}
                               autoGrow={false}
                               style={{
                                   width: 160,
                                   borderWidth: 0,
                                   borderColor: 'white',
                                   textAlign: 'center',
                                   fontFamily: 'Montserrat-Regular',
                                   fontSize: 22,
                                   height: 48,
                                   color: colors.teal
                               }}
                               placeholder={'PECFEST ID ' + (j + 1)}
                               keyboardType={'default'}
                               underlineColorAndroid={'white'}
                               autoCapitalize={'characters'}
                               blurOnSubmit={false}
                               selectionColor={colors.teal}
                               value={global.user.pecfestId}
                               editabe={false}/>
                )
            } else {
                inputs.push(
                    <TextInput key={j}
                               autoGrow={false}
                               style={{
                                   width: 160,
                                   borderWidth: 0,
                                   borderColor: 'white',
                                   textAlign: 'center',
                                   fontFamily: 'Montserrat-Regular',
                                   fontSize: 22,
                                   height: 48,
                                   color: colors.teal
                               }}
                               placeholder={'PECFEST ID ' + (j + 1)}
                               keyboardType={'default'}
                               underlineColorAndroid={'white'}
                               autoCapitalize={'characters'}
                               onChangeText={this.handleChange.bind(this, j)}
                               blurOnSubmit={false}
                               selectionColor={colors.teal}
                               onEndEditing={this.setInputs}/>
                )
            }

        }
        return inputs;

    }

    handleAddMember = () => {
        if (this.state.teamSize >= this.props.event.maxSize) {
            return;
        } else {
            this.setState({teamSize: this.state.teamSize + 1})
        }
    }

    handleLeaderChange = (leaderId) => {
        this.setState({leaderId})
    }

    getLeaderOptions() {
        const inputs = [];
        let invalid = false;

        for (const input in this.state.inputs) {
            if (this.state.inputs[input].length > 1)
                inputs.push(this.state.inputs[input])
        }

        return inputs.map((input, i) => <Picker.Item label={input} value={input} key={i}/>)
    }

    render() {
        return (
            <ScrollView onStartShouldSetResponderCapture={(evt) => true} style={styles.scrollContainer}
                        contentContainerStyle={{alignItems: 'center'}}>
                <Text style={{
                    color: colors.teal,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 22,
                    marginTop: 16
                }}>Register</Text>
                <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 12, marginBottom: 16}}>Team
                    Size: {this.props.event.minSize} - {this.props.event.maxSize}</Text>
                <Text style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 12, marginTop: 16}}>Team
                    Member(s)</Text>
                {this.returnInputs()}
                <TouchableWithoutFeedback background={TouchableNativeFeedback.Ripple(colors.teal, true)}
                                          onPress={this.handleAddMember}>
                    <Image source={require('./icons/ic_person_add.png')} style={{tintColor: colors.teal}}/>
                </TouchableWithoutFeedback>
                {this.props.event.maxSize > 1 ?
                    <View style={{alignItems: 'center'}}>
                        <Text
                            style={{color: colors.teal, fontFamily: 'Montserrat-Medium', fontSize: 12, marginTop: 16}}>Leader
                            ID ({this.state.leaderId})</Text>
                        <Picker style={{height: 50, width: Dimensions.get('window').width, marginLeft: 16}}
                                selectedValue={this.state.leaderId} onValueChange={this.handleLeaderChange}
                                mode="dropdown">
                            {
                                this.getLeaderOptions()
                            }
                        </Picker>
                    </View> : <View/>
                }
                <TouchableWithoutFeedback background={TouchableNativeFeedback.Ripple(colors.teal, true)}
                                          onPress={this.handleSubmit}>
                    <View style={{
                        marginLeft: 16,
                        marginRight: 16,
                        height: 50,
                        borderColor: colors.teal,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderRadius: 50,
                        marginBottom: 32,
                        width: Dimensions.get('window').width - 32
                    }}>
                        <Text style={{color: colors.teal, fontFamily: 'Montserrat-Regular', fontSize: 22}}>Submit</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{
                    color: colors.teal,
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    marginBottom: 16,
                    color: colors.selected
                }}>{this.state.statusMessage || ''}</Text>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    tabBarStyle: {
        flexDirection: 'row',
        backgroundColor: colors.teal,
        elevation: 0,
        height: 56
    },

    text: {
        color: 'black',
        fontSize: 24,
    },
    slider: {
        width: 300,
    },
    indicator: {
        backgroundColor: '#eeeeee',
        height: 2,
        elevation: 4,
    },

    tab: {
        width: Dimensions.get('window').width / 3,
    },

    brief: {
        fontFamily: 'Montserrat-Light',
        color: '#484848',
        fontSize: 14,
        paddingLeft: 16,
        paddingRight: 36,
        paddingTop: 16,
        paddingBottom: 0
    },

    rules: {
        fontFamily: 'Montserrat-Light',
        color: '#484848',
        fontSize: 14,
        paddingLeft: 16,
        paddingRight: 36,
        paddingTop: 0,
        paddingBottom: 16
    },

    scrollContainer: {
        position: 'relative',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
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

    mainHadding: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        fontSize: 26,
        paddingLeft: 16,
        paddingTop: 0,
        paddingBottom: 0,
    },

    mainHadding2: {
        fontFamily: 'Montserrat-Medium',
        color: colors.teal,
        fontSize: 36,
        paddingLeft: 16,
        paddingTop: 0,
        paddingBottom: 0,
    },

    mainHadding_below: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: -8,
        paddingBottom: 16,
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

    eventRulesHadding: {
        fontFamily: 'Montserrat-Medium',
        color: colors.normal,
        fontSize: 26,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 16,

    },

    phoneNumber: {
        fontFamily: 'Montserrat-Regular',
        color: colors.normal,
        fontSize: 24,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 16,

    },

    eventDescription: {
        fontFamily: 'Montserrat-Light',
        color: colors.normal,
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 0,

    },
    tabIcon: {

        height: 24,
        width: 24,
    },

    navBar: {
        height: 56,
        backgroundColor: colors.teal
    },

    eventCard: {
        backgroundColor: '#ffffff',
        elevation: 0,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 8,
        marginBottom: 16,
    },
});