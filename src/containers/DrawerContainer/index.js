import React, { Component } from 'react'
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer'
import { DefaultRenderer } from 'react-native-router-flux';
import {  StyleSheet, StatusBar} from 'react-native'

import SideMenu from '@components/SideMenu';

const drawerStyles = StyleSheet.create({
  mainOverlay: {
    backgroundColor: 'black',
    opacity: 0
  }
})

class DrawerContainer extends Component {
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
        styles={drawerStyles}
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
        <StatusBar
        backgroundColor="#d32f2f"
        barStyle="light-content"
      />
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


export default connect(({routes}) => ({routes}))(DrawerContainer);
