import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
    time: number,
    period: string,
    weather: string,
    temperature: number,
    temperatureUnit: string,
    isActive: boolean
}

const HourItem = ({ time, period, weather, temperature, temperatureUnit, isActive }: Props) => {
  return (
    <View style={isActive ? activeStyles.container : styles.container}>
      <View style={isActive ? activeStyles.hourContainer : styles.hourContainer}>
          <Text style={isActive ? activeStyles.hour : styles.hour}>
            {time}{period}
          </Text>
      </View>
      <View style={isActive ? activeStyles.iconContainer : styles.iconContainer}>
        <Icon name={`${weather}`} size={25} color="#fefefe" />
      </View>
      <View style={isActive ? activeStyles.temperatureContainer : styles.temperatureContainer}>
          <Text style={isActive ? activeStyles.temperature : styles.temperature}>
              {temperature}
          </Text>
          <Text style={isActive ? activeStyles.temperatureUnit : styles.temperatureUnit}>
              {temperatureUnit}
          </Text>
      </View>
    </View>
  );
}

export default HourItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fefefe',
    borderColor: '#fefefe',
    borderWidth: 0.5,
    borderRadius: 1000,
    marginHorizontal: 5,
    height: '85%',
    minWidth: 50,
    width: 'auto',
    backgroundColor: '#00005c',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  idle: {
    backgroundColor: '#00005c',
  },
  activeBar: {
    backgroundColor: '#ffffff',
  },
  hourContainer: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hour: {
    color: '#fefefe',
    fontWeight: '300'
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#000045',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureContainer: {
    height: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: '#fefefe',
    fontSize: 25,
  },
  temperatureUnit: {
    color: '#fefefe',
    fontWeight: '300'
  },
});

const activeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f0f0f',
    borderColor: '#fefefe',
    borderWidth: 0.5,
    borderRadius: 1000,
    marginHorizontal: 5,
    height: '90%',
    minWidth: 70,
    width: 'auto',
    backgroundColor: '#bbbbbb',
    paddingHorizontal: 10,
  },
  hourContainer: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hour: {
    color: '#0f0f0f',
    fontWeight: '300'
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureContainer: {
    height: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: '#0f0f0f',
    fontSize: 25,
  },
  temperatureUnit: {
    color: '#0f0f0f',
    fontWeight: '300'
  },
});
