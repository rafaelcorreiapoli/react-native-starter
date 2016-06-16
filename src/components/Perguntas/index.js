import React, { Element, PropTypes } from 'react'
import { View, Image, Text, StyleSheet, ListView} from 'react-native'
import Pergunta from '@components/Pergunta'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flex: 1,
  },
  listView: {
    alignSelf: 'stretch'
  }
})

const Perguntas = ({
  perguntas
}) => {
  const renderRow = (pergunta) => {
    return (
      <Pergunta key={pergunta._id} {...pergunta} />
    )
  }
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = ds.cloneWithRows(perguntas);
  return (
    <View style={styles.container}>
      <ListView
        style={styles.listView}
        enableEmptySections={true}
        dataSource={dataSource}
        renderRow={renderRow}
        />
    </View>
  )
}
export default Perguntas;
