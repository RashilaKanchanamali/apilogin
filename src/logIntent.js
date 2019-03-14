import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView, Button, TextInput, Alert} from 'react-native';

class logIntent extends Component {

  static navigationOptions = {
    title: 'login'
  };
  state = {
    data: []
    
  };
 

  /*componentWillMount() {
    //this.fetchData();
  }*/

  onButtonPress(){
    const { navigate } = this.props.navigation;
  

    // onButtonPress = async () => {
      // const response = await
       fetch("https://facebook.github.io/react-native/movies.json", {
        method:'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
        },
       })
       .then((result)=>result.json())
       .then((result)=>{ 
        console.log("working");
        this.setState({ data: result.movies });
         if ( this.state.data !== null){
          
          navigate('List');
        }
        else console.log("r")
      }
        // if ( res !== null){
        //   const { navigate } = this.props.navigation;
        //   navigate('List');
        // }
       )
      // const json = await response.json();
   
      // this.setState({ data: json.results });
     
    // const response =await fetch('https://randomuser.me/api/?results', {
  
     /* method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        data:this.state.last
      })*/

    // }).then((response) => response.json())
    //   .then((responseJson) => {
    //     if ( responseJson !== null){
    //       const { navigate } = this.props.navigation;
    //       navigate('List');
    //     }
        
    //   }).catch((error) => {
    //    //Alert.alert(error);
    //   });
    // const json =await response.json();
    // this.setState({ data: json.results}) 
  // };
  }

  renderButton(){
    return(
        <Button onPress={this.onButtonPress.bind(this)}
        title='Login'>
        Login
        </Button>
    );
}

  /*renderListItem = ({ item }) => (
    <View>
      <Text> { item.name.last}</Text> 
    </View> 
  )*/
  
  render() {
    //console.log("working");
    return(
      <View>
        <TextInput
        ref="1"
        placeholder="user name"
        onChangeText={last => this.setState({ last})}
        style={styles.inputStyle}
        value={this.state.response}
        underlineColorAndroid='transparent'
        blurOnSubmit={false}/>

      <View style= {styles.buttonStyle}>
      {this.renderButton()}
      </View>

      
      
      
      </View>

    );
    
    /*return (

      <ScrollView>
      <View style={styles.container}>
        <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        renderItem={this.renderListItem}
        />

        </View>
        </ScrollView>

      
    );*/
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