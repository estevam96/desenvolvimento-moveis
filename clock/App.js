import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kanit_700Bold } from '@expo-google-fonts/kanit'
import { AppLoading } from 'expo';

import Clock from './src/Clock';

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
