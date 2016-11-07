/**
 * iOS React Native App
 *
 * @date 03/11/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

'use strict';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Router} from 'react-native-router-flux';
import {scenes} from './src/scenes';

class App extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => App);