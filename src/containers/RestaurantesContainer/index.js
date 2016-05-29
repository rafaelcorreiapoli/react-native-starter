/* @flow */

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import Meteor, { createContainer } from 'react-native-meteor';
//  Meteor.connect('http://192.168.1.32:3000/websocket');

class RestaurantesContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>Restaurantes</Title>
      </Container>
    )
  }
}


export default RestaurantesContainer
