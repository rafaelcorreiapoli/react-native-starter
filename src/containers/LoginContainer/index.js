import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import Icon from 'react-native-vector-icons/FontAwesome';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
  MKTextField,
  mdl
} = MK;

const styles = StyleSheet.create({
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10
  },
  signInButton: {
    marginTop: 20,
    width: 200
  }
})
const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont({
    fontSize: 10,
    fontWeight: '200',
  })
  .withKeyboardType('numeric')
  .build();

const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('Password')
  .withDefaultValue('!123')
  .withStyle(styles.textfieldWithFloatingLabel)
  .build();


const ColoredRaisedButton = MKButton.coloredButton()
.withText('SIGN IN')
.withStyle(styles.signInButton)
.withOnPress(() => {
  console.log("Hi, it's a colored button!");
})
.build();


class LoginContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>Login</Title>
        <TextfieldWithFloatingLabel />
        <PasswordInput />
        <ColoredRaisedButton />
      </Container>
    )
  }
}


export default LoginContainer
