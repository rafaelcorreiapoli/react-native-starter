/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  MKCheckbox,
} from 'react-native-material-kit';


export default class CheckboxWidget extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(index, val) {
    const { onChange, opcoes } = this.props
    let { data } = this.state
    if (val) {
      data.push(opcoes[index].valor)
    } else {
      data = data.filter(valor => valor !== opcoes[index].valor)
    }
    this.setState({data})
    onChange(data)
  }

  render() {
    const { opcoes } = this.props
    return (
      <View>
        {
          opcoes.map((opcao, i) => (
            <View key={i} style={styles.checkboxContainer}>
              <MKCheckbox
                onCheckedChange={(res) => this.handleCheckboxChange(i, res.checked)}
                color='red'
                value={opcao.valor}
              />
              <Text style={styles.checkText}>{opcao.texto}</Text>
            </View>
          ))
        }
      </View>
    );
  }
}


export default CheckboxWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkText: {
    fontSize: 10
  },
});
