/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner'
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import {Grid, Row, Col } from 'react-native-easy-grid';
const AceitarCupom = MKButton.coloredButton()
.withText('Aceitar')
.withBackgroundColor('#4CAF50')
.build();

const CancelarCupom = MKButton.flatButton()
  .withText('Cancelar')
  .build();

export default class LerCupom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
    }


    this.barcodeReceived = this.barcodeReceived.bind(this)
    this.handleCancelar = this.handleCancelar.bind(this)
    this.handleAceitar = this.handleAceitar.bind(this)
  }

  handleCancelar() {
    const { onRejeitarCupom } = this.props
    this.setState({
      token: ''
    })
    onRejeitarCupom()
  }

  handleAceitar() {
    const { onAceitarCupom } = this.props
    const { token } = this.state
    this.setState({
      token: ''
    })
    onAceitarCupom(token)
  }
  barcodeReceived({data}) {
    this.setState({
      token: data
    })
  }

  render() {
    const { token } = this.state

    return (
      <View style={styles.container}>
        {token ?
        <Grid>
          <Row style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="ios-checkmark-circle-outline"
              color="#4CAF50"
              size={155} />
          </Row>
          <Row size={0.2}>
            <Col style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, color: '#727272'}}>Cupom Válido!</Text>
              <Text style={{fontWeight: 'bold', color: '#212121'}}>{token}</Text>
            </Col>
          </Row>
          <Row style={{margin: 10}}>
            <Col>
              <CancelarCupom onPress={this.handleCancelar} />
            </Col>
            <Col>
              <AceitarCupom onPress={this.handleAceitar} />
            </Col>
          </Row>
        </Grid>
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
  successContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
