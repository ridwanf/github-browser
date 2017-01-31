'use strict';

import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'feed'
    }
  }

  render(){
    return(
      <TabBarIOS styles={styles.container}>
        <TabBarIOS.Item
          title="Feed"
          selected={this.state.selectedTab == 'feed'}
          icon={require('./images/inbox.png')}
          onPress={()=>this.setState({selectedTab:'feed'})}
        >
          <Text style={styles.welcome}>
            Tab 1
          </Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab == 'search'}
          icon={require('./images/search.png')}
          onPress={()=>this.setState({selectedTab:'search'})}
        >
          <Text style={styles.welcome}>
            Tab 2
          </Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      paddingTop: 40,
      padding: 10,
      alignItems: 'center',
      flex: 1
  },
  welcome: {
      fontSize: 20,
      margin: 20,
      textAlign: 'center'
  }
})
