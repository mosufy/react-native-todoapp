/**
 * scenes
 *
 * @date 04/11/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

'use strict';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Actions, Scene} from 'react-native-router-flux';
import HomeContainer from './containers/HomeContainer';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeContainer} title="Hello World" initial={true}/>
  </Scene>
);