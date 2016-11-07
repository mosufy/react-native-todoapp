/**
 * Home
 *
 * @date 06/11/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

'use strict';

import React, {Component} from 'react';
import {Text} from 'react-native';
import {styles} from './../styles';

export default class Home extends Component {
  render() {
    return React.createElement(Text, {style: styles.text}, this.props.textHeading);
  }
}