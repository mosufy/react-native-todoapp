/**
 * Home
 *
 * @date 06/11/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

export default class Home extends Component {
  render() {
    return React.createElement(Text, {style: styles.text}, this.props.textHeading);
  }
}