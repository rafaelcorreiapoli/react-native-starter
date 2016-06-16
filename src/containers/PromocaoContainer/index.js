/* @flow */

import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, ListView, View, TouchableHighlight, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Restaurante from '@components/Restaurante';
import Perguntas from '@components/Perguntas';
import { v4 } from 'node-uuid';
import Meteor, { createContainer } from 'react-native-meteor';
import Spinner from 'react-native-spinkit'
const MK = require('react-native-material-kit');
const {
  MKButton,
} = MK;


const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1,
    //backgroundColor: 'yellow',
  },
  innerContainer: {
    flex: 1
  },
  headerContainer: {
    height: 80
  },
  questionarioContainer: {
    flex: 1
  },
  listView: {
    alignSelf: 'stretch'
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1
  },
  promocaoNome: {
    fontSize: 26,
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {
      height: 1,
      width: 0
    },
    textShadowRadius: 3
  }
})

const FlatButton = MKButton.flatButton()
  .build();

class QuestionarioContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)
  }
  render() {
    const { promocao, questionario, perguntas, promocaoReady} = this.props
    console.log(perguntas)
    return (
      <View style={styles.container}>
        {promocaoReady ?
          <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
              <Image source={{uri: promocao.imagemUrl}} resizeMode={Image.resizeMode.contain} style={styles.image} />
              <Text style={styles.promocaoNome}>{promocao.nome}</Text>
            </View>
            <View style={styles.questionarioContainer}>
                <Perguntas perguntas={perguntas} />
            </View>
          </View>
        :
        <View style={styles.spinnerContainer}>
          <Spinner isVisible={true} type={'FadingCircleAlt'} />
        </View>}
      </View>
    )
  }
}

export default createContainer( params => {
  const { promocaoId } = params;
  const handle = Meteor.subscribe('promocoes.single', {id: promocaoId})

  const promocao = Meteor.collection('promocoes').findOne(promocaoId)
  const { questionarioId } = promocao
  const questionario = Meteor.collection('questionarios').findOne(questionarioId)
  const perguntas = Meteor.collection('perguntas').find({questionarioId}, {
    sort: {
      ordem: 1
    }
  })
  return {
    promocaoReady: handle.ready(),
    promocao,
    questionario,
    perguntas
  };
}, QuestionarioContainer)
