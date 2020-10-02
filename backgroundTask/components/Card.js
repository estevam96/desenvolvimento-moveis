import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet } from 'react-native';


const CardProfile = ({ children }) => (
  <Card containerStyle={style.container} wrapperStyle={style.wrapper} >
    {children}
  </Card>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: "#22215b",
    borderRadius: 20,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})

export default CardProfile;