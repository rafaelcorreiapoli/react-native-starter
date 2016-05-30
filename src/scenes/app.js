/* @flow */

import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Drawer from 'react-native-drawer'
import { Actions, Scene, DefaultRenderer } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import RestaurantesContainer from '@containers/RestaurantesContainer'
import LoginContainer from '@containers/LoginContainer'

class SideMenu extends Component {
  render() {
    return (
      <View>
      <Text>Teste</Text>
      </View>
    )
  }
}
class DrawerScene extends Component {
  render(){
    const children = this.props.navigationState.children;
    return (
      <Drawer
      ref="navigation"
      type="displace"
      open={true}
      content={<SideMenu />}
      tapToClose={true}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      negotiatePan={true}
      tweenHandler={(ratio) => ({
        main: { opacity:Math.max(0.54,1-ratio) }
      })}>
      <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

const scenes = Actions.create(
  <Scene key="drawer"  component={DrawerScene}>
    <Scene key="app" navigationBarStyle={styles.container} >
      <Scene key="login" component={LoginContainer} title="Login" />
      <Scene key="welcome" component={LauchContainer} title="Welcome" />
      <Scene key="counter" component={CounterContainer} title="Counter" />
      <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" />
    </Scene>
  </Scene>
)

export default scenes
