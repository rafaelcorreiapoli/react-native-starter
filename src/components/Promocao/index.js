import React, { Element, PropTypes } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    alignSelf: 'stretch',
    margin: 10,
    borderColor: '#eee',
    borderWidth: 0.5
  },
  headerContainer: {
    //backgroundColor: 'green',
    height: 100,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  infoContainer: {
    //backgroundColor: 'yellow',
    padding: 10,
    //flex: 0.25
  },
  image: {
    flex: 1
  },
  titleContainer: {
    //backgroundColor: 'rgba(0,0,0,0.75)',
    position:'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: 'black'
  },
  descricaoText: {
    fontSize: 10,
    marginBottom: 10
  },
});

const BotaoResponder = MKButton.coloredButton()
.withText("Eu quero!")
.withBackgroundColor('#13A812')
.build();

const Promocao = ({
  _id,
  nome,
  validoAte,
  descricao,
  imagemUrl,
  restauranteId,
  onClickResponder
}) => {
  console.log(onClickResponder)
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{uri: imagemUrl}}
          resizeMode={Image.resizeMode.contain} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{nome}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.descricaoText}>{descricao}</Text>
        <BotaoResponder onPress={() => {onClickResponder(_id, nome)}}/>
      </View>
    </View>
  )
}
Promocao.propTypes =  {
  nome: PropTypes.string,
  validoAte: PropTypes.object,
  descricao: PropTypes.string,
  imagemUrl: PropTypes.string,
  restauranteId: PropTypes.string,
  onClickResponder: PropTypes.func
}
export default Promocao;
