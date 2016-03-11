/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  StatusBarIOS,
  View
} from 'react-native';


import RootRouter from './src/components/RootRouter';

class SlackBooking extends Component {
  render() {
    return (
      <RootRouter />
    );
  }
}

AppRegistry.registerComponent('SlackBooking', () => SlackBooking);

//class SlackBooking extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!!!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.ios.js
//        </Text>
//        <Text style={styles.instructions}>
//          Press Cmd+R to reload,{'\n'}
//          Cmd+D or shake for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF'
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5
//  },
//});

