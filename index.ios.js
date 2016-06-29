'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    this._clickMe = this._clickMe.bind(this);
  }

  _clickMe() {
    var newClick = this.state.clicks += 1;

    this.setState({
      clicks: newClick
    });
  }

  componentWillMount() {
    console.log('ComponentWillMount(): ')
  }

  componentDidMount() {
    console.log('componentDidMount(): ')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps(): ')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(): ')
    return true;
  }

  componentWillUpdate() {
    console.log('ComponentWillUpdate(): ')
  }

  render() {
    console.log('render(): ')
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={this._clickMe}>
          <Text>{'Click Me'}</Text>
        </TouchableHighlight>
        <Text>
          {this.state.clicks}
        </Text>
      </View>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(): ')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): ')
  }
}

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
    backgroundColor:  'coral',
  }
});

AppRegistry.registerComponent('Lifecycle', () => Lifecycle);
