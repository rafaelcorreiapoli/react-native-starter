/* @flow */

import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, ListView, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Restaurante from '@components/Restaurante';
import Perguntas from '@components/Perguntas'
import { v4 } from 'node-uuid';
import Meteor, { createContainer } from 'react-native-meteor';
const MK = require('react-native-material-kit');
const {
  MKButton,
} = MK;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

const FlatButton = MKButton.flatButton()
  .build();

const BotaoEnviar = MKButton.coloredButton()
.withText("Enviar!")
.withBackgroundColor('#4CAF50')
.withStyle(styles.button)
.build();


class QuestionarioContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.handleOnChangeRespostas = this.handleOnChangeRespostas.bind(this)
    this.handleOnEnvia = this.handleOnEnvia.bind(this)
    this.renderFooter = this.renderFooter.bind(this)

    this.state = {
      respostas: {}
    }
  }

  handleOnChangeRespostas(perguntaId, resposta) {
    const { respostas } = this.state
    respostas[perguntaId] = resposta
    this.setState({respostas})
  }

  handleOnEnvia() {
    const { respostas } = this.state
    const { promocaoId, questionarioId } = this.props

    let respostasRequest = [];

    for (let prop in respostas) {
      if (respostas.hasOwnProperty(prop)) {
        let perguntaId = prop;
        let val = respostas[prop];

        respostasRequest.push({
          perguntaId,
          val
        })
      }
    }

    console.log(respostasRequest);

    Meteor.call('respostas.processarRespostas', {
      respostas: respostasRequest,
      promocaoId,
      questionarioId
    }, (err, res) => {
      console.log(err)
      console.log(res)
    })
  }
  renderFooter() {
    return (
      <BotaoEnviar onPress={this.handleOnEnvia} />
    )
  }
  render() {
    const { perguntas, questionario } = this.props

    return (
      <View style={styles.container}>
          <Perguntas
            onChange={this.handleOnChangeRespostas}
            perguntas={perguntas}
            renderFooter={this.renderFooter}
            />
      </View>
    )
  }
}

export default createContainer( params => {
  const { questionarioId } = params;
  console.log(questionarioId)
  const handle = Meteor.subscribe('questionarios.single', {id: questionarioId})
  const questionario = Meteor.collection('questionarios').findOne(questionarioId)
  const perguntas = Meteor.collection('perguntas').find({questionarioId}, {
    sort: {
      ordem: 1
    }
  })
  return {
    questionarioId,
    questionario,
    perguntas
  };
}, QuestionarioContainer)
