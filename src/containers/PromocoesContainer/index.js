import React, { Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Promocao from '@components/Promocao'
import Meteor, { createContainer } from 'react-native-meteor'
import Spinner from 'react-native-spinkit'

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {

  },
  listView: {
    alignSelf: 'stretch'
  }
})

class PromocoesContainer extends Component<void, void, void> {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  }
  onClickResponder(promocaoId, nome) {
    Actions.promocao({
      promocaoId,
      title: nome
    })
  }
  renderPromocao(promocao) {
    return (
      <Promocao key={promocao._id} {...promocao} onClickResponder={this.onClickResponder} />
    )
  }
  renderLoading() {
    return (
      <Spinner style={styles.spinner} isVisible={true} type={'FadingCircleAlt'} />
    )
  }
  render() {
    const { restauranteId, promocoesReady, promocoes } = this.props;
    const dataSource = this.ds.cloneWithRows(promocoes);

    return (
      <View style={styles.container}>
        {promocoesReady ?
        <ListView
          style={styles.listView}
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={this.renderPromocao.bind(this)}
          />
        : this.renderLoading()}
      </View>
    )
  }
}


export default createContainer(params=>{
  const { restauranteId } = params
  const handle = Meteor.subscribe('promocoes.porRestaurante', {restauranteId});

  return {
    promocoesReady: handle.ready(),
    promocoes: Meteor.collection('promocoes').find({ restauranteId})
  };
}, PromocoesContainer)
