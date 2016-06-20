import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, ListView} from 'react-native'
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
    alignSelf: 'stretch',
    backgroundColor: '#eee'
  },
  button: {
    margin: 10
  }
})


export default class Perguntas extends Component {
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(pergunta, j, i) {
    const { onChange } = this.props
    const indice = Number(i) + 1
    const perguntaId = pergunta._id

    return (
      <Pergunta
        key={perguntaId}
        indice={indice}
        onChange={(val) => onChange(perguntaId, val)}
        {...pergunta} />
    )
  }

  render() {
    const { perguntas, renderFooter } = this.props
    const dataSource = this.ds.cloneWithRows(perguntas);
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderFooter={renderFooter}
          />
      </View>
    )
  }
}


export default Perguntas;
