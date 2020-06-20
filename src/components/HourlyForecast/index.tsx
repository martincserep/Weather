import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HourItem from '../common/HourItem';

export default function HourlyForecast() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <HourItem time={2} period={'AM'} weather={'rain'} temperature={20} temperatureUnit={'°C'} />
        <HourItem time={4} period={'AM'} weather={'rain'} temperature={20} temperatureUnit={'°C'} />
        <HourItem time={6} period={'AM'} weather={'rain'} temperature={19} temperatureUnit={'°C'} />
        <HourItem time={8} period={'AM'} weather={'rain'} temperature={19} temperatureUnit={'°C'} />
        <HourItem time={10} period={'AM'} weather={'rain'} temperature={18} temperatureUnit={'°C'} />
        <HourItem time={12} period={'AM'} weather={'rain'} temperature={17} temperatureUnit={'°C'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fefefe',
    width: '100%',
  }
});
