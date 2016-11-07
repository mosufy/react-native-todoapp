/**
 * HomeContainer
 *
 * @date 04/11/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

'use strict';

import React, {Component} from 'react';
import Home from './../components/Home';

export default class HomeContainer extends Component {
  render() {
    return <Home textHeading="Hello World"/>
  }
}