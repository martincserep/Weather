import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Fontisto } from '@expo/vector-icons';

interface Props {
    time: number,
    period: string,
    weather: string,
    temperature: number,
    temperatureUnit: string,
}

const HourItem = ({ time, period, weather, temperature, temperatureUnit }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.hourContainer}>
          <Text style={styles.hour}>
            {time}{period}
          </Text>
      </View>
      <View style={styles.iconContainer}>
        {/* <Fontisto name="rain" size={40} color="#fefefe" /> */}
      </View>
      <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>
              {temperature}
          </Text>
          <Text style={styles.temperatureUnit}>
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
    height: '90%',
    minWidth: 70,
    width: 'auto',
    backgroundColor: '#00005c',
    paddingHorizontal: 10,
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
