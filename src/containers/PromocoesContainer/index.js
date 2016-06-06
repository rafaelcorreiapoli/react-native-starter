/* @flow */

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'

class PromocoesContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>Promoções</Title>
      </Container>
    )
  }
}


export default PromocoesContainer
