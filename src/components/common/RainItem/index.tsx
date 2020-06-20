import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    hour: number;
    period: string;
    active: boolean;
  }
const percent = 0;
 const RainItem = ({ hour, active, period }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.idle}>
        <Text> </Text>
      </View>
      <View style={[styles.rainChance, active ? styles.activeBar : styles.bar]}>
      <Text> </Text>
      </View>
        <Text style={styles.label}>{hour}{period}</Text>
    </View>
  );
}
export default RainItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    height: '80%',
    minWidth: 40,
    width: 'auto',
    paddingHorizontal: 10,
  },
  idle: {
    height: `${percent}%`,
    // height: `0%`,
    width: '100%',
  },
  rainChance: {
    height: `${100-(percent)}%`,
    // height: `100%`,
    width: '100%',
    borderRadius: 1000,
  },
  activeBar: {
    backgroundColor: '#ffa41b',
  },
    bar: {
    backgroundColor: '#3b6978',
  },
  label: {
    color: '#fefefe',
    fontWeight: '300',
  },
});
