import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#000839' />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000839',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  currentWeatherContainer: {
    height: '40%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  hourlyWeatherContainer: {
    height: '30%',
  },
  chanceOfRainContainer: {
    height: '30%',
  }
});
