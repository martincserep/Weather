import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RainItem from '../common/RainItem';

export default function ChanceOfRain() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chance of rain</Text>
      <View style={styles.dataContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>sunny</Text>
          <Text style={styles.label}>rainy</Text>
          <Text style={styles.label}>heavy rain</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <RainItem hour={2} active={false} />
          <RainItem hour={4} active={true} />
          <RainItem hour={6} active={false} />
          <RainItem hour={8} active={false} />
          <RainItem hour={10} active={false} />
          <RainItem hour={12} active={false} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fefefe',
    height: '100%'
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '80%',
    marginLeft: 10,
  },
  title: {
    color: '#fefefe',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    color: '#fefefe',
    fontWeight: '200',
    marginVertical: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    alignContent: 'space-between',
    height: '100%'
  }
});
