'use strict';

import React ,{Component} from 'react';
import buffer from 'buffer';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
      password : '',
      showProgress : false
    };

    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/Octocat.png')}/>
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput style={styles.input}
          onChangeText={(text)=> this.setState({username: text})}
          placeholder="Github Username"/>
        <TextInput style={styles.input}
            onChangeText={(text)=>this.setState({password: text})}
            placeholder="Github Password" secureTextEntry={true}/>
        <TouchableHighlight
          onPress={this.onLoginPressed}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
          />
      </View>
    );
  }

  onLoginPressed(){
    console.log('Attemping to log in with username ' + this.state.username + 'and password ' + this.state.password);
    this.setState({showProgress : true});

    var b = new buffer.Buffer(this.state.username + ':' +this.state.password);
    var encodedAuth = b.toString('base64');

    fetch('https://api.github.com/user',{
      headers: {
        'Authorization' :'Basic ' + encodedAuth
      }
    })
    .then((response)=>{
      return response.json();
    })
    .then((results)=>{
      console.log(results);
      this.setState({showProgress: false});
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop:10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf:'center'
  },
  loader: {
    marginTop: 10
  }
})
