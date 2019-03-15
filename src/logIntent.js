import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native';

class logIntent extends Component {

  static navigationOptions = {
    title: 'login'
  };
  state = {
    data: [],
    //id:1
  };
 

  onButtonPress(){
    const { navigate } = this.props.navigation;
    return fetch('https://facebook.github.io/react-native/movies.json')
    
    .then((response) => response.json())
    .then((response) => {
      //this.setState({ data: results.description });
      if ( response !== null){
        console.log("working");
             navigate('showlist');
           }
           else console.log("r")
      console.log(this.state.data);
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  renderButton(){
    return(
        <Button onPress={this.onButtonPress.bind(this)}
        title='Login'>
        Login
        </Button>
    );
}
  
  render() {

    
    console.log("working");
    return(
      <View>
        <TextInput
        ref="1"
        placeholder="user name"
        onChangeText={id => this.setState({ id})}
        style={styles.inputStyle}
        value={this.state.response}
        underlineColorAndroid='transparent'
        blurOnSubmit={false}/>

      <View style= {styles.buttonStyle}>
      {this.renderButton()}
      </View>      
      </View>

    );
    
  }
}

const styles =StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"

  }
});

export default logIntent;