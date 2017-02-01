'use strict';

import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';
import authService from './AuthService';

export default class Feed extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A','B','C']),
      showProgress: true
    };
    this.render = this.renderRow.bind(this);
    this.fetchFeed = this.fetchFeed.bind(this);
  }

  componentDidMount(){
    this.fetchFeed()
  }

  fetchFeed(){
    authService.getAuthInfo((err,authInfo)=> {
      var url = `https://api.github.com/users/${authInfo.user.login}/received_events`;
      fetch(url, {
        headers: authInfo.header
      })
      .then((response)=> response.json())
      .then((responseData)=> {
        var feedItems =
            responseData.filter((ev)=>
          ev.type == 'PushEvent');
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(feedItems),
            showProgress: false
          });
      })
    });
  }

  renderRow(rowData){
    return(
      <Text style={{
        color: '#333',
        backgroundColor: '#fff',
        alignSelf: 'center'
      }}>
      {rowData.actor.login}
    </Text>
)
  }

  render(){
    if (this.state.showProgress) {
      return(
        <View style={{
            flex:1,
            justifyContent:'center'
          }}>
          <ActivityIndicator
            animating={true}
            size="large"
            />
        </View>
      )
    }
    return(
      <View style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <ListView dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
      );
  }
}
