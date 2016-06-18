import React, { Element, PropTypes } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MKButton,
  MKColor,
  MKIconToggle,
} from 'react-native-material-kit';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    //margin: 10,
    marginBottom: 15,
    borderColor: '#eee',
    borderWidth: 0.5
  },
  headerContainer: {
    //backgroundColor: 'green',
    height: 80,
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
  logo: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 30,
    width: 30,
    opacity: 0.5
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
  descricaoText: {
    fontSize: 8,
    fontWeight: '100',
    color: '#727272',
    //marginBottom: 10
  },
  titleText: {
    flex: 1,
    fontSize: 10,
    marginBottom: 5,
    color: '#212121',
  },
  button: {
    borderRadius: 0,
    height: 30
  },
  titleContainer: {
    flexDirection: 'row'
  },
  tempoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  iconTempo: {
    marginRight: 5,
    color: '#727272'
  },
  tempoText: {
    fontSize: 10,
    textAlignVertical: 'center',
    color: '#727272'
  }
});

const BotaoResponder = MKButton.coloredButton()
.withText("Eu quero!")
.withBackgroundColor('#4CAF50')
.withStyle(styles.button)
.build();

const Promocao = ({
  _id,
  nome,
  validoAte,
  descricao,
  imagemUrl,
  restauranteId,
  onClickResponder,
  logoUrl,
  tempo
}) => {
  console.log(onClickResponder)
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{uri: imagemUrl}}
          resizeMode={Image.resizeMode.contain} />
        <Image
          style={styles.logo}
          source={{uri: logoUrl}}
          resizeMode={Image.resizeMode.contain} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{nome}</Text>
          <View style={styles.tempoContainer}>
            <Icon name="ios-clock-outline" size={14} style={styles.iconTempo}/>
            <Text style={styles.tempoText}>5 min</Text>
          </View>
        </View>
        <Text style={styles.descricaoText}>{descricao}</Text>
      </View>
      <BotaoResponder onPress={() => {onClickResponder(_id, nome)}}/>
    </View>
  )
}
Promocao.propTypes =  {
  nome: PropTypes.string,
  validoAte: PropTypes.object,
  descricao: PropTypes.string,
  imagemUrl: PropTypes.string,
  restauranteId: PropTypes.string,
  onClickResponder: PropTypes.func,
  tempo: PropTypes.number,
  logoUrl: PropTypes.string
}
export default Promocao;
