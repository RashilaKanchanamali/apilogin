import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LogIntent from './src/logIntent';
import showlist from './src/showlist';

const MainNavigator = createStackNavigator({
  LogIntent: {screen: LogIntent},
  showlist: {screen: showlist}
});

const App = createAppContainer(MainNavigator);

export default App;