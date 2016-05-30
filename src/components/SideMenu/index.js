/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10
  },
  background: {
    alignSelf: 'stretch',
    paddingLeft: 16,
    justifyContent: 'center',
    height: 120,
    width: null
  },
  name: {
    color: 'white'
  },
  email: {
    color: '#FFF',
    fontSize: 10
  },
  item: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    //backgroundColor: 'yellow',
    alignItems: 'center',
    height: 48
  },
  itemLabel: {
    marginLeft: 16,
    fontSize: 14,
    color: 'rgba(0,0,0,0.87)'
  },
  itemIcon: {
    margin: 16,
    color: 'rgba(0,0,0,0.6)'
  },
  itemSelected: {
    backgroundColor: "#EAEAEA"
  },
  itemLabelSelected: {
    color: 'black'
  },
  itemIconSelected: {
    color: 'black'
  }
})

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('@assets/img/background.jpg')}>
          <Image source={require('@assets/img/user.jpg')} style={styles.avatar} />
          <Text style={styles.name}>Rafael R. Correia</Text>
          <Text style={styles.email}>rafael.correia.poli@gmail.com</Text>
        </Image>
        <View style={[styles.item,styles.itemSelected]}>
          <Icon size={20} name="md-heart" style={[styles.itemIcon,styles.itemIconSelected]} />
          <Text style={[styles.itemLabel,styles.itemLabelSelected]}>
            Favorites
          </Text>
        </View>
        <View style={styles.item}>
          <Icon size={20} name="md-pricetags" style={styles.itemIcon} />
          <Text style={styles.itemLabel}>
            Tags
          </Text>
        </View>
        <View style={styles.item}>
          <Icon size={20} name="md-cash" style={styles.itemIcon} />
          <Text style={styles.itemLabel}>
            My Money
          </Text>
        </View>
      </View>

    )
  }
}

export default SideMenu;
