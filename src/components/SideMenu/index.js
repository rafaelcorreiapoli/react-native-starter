/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MKButton } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';


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

class SideMenuItem extends Component {
  handleClick() {
    this.props.handleClick(this.props.action);
  }
  render() {
    const active = this.props.active;
    const FlatButton = MKButton.flatButton()
      .build();

    const Wrapper = active ? View : FlatButton;

    return (
      <Wrapper style={[styles.item, active && styles.itemSelected]} onPress={this.handleClick.bind(this)}>
        <Icon size={20} name={this.props.icon} style={[styles.itemIcon, active && styles.itemIconSelected]} />
        <Text style={[styles.itemLabel, active && styles.itemLabelSelected]}>
          {this.props.label} {active ? "a" : "b"}
        </Text>
      </Wrapper>

    )
  }
}
class SideMenu extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };

  handleClick(action) {
    action()
    this.context.drawer.close();
  }
  renderItems() {
    const activeItem = this.props.activeItem;

    return this.props.items.map((item, i) => {
      return <SideMenuItem key={i} {...item} handleClick={this.handleClick.bind(this)} active={i === activeItem}/>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('@assets/img/background.jpg')}>
          <Image source={require('@assets/img/user.jpg')} style={styles.avatar} />
          <Text style={styles.name}>Rafael R. Correia</Text>
          <Text style={styles.email}>rafael.correia.poli@gmail.com</Text>
        </Image>
        {this.renderItems()}
      </View>

    )
  }
}

export default SideMenu;
