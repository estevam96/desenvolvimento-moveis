import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function Meal() {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Principal</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Assado de Panela </Text>
          <Text style={style.mealDescription}>Creme de Frango* </Text>
        </View>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Vegetariano</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Cozido Vegetariano</Text>
        </View>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Salada</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Alface, Cenoura, Beterraba, R.Branco e Melão</Text>
        </View>

        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Guarnição</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Macarrão Espaguete</Text>
        </View>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Acompanhamentos</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Arroz Branco</Text>
          <Text style={style.mealDescription}>Arroz Integral</Text>
          <Text style={style.mealDescription}>Feijão de Corda </Text>
        </View>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Suco </Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Cajá</Text>
        </View>
        <View style={style.mealTitleContainer}>
          <Text style={style.mealTitle}>Sobremesa</Text>
        </View>
        <View style={style.mealDescriptionContainer}>
          <Text style={style.mealDescription}>Mamão</Text>
          <Text style={style.mealDescription}>Doce</Text>
        </View>
      </View>
    </ScrollView>
  );
}

let style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  mealTitleContainer: {
    width: '80%',
    height: 30,
    backgroundColor: "#30336b",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  mealTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#dff9fb",
  },
  mealDescriptionContainer: {
    width: '80%',
    alignItems: "flex-start",
    paddingHorizontal: 15,
  }
})