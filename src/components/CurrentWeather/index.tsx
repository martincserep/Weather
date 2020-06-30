import React from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Current } from '../../models/Current';
import Moment from 'moment';


interface Props {
    data: Current,
}
const CurrentWeather = ({ data }: Props) => {
  Moment.locale('hu');
  const currentDate = Moment.now();
  const sunsetRaw = Moment.unix(data.sunset);
  const sunset = Moment(sunsetRaw).format('HH:mm');
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <View style={styles.iconContainer}>
    
          {/* {data.icon.isIcon ?
          <Icon style={styles.icon} size={50} name={`${data.icon.name}`} color="#00a8cc" />
        : <Fontisto style={styles.icon} size={50} name={`${data.icon.name}`} color="#00a8cc" />
        } */}
         
          
        </View>
        <View style={styles.dayTextContainer}>
          <Text style={styles.todayText}>
            Today
          </Text>
          <Text style={styles.smallText}>
            {Moment(currentDate).format('ddd, D MMM')}
          </Text>
        </View>
      </View>
      <View style={styles.currentTemperatureContainer}>
        <Text style={styles.currentTemperature}>
          {data.temperature}
        </Text>
        <Text style={styles.temperatureUnit}>
          {data.temperatureUnit}
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.smallText}>
          {data.location}, {data.countryCode}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.smallText}>
          Feels like {data.feelsLike}
        </Text>
        <Fontisto style={styles.dot} name="genderless" size={20} color="#fefefe" />
        <Text style={styles.smallText}>
          Sunset {sunset}
        </Text>
      </View>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fefefe',
    width: '50%',
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    height: '30%',
    width: '100%',
  },
  iconContainer: {
    width: '40%',
    alignContent: 'space-around',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  dayTextContainer: {
    width: '60%',
    alignSelf: 'flex-end'
  },
  todayText: {
    fontSize: 35,
    color: '#fefefe'
  },
  smallText: {
    fontSize: 15,
    color: '#efefef'
  },
  currentTemperatureContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 25,
    height: '40%',
    width: '100%',
    alignItems: 'center',
  },
  currentTemperature: {
    color: '#fefefe',
    fontSize: 50,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  temperatureUnit: {
    color: '#fefefe',
    fontSize: 20,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '15%',
    alignItems: 'center',
  },
  locationContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // marginVertical: 5,
    height: '15%',
    alignItems: 'center',
  },
  dot: {
    marginHorizontal: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
