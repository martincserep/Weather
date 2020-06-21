import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import ChanceOfRain from '../../components/ChanceOfRain';
import HourlyForecast from '../../components/HourlyForecast';
import CurrentWeather from '../../components/CurrentWeather';
import { Current } from '../../models/Current/index';
import { RainItemModel } from '../../models/RainItemModel';
import { HourItemModel } from '../../models/HourItemModel/index';


export default function Home () {

    
      const currentWeather = new Current(20, '°C', 'Budapest','HU',  17, '20:15', 'night-alt-cloudy')
      const rainData = [
        new RainItemModel(false, 30,2),
        new RainItemModel(true, 40,4),
        new RainItemModel(false, 50,6),
        new RainItemModel(false, 80,8),
        new RainItemModel(false, 100,10),
        new RainItemModel(false, 20,12),
      ]
      const hourlyForecastData = [
        new HourItemModel(false, 2, 'night-alt-cloudy',15,'°C'),
        new HourItemModel(true, 4, 'night-alt-cloudy',15,'°C'),
        new HourItemModel(false, 6, 'night-alt-cloudy',15,'°C'),
        new HourItemModel(false, 8, 'rain',14,'°C'),
        new HourItemModel(false, 10, 'rain',14,'°C'),
        new HourItemModel(false, 12, 'day-sunny',15,'°C'),
      ]
        return (
            <View style={styles.container}>
            <View style={styles.currentWeatherContainer}>
                <CurrentWeather data={currentWeather}/>
            </View>
            <View style={styles.hourlyWeatherContainer}>
                <HourlyForecast data={hourlyForecastData} />
            </View>
            <View style={styles.chanceOfRainContainer}>
                <ChanceOfRain data={rainData}/>
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
    height: '30%',
  },
  chanceOfRainContainer: {
    height: '30%',
  }
});
