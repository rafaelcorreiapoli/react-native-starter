/* @flow */

import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, ListView, View} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Restaurante from '@components/Restaurante';
import { v4 } from 'node-uuid';
import Meteor, { createContainer } from 'react-native-meteor';

Meteor.connect('ws://192.168.1.32:3000/websocket')

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1
  }
})

class RestaurantesContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    restaurantes = [
      {
        minTime: 5,
        maxTime: 10,
        distance: 2.9,
        rating: 5,
        name: 'Dominos',
        category: 'Pizzaria',
        uri: 'http://cdn3.us4palin.com/wp-content/uploads/2011/04/dominos-logo.png'
      },
      {
        minTime: 5,
        maxTime: 10,
        distance: 2.9,
        rating: 5,
        name: 'Mc Donalds',
        category: 'Lanches',
        uri: 'http://iconshow.me/media/images/logo/brand-logo-icon/png/128/mcdonalds-128.png'
      },
      {
        minTime: 5,
        maxTime: 10,
        distance: 2.9,
        rating: 5,
        name: 'Subway',
        category: 'Lanches',
        uri: 'http://www.printablecouponsprint.com/wp-content/uploads/2014/07/SUBWAY.png'
      },
      {
        minTime: 5,
        maxTime: 10,
        distance: 2.9,
        rating: 5,
        name: 'Pizza Hut',
        category: 'Pizzaria',
        uri: 'http://avatarbox.net/avatars/img33/pizza_hut_logo_avatar_picture_33945.jpg'
      }
    ]

    let listFinal = [];
    for (i=0; i<20; i++) {
      listFinal.push({...restaurantes[i % restaurantes.length], id: i});
    }
    this.state = {
      dataSource: ds.cloneWithRows(listFinal)
    }
  }
  renderRestaurante(restaurante) {
    return (
      <Restaurante key={restaurante.id} {...restaurante} />
    )
  }
  renderSeparator(sectionID, rowID) {
    return (
      <View key={v4()} style={{height: 1, backgroundColor: '#dedede'}} />
    )
  }
  render() {
    const { restaurantes } = this.props;

    const dataSource = this.ds.cloneWithRows(restaurantes);

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRestaurante}
          renderSeparator={this.renderSeparator}
          />
      </View>
    )
  }
}

export default createContainer(params=>{
  const handle = Meteor.subscribe('restaurantes');

  return {
    restaurantesReady: handle.ready(),
    restaurantes: Meteor.collection('restaurantes').find()
  };
}, RestaurantesContainer)
