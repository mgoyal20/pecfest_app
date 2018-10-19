import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions
} from 'react-native';
import TeamMemberCard from './teamMemberCard'

const colors = {
    selected: '#ff5a5f',
    normal: '#484848',
    teal: '#008489',
    StatusBarTeal: '#066f73',
    separator: '#ebebeb'
};

export default class TeamMembers extends Component {

    returnMembers = () => {
        var members = [];
        members.push(
            <View key={1} style={{alignItems: 'center'}}>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 40,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <View style={{
                        width: (Dimensions.get('window').width - 8) / 2,
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            color: colors.normal,
                            fontSize: 22,
                            marginTop: 12,
                            marginBottom: 8,
                            textAlign: 'center'
                        }}>Convener</Text>
                        <TeamMemberCard name={'Akhilesh Sharma'} phone={'+91-9888696867'} photo={'Akhilesh'}/>
                    </View>
                    <View style={{
                        width: (Dimensions.get('window').width - 8) / 2,
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            color: colors.normal,
                            fontSize: 22,
                            marginTop: 8,
                            marginBottom: 8,
                            textAlign: 'center'
                        }}>Co-Convener</Text>
                        <TeamMemberCard name={'Harsh Sharma'} phone={'+91-9878235871'} photo={'Harsh'}/>
                    </View>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Secretary</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Mayank Goyal'} phone={'+91-9465242818'} photo={'MayankGoyal'}/>
                    <TeamMemberCard name={'Shivam Thakur'} phone={'+91-9471091084'} photo={'Shivam'}/>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Shubham Garg'} phone={'+91-9501157818'} photo={'Shubam'}/>
                    <TeamMemberCard name={'Isha Singla'} phone={'+91-8288997585'} photo={'Isha'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Marketing</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Aseem Baveja'} phone={'+91-9988081481'} photo={'Aseem'}/>
                    <TeamMemberCard name={'Ananya Singh'} phone={'+91-8558819215'} photo={'Ananya'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Infrastructure</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Devansh Kandpal'} phone={'+91-9592029283'} photo={'Devansh'}/>
                    <TeamMemberCard name={'Shubhanshu Sharma'} phone={'+91-9780994223'} photo={'Shubanshu'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Event Coordination (Technical)</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Vaibhav Dwivedi'} phone={'+91-7888470988'} photo={'Vaibhav2'}/>
                    <TeamMemberCard name={'Shyam Pandya'} phone={'+91-9592029037'} photo={'Shyam'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Event Coordination (Cultural)</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Shiman Vashisth'} phone={'+91-9915749135'} photo={'Shiman'}/>
                    <TeamMemberCard name={'Raghav Arora'} phone={'+91-8968222377'} photo={'Raghav'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Security and Descipline</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8),
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Himanish Kumar'} phone={'+91-9815560072'} photo={'Himansh'}/>
                    <TeamMemberCard name={'Gurjot Singh'} phone={'+91-9915644787'} photo={'Gurjot'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Mega Shows</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Ketan Sud'} phone={'+91-9876970913'} photo={'Ketan'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Finance</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Gobind Dhamija'} phone={'+91-8054951996'} photo={'Gobind'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Printing and Stationary</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Gautam Sharma'} phone={'+91-9888359047'} photo={'Gautam'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Alumni & Industry Relations</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Snigdha Singh'} phone={'+91-8968675396'} photo={'Snigdha'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Logistics</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Aakanksha'} phone={'+91-9501033030'} photo={'Akanksha'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Hospitality</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Pratik Sinha'} phone={'+91-8528858461'} photo={'Pratik'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Publicity and Branding</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Vaibhav Sharma'} phone={'+91-7888612705'} photo={'Vaibhav'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Public Relations and Media</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Sanpreet Singh'} phone={'+91-9814030120'} photo={'Sanpreet'}/>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: colors.normal,
                    fontSize: 22,
                    marginTop: 8,
                    marginBottom: 8
                }}>Creative</Text>
                <View style={{
                    backgroundColor: 'white',
                    width: (Dimensions.get('window').width - 8) / 2,
                    height: (Dimensions.get('window').width - 24) / 2 + 8,
                    flexDirection: 'row',
                    marginRight: 4,
                    marginLeft: 4
                }}>
                    <TeamMemberCard name={'Mayank Kaura'} phone={'+91-9876139090'} photo={'MayankKaura'}/>
                </View>
            </View>
        )
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
