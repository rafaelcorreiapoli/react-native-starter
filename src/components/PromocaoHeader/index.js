/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const PromocaoHeader = ({
  imagemUrl,
  nome
}) => (
  <View style={styles.container}>
    <Image source={{uri: imagemUrl}} resizeMode={Image.resizeMode.contain} style={styles.image} />
    <Text style={styles.nome}>{nome}</Text>
  </View>
);

export default PromocaoHeader;

const styles = StyleSheet.create({
  container: {
    height: 80
  },
  image: {
    flex: 1
  },
  nome: {
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
