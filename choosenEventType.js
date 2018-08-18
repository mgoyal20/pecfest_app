import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableNativeFeedback
} from 'react-native';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Team from './Team.js'
import Profile from './Profile.js'
import Events from './Events.js'


const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]}>
                            <Text style={styles.label}>This is the Home Page</Text>
                          </View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#8ddca4' } ]} />;

export default class choosenEventType extends Component{
	state = {
    	index: 0,
    	routes: [
      		{ key: '1', title: 'Upcoming ' },
      		{ key: '2', title: 'Registered ' },
    	],
  	};

  	_handleIndexChange = index => this.setState({ index });

  	_renderHeader = props => {
    	return (
      		<TabBar {...props} scrollEnabled style={styles.tabBarStyle} labelStyle={styles.label} indicatorStyle={styles.indicator} tabStyle={styles.tab}/>
    	)
  	}

  	_renderScene = SceneMap({
    	'1': FirstRoute,
    	'2': SecondRoute,
  	});
	render(){
		return (
			<View style={styles.container}>
				<TabViewAnimated
        			style={styles.container}
        			navigationState={this.state}
        			renderScene={this._renderScene}
        			renderHeader={this._renderHeader}
        			onIndexChange={this._handleIndexChange}
      			/>
			</View>
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
  	backgroundColor: '#ffffff',
    elevation: 0,
  },

  underLineStyle: {
  	backgroundColor: '#a51c30',
  	height: 1.5,
  },
  indicator: {
    backgroundColor: '#ff5a5f',
  },

  tab: {
  	width: Dimensions.get('window').width/2,
  },

  label: {
    color: '#484848',
    //fontWeight: '500',
    fontFamily: 'Montserrat-Bold',

  },
});