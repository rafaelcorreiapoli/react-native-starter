/* @flow */

import React, { Component } from 'react';
import { Alert } from 'react-native'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LerCupom from '@components/LerCupom'
import Loading from '@components/Loading'
import Meteor, { createContainer } from 'react-native-meteor'

const ESCANEANDO = 0;
const VALIDANDO_TOKEN = 1;
const ERRO = 2;
const SUCESSO = 3;
class RestauranteContainer extends Component {
  constructor(props) {
    super(props)

    this.handleAceitarCupom = this.handleAceitarCupom.bind(this)
    //this.handleRejeitarCupom = this.handleRejeitarCupom.bind(this)

    this.state = {
      estado: ESCANEANDO,
      erro: false,
    }
  }

  handleAceitarCupom(token) {
    this.setState({
      estado: VALIDANDO_TOKEN
    })

    Meteor.call('cupons.claim', {token}, (err, res) => {
      if (err) {
        let errorMsg
        switch (err.error) {
          case 'cupons.claim.cupomNaoExiste':
            errorMsg = 'Cupom inválido'
            break;
          case 'cupons.claim.voceJaEDono':
            errorMsg = 'Você já é dono deste cupom! Responda a pesquisa para ganhar benefícios!'
            break;
          case 'cupons.claim.cupomTemOutroDono':
            errorMsg = 'Este cupom já foi utilizado por outra pessoa.'
            break;
          default:
            errorMsg = 'Erro Desconhecido'
        }
        this.setState({
          estado: ERRO,
          erro: errorMsg
        })
        return ;
      }

      if (res) {
        this.setState({
          estado: SUCESSO,
        })
      }
    })
  }


  render() {
    const { estado, erro } = this.state
    console.log(estado);
    return (
      <View style={styles.container}>
        {(() => {
          switch (estado) {
            case ESCANEANDO:
              return (
                <LerCupom
                  onAceitarCupom={this.handleAceitarCupom}
                  onRejeitarCupom={this.handleRejeitarCupom}
                  />
              )
            case VALIDANDO_TOKEN:
              return (
                <Loading />
              )
            case ERRO:
              return (
                <Text>
                  Erro:
                  {erro}
                </Text>
              )
            case SUCESSO:
              return (
                <Text>
                  Sucesso!!
                </Text>
              )
            default:
              return null
          }
        })()}
      </View>
    );
  }
}

export default createContainer((params) => {
  const { restauranteId } = params
  const handle = Meteor.subscribe('restaurantes.single', {id: restauranteId});

  const restaurante = Meteor.collection('restaurantes').findOne(restauranteId)

  return {
    restauranteReady: handle.ready(),
    restaurante
  }
}, RestauranteContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
  },
});
