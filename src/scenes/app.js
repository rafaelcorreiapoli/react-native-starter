/* @flow */

import React, { Component } from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import LoginContainer from '@containers/LoginContainer'
import RestaurantesContainer from '@containers/RestaurantesContainer'
import PromocoesContainer from '@containers/PromocoesContainer';
import VouchersContainer from '@containers/VouchersContainer';
import PerfilContainer from '@containers/PerfilContainer';

import NavigationBar from '@components/NavigationBar';
import DrawerContainer from '@containers/DrawerContainer';

import menuItems from '@utils/menu_items'



const scenes = Actions.create(
  <Scene key="drawer" component={DrawerContainer} menuItems={menuItems}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={LoginContainer} title="Login"/>
      <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" navBar={NavigationBar} hideNavBar={false}/>
      <Scene key="promocoes" component={PromocoesContainer} title="Promoções" navBar={NavigationBar} hideNavBar={false}/>
      <Scene key="vouchers" component={VouchersContainer} title="Vouchers" navBar={NavigationBar} hideNavBar={false}/>
      <Scene key="perfil" component={PerfilContainer} title="Perfil" navBar={NavigationBar} hideNavBar={false}/>
    </Scene>
  </Scene>
)

export default scenes
