import React from 'react'
import { Provider } from 'react-redux'
import createStore from '@store/create'
import Router from '@scenes'
import {
  setTheme
} from 'react-native-material-kit';

setTheme({checkboxStyle: {
  fillColor: '#F44336',
  borderOnColor: '#F44336',
  borderOffColor: '#B6B6B6',
  rippleColor: 'rgba(244, 67, 54, 0.15)',
}});
setTheme({radioStyle: {
  fillColor: '#F44336',
  borderOnColor: 'rgba(244, 67, 54, 0.6)',
  borderOffColor: '#B6B6B6',
  rippleColor: 'rgba(244, 67, 54, 0.15)',
}});
setTheme({sliderStyle:{
  lowerTrackColor: '#F44336',
  upperTrackColor: '#B6B6B6'
}})
setTheme({textfieldStyle:{
  tintColor: '#B6B6B6',
  highlightColor: '#F44336'
}})

const Kernel = () => (

  <Provider store={createStore()}>
    <Router />
  </Provider>
)

export default Kernel
