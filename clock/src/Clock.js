import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const daysArray = [
  'domingo',
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sábado'
];

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const getCurrentTime = () => {
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    return `${("00" + hours).slice(-2)} : ${("00" + minutes).slice(-2)} : ${("00" + seconds).slice(-2)}`
  }

  useEffect(() => {
    let time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>{daysArray[new Date().getDay()].toUpperCase()}</Text>
      <Text style={styles.timeText}>{getCurrentTime()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9b59b6"
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#ecf0f1'
  },
  timeText: {
    fontSize: 35,
    fontFamily: 'Kanit_700Bold',
    color: '#ecf0f1'
  }
})
export default Clock;