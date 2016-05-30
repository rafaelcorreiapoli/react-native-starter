/* @flow */

import React, { Component } from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import RestaurantesContainer from '@containers/RestaurantesContainer'
import LoginContainer from '@containers/LoginContainer'
import NavigationBar from '@components/NavigationBar';
import DrawerContainer from '@containers/DrawerContainer';

import menuItems from '@utils/menu_items'



const scenes = Actions.create(
  <Scene key="drawer" component={DrawerContainer} menuItems={menuItems}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={LoginContainer} title="Login"/>
      <Scene key="welcome" component={LauchContainer} title="Welcome" navBar={NavigationBar} hideNavBar={false}/>
      <Scene key="counter" component={CounterContainer} title="Counter" navBar={NavigationBar} hideNavBar={false}/>
      <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" navBar={NavigationBar} hideNavBar={false}/>
    </Scene>
  </Scene>
)

export default scenes
