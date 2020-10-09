import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(0);

  const startTime = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  const pauseTime = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  }

  const resumeTime = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }

  const resetTime = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTime(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    const getMinutes = `0${Number(minutes) % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.stopwatch}>{formatTime()}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={pauseTime} style={styles.buttonInline}>
          <FontAwesome5 name="pause" size={20} color="#ecf0f1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={startTime} style={styles.butonColor}>
          <FontAwesome5 name="play" size={20} color="#ecf0f1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTime} style={styles.buttonInline}>
          <FontAwesome5 name="undo" size={20} color="#ecf0f1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#7D8298"
  },
  stopwatch: {
    fontFamily: 'RobotoMono_500Medium',
    fontSize: 30,
  },
  containerButtons: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    marginTop: 20,
  },
  buttonInline: {
    width: 35,
    height: 35,
    padding: 5,
    borderColor: "#ecf0f1",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  butonColor: {
    width: 45,
    height: 45,
    padding: 5,
    backgroundColor:"#F26C53",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  }
});

export default Stopwatch;