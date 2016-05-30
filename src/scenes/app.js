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

import SideMenu from '@components/SideMenu';


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
  getItems() {
    return [
      {
        label: 'Pizza\'s',
        icon: 'md-pizza',
        action: Actions.restaurantes
      },
      {
        label: 'Beer\'s',
        icon: 'md-beer',
        action: Actions.counter
      },
      {
        label: 'Alarm',
        icon: 'md-alarm',
        action: Actions.welcome
      },
      {
        label: 'Money',
        icon: 'md-cash',
        action: Actions.restaurantes
      }
    ]

  }
  render(){
    const children = this.props.navigationState.children;

    return (
      <Drawer
        type="overlay"
        content={<SideMenu items={this.getItems()} activeItem={1} />}
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

const scenes = Actions.create(
  <Scene key="drawer" component={DrawerScene}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={LoginContainer} title="Login"/>
      <Scene key="welcome" component={LauchContainer} title="Welcome" navBar={Nav} hideNavBar={false}/>
      <Scene key="counter" component={CounterContainer} title="Counter" navBar={Nav} hideNavBar={false}/>
      <Scene key="restaurantes" component={RestaurantesContainer} title="Restaurantes" navBar={Nav} hideNavBar={false}/>
    </Scene>
  </Scene>
)

export default scenes
