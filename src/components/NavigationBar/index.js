/* @flow */
import React, { Component } from 'react'
import { MKButton, MKColor } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons'
import NavigationBar from 'react-native-navbar'
import { View, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';
const FlatButton = MKButton.flatButton()
  .build();

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0
  },
  navbar: {
    backgroundColor: '#F44336'
  }
})
class MenuButton extends Component {
  render() {
    return (
      <FlatButton onPress={this.props.handleClick}>
        <Icon size={30} name={this.props.iconName} backgroundColor="rgba(0,0,0,0)" color="white"/>
      </FlatButton>
    )
  }
}

class NavBar extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };
  handleOpenMenu() {
    let { drawer } = this.context;
    drawer.open()
  }
  handleBackButton() {
    Actions.pop()
  }
  render() {
    const { title, backButton } = this.props;

    const titleConfig = {
      title,
      tintColor: 'white'
    };

    const leftButton = backButton ?
      <MenuButton handleClick={this.handleBackButton.bind(this)} iconName="md-arrow-back" /> :
      <MenuButton handleClick={this.handleOpenMenu.bind(this)} iconName="md-menu" />

    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navbar}
          title={titleConfig}
          leftButton={leftButton} />
      </View>
    );
  }
}

export default NavBar;
