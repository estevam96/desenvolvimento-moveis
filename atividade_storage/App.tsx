import React from 'react';
import Constants from 'expo-constants';

import App from './src';
import {Init} from "./src/database";
import { StyleSheet, View } from 'react-native';

export default () => {
  React.useEffect(() => {
    Init();
  });
  return (
    <View style={styles.container}>
      <App />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: Constants.statusBarHeight,
  }
})