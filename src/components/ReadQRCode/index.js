/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner'
import Icon from 'react-native-vector-icons/Ionicons';


export default class LerCupomss extends Component {
  constructor(props) {
    super(props)

    this.state({
      token: ''
    })
  }
  handleNaoUsarCupom() {
    this.setState({
      showingAlert: false
    })
  }
  handleUsarCupom(token) {
    Meteor.call('cupons.claim', {token}, (err, res) => {
      console.log('err', err);
      console.log('res', res);
      this.setState({
        showingAlert: false
      })
    })
  }


  barcodeReceived({data}) {
    const { showingAlert } = this.state

    if (!showingAlert) {
      this.setState({
        showingAlert: true
      })
      Alert.alert(
        'QRCode válido!',
        data,
        [
          {text: 'Não', onPress:() => this.handleNaoUsarCupom(), style: 'cancel'},
          {text: 'Sim', onPress: () => this.handleUsarCupom(data)}
        ]
      )
    }
  }

  render() {
    const { token } = this.state
    return (
      <View style={styles.container}>
        {token ?
        <View>
          <Icon
            name="ios-checkmark-circle-outline"
            color="green"
            size={50} />
          <Text>Cupom Válido!</Text>
          <Text>{token}</Text>

        </View>
        :
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived}
          style={{ flex: 1 }}
          torchMode='off'
          cameraType='back'
        />
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
