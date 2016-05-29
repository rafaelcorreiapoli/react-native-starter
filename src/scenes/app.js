/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import RestaurantesContainer from '@containers/RestaurantesContainer'
import LoginContainer from '@containers/LoginContainer'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="login" component={LoginContainer} title="Login" />
    <Scene key="welcome" component={LauchContainer} title="Welcome" />
    <Scene key="counter" component={CounterContainer} title="Counter" />
    <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" />
  </Scene>
)

export default scenes
