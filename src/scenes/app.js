/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Drawer from 'react-native-drawer'
import { Actions, Scene, DefaultRenderer } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import RestaurantesContainer from '@containers/RestaurantesContainer'
import LoginContainer from '@containers/LoginContainer'
import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/Ionicons'
import { MKButton, MKColor } from 'react-native-material-kit';
import { connect } from 'react-redux';
import SideMenu from '@components/SideMenu';
import menuItems from '@utils/menu_items'

const FlatButton = MKButton.flatButton()
  .build();

class Left extends Component {
  render() {
    return (
      <FlatButton onPress={this.props.handleClick}>
        <Icon size={30} name="md-menu" backgroundColor="rgba(0,0,0,0)" color="white"/>
      </FlatButton>
    )
  }
}


class Nav extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };
  handleClick() {
    let { drawer } = this.context;
    drawer.open()
  }
  render() {
    const titleConfig = {
      title: 'Hello, world',
      tintColor: 'white'
    };

    return (
      <View style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
        <NavigationBar
          style={{
            backgroundColor: '#db2528'
          }}
          title={titleConfig}
          leftButton={<Left handleClick={this.handleClick.bind(this)}/>} />
      </View>
    );
  }
}

const sty = {
  mainOverlay: {
    backgroundColor: 'black',
    opacity: 0
  }
}

class DrawerScene extends Component {
  getActiveRouteKey() {
    const activeScene = this.props.routes.scene.sceneKey;
    const items = this.props.menuItems;
    for (i = 0; i < items.length; i++) {
      if (items[i].sceneKey === activeScene) {
          return i;
      }
    }
    return -1;
  }
  render(){
    const children = this.props.navigationState.children;
    const activeItem = this.getActiveRouteKey();
    return (
      <Drawer
        type="overlay"
        content={<SideMenu items={this.props.menuItems} activeItem={activeItem} />}
        ref="drawer"
        styles={sty}
        closedDrawerOffset={-3}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        tweenHandler={
          (ratio) => ({
            mainOverlay: {
              opacity: ratio / 2
            }
          })
        }>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


const ConnectedDrawerScene =  connect(({routes}) => ({routes}))(DrawerScene);

const scenes = Actions.create(
  <Scene key="drawer" component={ConnectedDrawerScene} menuItems={menuItems}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={LoginContainer} title="Login"/>
      <Scene key="welcome" component={LauchContainer} title="Welcome" navBar={Nav} hideNavBar={false}/>
      <Scene key="counter" component={CounterContainer} title="Counter" navBar={Nav} hideNavBar={false}/>
      <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" navBar={Nav} hideNavBar={false}/>
    </Scene>
  </Scene>
)

export default scenes
