import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import TextWidget from '@widgets/TextWidget'
import SelectWidget from '@widgets/SelectWidget'
import CheckboxWidget from '@widgets/CheckboxWidget'
import SliderWidget from '@widgets/SliderWidget'

const TEXT = 0;
const CHECKBOX = 1;
const SELECT = 2;
const RATING = 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: 8,
    marginBottom: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titulo: {
    flex: 1,
    fontSize:10,
    color: 'black'
  },
  number: {
    fontSize: 24,
    color: '#d3d3d3',
    marginRight: 10,
    marginLeft: 5
  },
})

class Pergunta extends Component {
  constructor(props) {
    super(props)

    this.state = {
      respostas: []
    }
    this.handleChangeValue = this.handleChangeValue.bind(this)
  }
  handleChangeValue(val) {
    const { onChange } = this.props
    onChange(val)
  }
  render() {
    const {
      titulo,
      tipo,
      opcoes,
      indice
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.number}>
            {indice}
          </Text>
          <Text style={styles.titulo}>
            {titulo}
          </Text>
        </View>
        {(() => {
          switch (tipo) {
            case TEXT:     return <TextWidget onChange={this.handleChangeValue} />;
            case CHECKBOX: return <CheckboxWidget opcoes={opcoes} onChange={this.handleChangeValue}/>;
            case SELECT:   return <SelectWidget onChange={this.handleChangeValue} opcoes={opcoes} />;
            case RATING:   return <SliderWidget onChange={this.handleChangeValue}/>;
            default:       return <TextWidget />;
          }
        })()}
      </View>
    )
  }
}

Pergunta.propTypes = {
  onChange: PropTypes.func
}

export default Pergunta;
