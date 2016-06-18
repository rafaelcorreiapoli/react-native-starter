import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  MKSlider,
} from 'react-native-material-kit';

import _ from 'underscore'

const SliderWidget = ({
  onChange
}) => {

  const handleSliderChange = (val) => {
    onChange(val)
  }
  const t = _.debounce(handleSliderChange, 100)
  return (
    <MKSlider
      min={0}
      max={5}
      value={3}
      style={styles.slider}
      onConfirm={handleSliderChange}
    />
  )
};

export default SliderWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1
  },
});
