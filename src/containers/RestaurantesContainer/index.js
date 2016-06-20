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

Meteor.connect('ws://192.168.1.32:3000/websocket')

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1
  }
})

const FlatButton = MKButton.flatButton()
  .build();

class RestaurantesContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  handleItemClick({_id, nome}) {
    Actions.restaurante({
      restauranteId: _id,
      title: nome
    })
  }
  renderRestaurante(restaurante) {
    return (
      <FlatButton key={restaurante._id} onPress={() => {this.handleItemClick(restaurante)}}>
        <Restaurante {...restaurante} />
      </FlatButton>
    )
  }
  renderSeparator(sectionID, rowID) {
    return (
      <View key={v4()} style={{height: 0.5, backgroundColor: '#eee'}} />
    )
  }
  render() {
    const { restaurantes } = this.props;

    const dataSource = this.ds.cloneWithRows(restaurantes);

    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={this.renderRestaurante.bind(this)}
          renderSeparator={this.renderSeparator}
          />
      </View>
    )
  }
}

export default createContainer(params => {
  const handle = Meteor.subscribe('restaurantes');

  return {
    restaurantesReady: handle.ready(),
    restaurantes: Meteor.collection('restaurantes').find()
  };
}, RestaurantesContainer)
