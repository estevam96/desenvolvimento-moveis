import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import HeroServices from '@services/HeroServices';
import Hero from '@models/Hero'
import { HomeScreenNavigationProp } from '@/@types';

const Home: React.FC = () => {
  const [heros, setHeros] = React.useState<[Hero]>();
  const navigate = useNavigation<HomeScreenNavigationProp>();
  
  function findAllHeros() {
    HeroServices.findAll().then(({ _array }) => {
      setHeros(_array);
    });
  }

  React.useLayoutEffect(() => {
    navigate.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.buttonPlus}
          onPress={() => navigate.navigate("Register")}
        >
          <FontAwesome name="plus-square-o" size={30} color="black" />
        </TouchableOpacity>
      ),
    })
  },[]);

  useFocusEffect(() => {
    findAllHeros();
  })

  const _keyExtractor = (item:Hero, index: number) => (item.id,index.toString());

  const _renderItem = ({ item }:{item:Hero}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate.navigate("Show", {heroId: item.id})}
      >
        <Image source={{uri: item.urlImage}} style={styles.itemImg}/>
        <View style={styles.itemData}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.itemDescription}
          >{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={heros}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  itemContainer: {
    width: '100%',
    height: 80,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
  },
  itemImg: {
    height: 70,
    width: 60,
    marginTop: 5,
  },
  itemData: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  itemDescription: {
    width: "80%"
  },
    buttonPlus: {
    paddingHorizontal: 20,
  }
});
export default Home;
