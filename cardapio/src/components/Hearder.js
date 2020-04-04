import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Constants from 'expo-constants';


export default function Header(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <FontAwesome name="bars" size={25} color="#dff9fb" />
      </TouchableOpacity>
      <Text style={styles.title}>Cardapio RU</Text>
      <Text></Text>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#30336b",
    paddingHorizontal: 15,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    color: "#dff9fb",
    fontSize: 16,
    fontWeight: 'bold',
  }
})
