/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  MKRadioButton,
} from 'react-native-material-kit';

const SelectWidget = ({
  opcoes = [],
  onChange
}) => {
  const radioGroup = new MKRadioButton.Group();
  let data
  const handleSelectChange = (index, val) => {
    val && onChange(opcoes[index].valor)
  }
  return (
    <View>
      {
        opcoes.map((opcao, i) => (
          <View key={i} style={styles.radioContainer}>
            <MKRadioButton
              onCheckedChange={(res) => handleSelectChange(i,res.checked)}
              checked={!i}
              group={radioGroup}
            />
            <Text style={styles.radioText}>{opcao.texto}</Text>
          </View>
        ))
      }
    </View>
  )
};

export default SelectWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioText: {
    fontSize: 10
  },
});
