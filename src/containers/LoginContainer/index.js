import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
  MKTextField,
  mdl
} = MK;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2.5,
    alignSelf: 'stretch',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  formInputsContainer: {
    flex: 2.5,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'green',
    alignSelf: 'stretch'
  },
  socialContainer: {
    flex: .7,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  dividerContainer: {
    flex: .4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  footerContainer: {
    flex: .5,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    flex: 1,
    //backgroundColor: 'red'
  },
  dividerItems: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  dividerText: {
    flex: 1,
    //  backgroundColor: '#da1223',
    color: '#333',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  dividerRule: {
    flex: 4,
    backgroundColor: '#444',
    height: .5,
    marginLeft: 10,
    marginRight: 10
  },
  textInput: {
    //backgroundColor: 'red',
    height: 48,  // have to do it on iOS
    marginTop: 50
  },
  signInButton: {
    marginTop: 40,
    width: 220,
    borderRadius: 0
  },
  socialButton: {
    marginTop: 20,
    height: 35,
    width: 135,
    borderRadius: 0
  },
  socialButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'normal'
  },
  floatingLabelStyle: {
    color: 'white',
    fontSize: 10,
    fontWeight: '200',
  },
  socialButtonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  footerText: {
    color: '#555555',
    textAlign: 'center',
    flex: 1
  },
  signUpText: {
    color: '#FFF',
    textAlign: 'center',
    flex: 1,
    textDecorationLine: 'underline',
    marginLeft: 10
  },
  inputWithIcon: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  }
})
const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textInput)
  .withFloatingLabelFont({
    color: '#888888',
    fontSize: 10,
    fontWeight: '200'
  })
  .withHighlightColor('#FFFFFF')
  .withPlaceholderTextColor('#888888')
  .withTintColor('#555555') // underline color
  .withSelectionColor('red')
  .withTextInputStyle({color: '#FFFFFF'})
  .build();

const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('Password')
  .withFloatingLabelFont({
    color: '#888888',
    fontSize: 10,
    fontWeight: '200',
  })
  .withHighlightColor('#FFFFFF')
  .withPlaceholderTextColor('#888888')
  .withTintColor('#555555') // underline color
  .withTextInputStyle({color: '#FFFFFF'})
  .withStyle(styles.textInput)
  .build();


const SignInButton = MKButton.coloredButton()
.withText("Sign In")
.withBackgroundColor('#db2528')
.withTextStyle({
  fontFamily: 'Damascus',
  color: 'white'
})
.withStyle(styles.signInButton)
.withOnPress(
  () => {
  Actions.restaurantes()
})
.build();

const myButton = (
  <Icon.Button name="ion-person-outline" backgroundColor="#3b5998" style={{flex: 1, borderRadius: 0}}>
    Login with Facebook
  </Icon.Button>
);
const FacebookButton = MKButton.coloredButton()
.withBackgroundColor('#3b5998')
.withStyle(styles.socialButton)
.withTextStyle(styles.socialButtonText)
.withOnPress(() => {
  console.log("Hi, it's a colored button!");
})
.build();



const GooglePlusButton = MKButton.coloredButton()
//.withText()
.withBackgroundColor('#d34836')
.withStyle(styles.socialButton)
.withTextStyle(styles.socialButtonText)
.withOnPress(() => {
  console.log("Hi, it's a colored button!");
})
.build();


class LoginContainer extends Component<void, void, void> {
  // static renderNavigationBar(props) {
  //   const rightButtonConfig = {
  //     title: 'Next',
  //     handler: () => alert('hello!'),
  //   };
  //
  //   const titleConfig = {
  //     title: 'Hello, world',
  //   };
  //
  //   return (
  //       <View style={{flex: 1}}>
  //         <NavigationBar
  //           title={titleConfig}
  //           rightButton={rightButtonConfig} />
  //       </View>
  //   );
  // }
  render() {

    return (
      <Container>
        <View style={styles.titleContainer}>
          <Image source={require('@assets/img/logo.png')} style={styles.logo} resizeMode={Image.resizeMode.contain}/>
        </View>
        <View style={styles.formInputsContainer}>
          <View style={styles.inputWithIcon}>
            <Icon name="ios-person-outline" color="#888" size={25} style={{flex: .1, marginTop: 15, marginRight: 10}}/>
            <TextfieldWithFloatingLabel style={{flex: 1}}/>
          </View>
          <View style={[styles.inputWithIcon, {marginTop: 5}]}>
            <Icon name="ios-unlock-outline" color="#888" size={25} style={{flex: .1, marginTop: 15, marginRight: 10}}/>
            <PasswordInput style={{flex: 1}}/>
          </View>

          <SignInButton />
          {
          /*
          <PasswordInput />
          <SignInButton />
          */
          }
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerItems}>
            <View style={styles.dividerRule} />
            <Text style={styles.dividerText}>
              or
            </Text>
            <View style={styles.dividerRule} />
          </View>
        </View>

        <View style={styles.socialContainer}>
          <FacebookButton>
            <View style={styles.socialButtonView}>
              <Icon name="logo-facebook" size={18} margin={50} color="#FFFFFF" />
              <Text style={styles.socialButtonText}>  Sign in with Facebook</Text>
            </View>
          </FacebookButton>
          <GooglePlusButton>
            <View style={styles.socialButtonView}>
              <Icon name="logo-googleplus" size={18} margin={50} color="#FFFFFF" />
              <Text style={styles.socialButtonText}>  Sign in with Google+</Text>
            </View>
          </GooglePlusButton>
        </View>
        <View style={styles.footerContainer}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>
          <Text style={styles.signUpText}>
            Sign Up Now!
          </Text>
          </View>
        </View>
      </Container>
    )
  }
}


export default LoginContainer
