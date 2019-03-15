import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class showlist extends Component {
    static navigationOptions = {
      title: 'log',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>

        <Text>hello</Text>

        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        paddingRight:5,
        paddingTop: 5,
        paddingLeft: 250,
        flex: 1,
        backgroundColor: '#87ceeb'
    }
    
})
export default showlist ;