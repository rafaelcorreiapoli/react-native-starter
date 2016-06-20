/* @flow */

import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, ListView, View, TouchableHighlight, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Restaurante from '@components/Restaurante';
import Perguntas from '@components/Perguntas';
import PromocaoHeader from '@components/PromocaoHeader';
import Loading from '@components/Loading';
import QuestionarioContainer from '@containers/QuestionarioContainer'
import { v4 } from 'node-uuid';
import Meteor, { createContainer } from 'react-native-meteor';

const MK = require('react-native-material-kit');
const {
  MKButton,
} = MK;


const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1,
  },
  innerContainer: {
    flex: 1
  },

  listView: {
    alignSelf: 'stretch'
  },
})

const FlatButton = MKButton.flatButton()
  .build();


class PromocaoContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)
  }

  render() {
    const { promocao, promocaoReady} = this.props
    const questionarioId = promocao.questionarioId

    return (
      <View style={styles.container}>
        {promocaoReady ?
          <View style={styles.innerContainer}>
            <PromocaoHeader imagemUrl={promocao.imagemUrl} nome={promocao.nome } />
            <QuestionarioContainer
              questionarioId={questionarioId}
              promocaoId={promocao._id}
              />
          </View>
        :
        <Loading />}
      </View>
    )
  }
}

export default createContainer( params => {
  const { promocaoId } = params;
  const handle = Meteor.subscribe('promocoes.single', {id: promocaoId})
  const promocao = Meteor.collection('promocoes').findOne(promocaoId)

  return {
    promocaoReady: handle.ready(),
    promocao,
    //questionario,
    //perguntas
  };
}, PromocaoContainer)
