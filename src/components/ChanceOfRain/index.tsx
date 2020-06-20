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
          <RainItem active={false} hour={2} period={'AM'} />
          <RainItem active={true} hour={4} period={'AM'} />
          <RainItem active={false} hour={6} period={'AM'} />
          <RainItem active={false} hour={8} period={'AM'} />
          <RainItem active={false} hour={10} period={'AM'}/>
          <RainItem active={false} hour={12} period={'AM'} />
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
    // marginVertical: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    height: '80%'
  }
});
