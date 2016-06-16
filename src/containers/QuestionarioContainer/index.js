/* @flow */

import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, ListView, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Restaurante from '@components/Restaurante';
import { v4 } from 'node-uuid';
import Meteor, { createContainer } from 'react-native-meteor';
const MK = require('react-native-material-kit');
const {
  MKButton,
} = MK;


const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1
  }
})

const FlatButton = MKButton.flatButton()
  .build();

class Questionario extends Component<void, void, void> {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Questionario</Text>
      </View>
    )
  }
}

export default Questionario
