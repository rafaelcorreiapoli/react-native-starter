/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  MKTextField,
} from 'react-native-material-kit';

const TextWidget = ({
  onChange
}) => {
  const onChangeText = (val) => {
    onChange(val)
  }
  return (
    <MKTextField
      onChangeText={onChangeText}
      style={styles.textField}
      textInputStyle={styles.text}
    />
  )
};

export default TextWidget;

const styles = StyleSheet.create({
  textField: {
    flex: 1,
  },
  text: {
    color: '#212121'
  },
});
