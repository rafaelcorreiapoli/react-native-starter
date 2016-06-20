import Spinner from 'react-native-spinkit'

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Loading = ({}) => (
  <View style={styles.container}>
    <Spinner isVisible={true} type={'FadingCircleAlt'} />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
