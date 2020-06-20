import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import ChanceOfRain from '../../components/ChanceOfRain';
import HourlyForecast from '../../components/HourlyForecast';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.currentWeatherContainer}>

      </View>
      <View style={styles.hourlyWeatherContainer}>
        <HourlyForecast />
      </View>
      <View style={styles.chanceOfRainContainer}>
        <ChanceOfRain />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000839',
  },
  currentWeatherContainer: {
    height: '40%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  hourlyWeatherContainer: {
    height: '35%',
  },
  chanceOfRainContainer: {
    height: '30%',
  }
});
