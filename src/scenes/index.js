/* @flow */

import React, { Element, Component } from 'react'
import { StyleSheet } from 'react-native'
import { Router } from 'react-native-router-flux'
import scenes from './app'
import { connect } from 'react-redux';
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

const RouterWithRedux = connect()(Router);

export default class RouterRoot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoute: 'teste'
    }
  }
  handleDispatch(nav) {
    //console.log(nav);
    if (nav.type === 'push') {
        this.setState({
          currentRoute: nav.key
        })
    }
    //console.log(nav.scene.sceneKey);
  }
  render() {
    //console.log(this.state);
    return (
    <RouterWithRedux
      scenes={scenes}
      getSceneStyle={getSceneStyle}
      />
    )
  }
}
