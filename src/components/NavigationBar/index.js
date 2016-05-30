/* @flow */
import React, { Component } from 'react'
import { MKButton, MKColor } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons'
import NavigationBar from 'react-native-navbar'
import { View, StyleSheet} from 'react-native'
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
    backgroundColor: '#db2528'
  }
})
class LeftButton extends Component {
  render() {
    return (
      <FlatButton onPress={this.props.handleClick}>
        <Icon size={30} name="md-menu" backgroundColor="rgba(0,0,0,0)" color="white"/>
      </FlatButton>
    )
  }
}

class NavBar extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };
  handleClick() {
    let { drawer } = this.context;
    drawer.open()
  }
  render() {
    const titleConfig = {
      title: 'Hello, world',
      tintColor: 'white'
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navbar}
          title={titleConfig}
          leftButton={<LeftButton handleClick={this.handleClick.bind(this)}/>} />
      </View>
    );
  }
}

export default NavBar;
