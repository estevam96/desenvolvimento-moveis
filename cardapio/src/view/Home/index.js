import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';
import CampiList from '../../components/CampiList';

const background = require('../../../assets/bg.png')
const almoço = require('../../../assets/almoço.png');
const janta = require('../../../assets/janta.png');



const Home = ({ navigation }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal animationType="slide" visible={modal} transparent={false}>
        <CampiList />
        <TouchableOpacity onPress={() => setModal(false)}>
          <Text>Fecha</Text>
        </TouchableOpacity>
      </Modal>
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
        <View style={style.container}>
          <TouchableOpacity onPress={() => setModal(true)}>
            <View style={style.containerTitle}>
              <Entypo name="location" size={25} color="#ecf0f1" />
              <Text style={style.title}>UFC Campus Russas</Text>
            </View>
          </TouchableOpacity>

          <View style={style.optionContainer}>
            <TouchableOpacity
              style={style.option}
              onPress={() => navigation.navigate('refeicao')}
            >
              <ImageBackground source={almoço}
                resizeMode="stretch"
                style={style.optionBG}
              >
                <Text style={style.optionText}>Almoço</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('refeicao')} style={style.option}>
              <ImageBackground
                source={janta}
                resizeMode="stretch"
                style={style.optionBG}
              >
                <Text style={style.optionText}>Janta</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: '#ecf0f1',

  },
  optionContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: '5%'
  },
  option: {
    width: '45%',
    height: 150,
    backgroundColor: "rgba(236, 240, 241,0.3)"
  },
  optionBG: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "flex-end",

  },
  optionText: {
    fontSize: 20,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  }
})

export default Home

