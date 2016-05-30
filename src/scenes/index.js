/* @flow */

import React, { Element, Component } from 'react'
import { StyleSheet } from 'react-native'
import { Router } from 'react-native-router-flux'
import scenes from './app'

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
})

// const styles = StyleSheet.create({
//   navBar: {
//     backgroundColor:'#000',
//   },
//   navBarTitle:{
//     color:'#FFF'
//   },
//   barButtonTextStyle:{
//     color:'#0000FF'
//   },
//   barButtonIconStyle:{
//     tintColor:'rgb(255,255,255)'
//   }
// })


export default class RouterRoot extends Component {
  handleDispatch(nav) {
    console.log(JSON.stringify(nav.type));
    //console.log(nav.scene.sceneKey);
  }
  render() {
    return (
    <Router
      scenes={scenes}
      dispatch={this.handleDispatch}
      getSceneStyle={getSceneStyle}
      />
    )
  }
}
