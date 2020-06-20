import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import ChanceOfRain from '../../components/ChanceOfRain';
import HourlyForecast from '../../components/HourlyForecast';
import CurrentWeather from '../../components/CurrentWeather';
import { Current } from '../../models/Current/index';


export default function Home () {

    
      const currentWeather = new Current(20, "°C", 'Budapest','HU',  17, '20:15')
        return (
            <View style={styles.container}>
            <View style={styles.currentWeatherContainer}>
                <CurrentWeather data={currentWeather}/>
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
