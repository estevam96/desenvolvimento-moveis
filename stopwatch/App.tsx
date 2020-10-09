import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import { Poppins_300Light } from '@expo-google-fonts/poppins';
import Stopwatch from './src/Stopwatch';


export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <Stopwatch />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

