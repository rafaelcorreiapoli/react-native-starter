import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Meteor from 'react-native-meteor';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
  MKTextField,
  mdl
} = MK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F44336'
  },
  titleContainer: {
    flex: 2.5,
    alignSelf: 'stretch',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  errorContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  dividerRule: {
    flex: 4,
    backgroundColor: '#fff',
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
    color: 'black',
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
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textDecorationLine: 'underline',
    marginLeft: 10
  },
  errorMessage: {
    color: 'red',
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10
  },
  inputWithIcon: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  }
})
const EmailInput = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textInput)
  .withFloatingLabelFont({
    color: '#FFF',
    fontSize: 10,
    fontWeight: '200'
  })
  .withHighlightColor('#FFF')
  .withPlaceholderTextColor('#FFF')
  .withTintColor('#DDD') // underline color
  .withSelectionColor('red')
  .withTextInputStyle({color: '#FFF'})
  .build();

const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('Password')
  .withFloatingLabelFont({
    color: '#FFF',
    fontSize: 10,
    fontWeight: '200',
  })
  .withHighlightColor('#FFF')
  .withPlaceholderTextColor('#FFF')
  .withTintColor('#DDD') // underline color
  .withTextInputStyle({color: '#FFF'})
  .withStyle(styles.textInput)
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
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSignIn() {
    const {email, password} = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      console.log(err)
      if (!err) {
        Actions.restaurantes();
      } else {
        this.setState({
          error: err.reason
        })
      }
    })
  }
  render() {
    const SignInButton = MKButton.coloredButton()
    .withText("Sign In")
    .withBackgroundColor('#D32F2F')
    .withTextStyle({
      fontFamily: 'Damascus',
      color: 'white'
    })
    .withStyle(styles.signInButton)
    .withOnPress(this.handleSignIn.bind(this))
    .build();

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('@assets/img/logo.png')} style={styles.logo} resizeMode={Image.resizeMode.contain}/>
        </View>
        { this.state.error ?
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              {this.state.error}
            </Text>
          </View>
          : null
        }

        <View style={styles.formInputsContainer}>
          <View style={styles.inputWithIcon}>
            <Icon name="ios-person-outline" color="#FFF" size={25} style={{flex: .1, marginTop: 15, marginRight: 10}}/>
            <EmailInput style={{flex: 1}} onChangeText={(email) => {this.setState({email})}} />
          </View>
          <View style={[styles.inputWithIcon, {marginTop: 5}]}>
            <Icon name="ios-unlock-outline" color="#FFF" size={25} style={{flex: .1, marginTop: 15, marginRight: 10}}/>
            <PasswordInput style={{flex: 1}} onChangeText={(password) => {this.setState({password})}}/>
          </View>


          <SignInButton />
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
      </View>
    )
  }
}


export default LoginContainer
