'use strict';

import React ,{Component} from 'react';
import buffer from 'buffer';
import authService from './AuthService';
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

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
      password : '',
      showProgress : false,
      success : false,
      badCredentials:false,
      unknownError:false
    };

    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  render() {
    var errorCtrl = <View />;

    if (!this.state.success && this.state.badCredentials) {
      errorCtrl = <Text style={styles.error}>
        That username and password combination did not work
      </Text>;
    }
    if (!this.state.success && this.state.unknownError) {
      errorCtrl = <Text style={styles.error}>
        We experienced an unpexpected issue
      </Text>;
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/Octocat.png')}/>
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput style={styles.loginInput}
          onChangeText={(text)=> this.setState({username: text})}
          placeholder="Github Username"/>
        <TextInput style={styles.loginInput}
            onChangeText={(text)=>this.setState({password: text})}
            placeholder="Github Password" secureTextEntry={true}/>
        <TouchableHighlight
          onPress={this.onLoginPressed}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

        {errorCtrl}

        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
          />
      </View>
    );
  }

  onLoginPressed(){
    console.log('Attemping to log in with username ' + this.state.username + ' and password ' + this.state.password);
    this.setState({showProgress : true});

    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results)=> {
      this.setState(Object.assign({
        showProgress: false,
        success:results.success,
        badCredentials: results.badCredentials,
        unknownError: results.unknownError }));

        if (results.success && this.props.onLogin) {
          this.props.onLogin();
        }
    })
  }
}

Login.propTypes = {
  onLogin: React.PropTypes.func
};

export default Login;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      paddingTop: 40,
      padding: 10,
      alignItems: 'center',
      flex: 1
  },
  logo: {
      width: 66,
      height:55
  },
  heading: {
      fontSize: 30,
      margin: 10,
      marginBottom: 20
  },
  loginInput: {
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 0,
      color: '#48BBEC'
  },
  button: {
      height: 50,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
  },
  buttonText: {
      color: '#fff',
      fontSize: 24
  },
  loader: {
      marginTop: 20
  },
  error: {
      color: 'red',
      paddingTop: 10
  }
})
