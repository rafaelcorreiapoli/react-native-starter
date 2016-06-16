import React, { Element, PropTypes } from 'react'
import { View, Image, Text, StyleSheet, ListView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
  MKTextField,
  MKCheckbox,
  MKSlider,
  MKRadioButton
} from 'react-native-material-kit';

const TEXT = 0;
const CHECKBOX = 1;
const SELECT = 2;
const RATING = 3;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: 8
  },
  titulo: {
    flex: 1
  },
  textField: {
    flex: 1
  },
  slider: {
    flex: 1
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const Pergunta = ({
  titulo,
  tipo,
  opcoes
}) => {
  const renderText = () => (
    <MKTextField style={styles.textField} />
  )

  const renderCheckbox = (opcoes = []) => (
    opcoes.map((opcao, i) => (
      <View key={i} style={styles.checkboxContainer}>
        <MKCheckbox
          value={opcao.valor}
        />
        <Text>{opcao.texto}</Text>
      </View>
    ))
  )

  const renderSelect = (opcoes = []) => {
    const radioGroup = new MKRadioButton.Group();
    return opcoes.map((opcao, i) => (
      <View key={i} style={styles.radioContainer}>
        <MKRadioButton
          checked={!i}
          group={radioGroup}
        />
        <Text>{opcao.texto}</Text>
      </View>
    ))
  }


  const renderRating = () => (
    <MKSlider
      min={10}
      max={100}
      value={25}
      style={styles.slider}
    />
  )

  const renderWidget = () => {
    switch(tipo) {
      case TEXT:
      return renderText()
      case CHECKBOX:
      return renderCheckbox(opcoes)
      case SELECT:
      return renderSelect(opcoes)
      case RATING:
      return renderRating()
      default:
      <Text>Unknown</Text>
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {titulo}
      </Text>
      {renderWidget()}
    </View>
  )
}


export default Pergunta;
