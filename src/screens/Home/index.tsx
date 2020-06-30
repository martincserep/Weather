import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  Modal,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import HourlyForecast from "../../components/HourlyForecast";
import CurrentWeather from "../../components/CurrentWeather";
import { Current } from "../../models/Current/index";
import { RainItemModel } from "../../models/RainItemModel";
import { HourItemModel } from "../../models/HourItemModel/index";
import env from "../../../env";
import TemperatureUnit from "../../utils/TemperatureUnit";
import Weather from "../../services/Weather";
import { CurrentModel } from "../../services/Weather/CurrentModel";
import Storage from "../../utils/Storage/index";
import { WeatherConditionCode } from "src/services/OpenWeatherMap";
import WeatherConditionIcon from "../../services/Weather/WeatherConditionIcon";
import WeatherConditionText from "../../services/Weather/WeatherConditionText";
import { IconModel } from "../../models/IconModel/index";
import { HourlyRootModel } from "src/services/Weather/HourlyRootModel";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  weather: any;
  defaultIcon: IconModel = new IconModel(false, "sun");

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      currentWeather: Current,
      hourlyWeather: Array<HourItemModel>(),
      city: "Hajdúböszörmény",
      cityRaw: "Hajdúböszörmény",
      countryCode: "Hu",
      temperature: 0,
      temperatureUnit: TemperatureUnit.CELCIUS,
      emoji: "⛅️",
      conditionName: "loading",
      locationFormModalVisibility: false,
      modalVisible: false,
    };

    this.weather = new Weather({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  async componentDidMount() {
    const hourlyForecastData = [
      new HourItemModel(
        "2020-06-26 15:00:00",
        new IconModel(false, "sun"),
        15,
        "°C"
      ),
      new HourItemModel(
        "2020-06-26 18:00:00",
        new IconModel(false, "sun"),
        15,
        "°C"
      ),
      new HourItemModel(
        "2020-06-26 21:00:00",
        new IconModel(false, "sun"),
        15,
        "°C"
      ),
      new HourItemModel(
        "2020-06-27 00:00:00",
        new IconModel(false, "sun"),
        14,
        "°C"
      ),
      new HourItemModel(
        "2020-06-27 03:00:00",
        new IconModel(false, "sun"),
        14,
        "°C"
      ),
      new HourItemModel(
        "2020-06-27 06:00:00",
        new IconModel(false, "sun"),
        15,
        "°C"
      ),
    ];
    this.setState({
      currentWeather: new Current(
        20,
        "°C",
        "Budapest",
        "Hu",
        21,
        1592764535,
        this.defaultIcon
      ),
      hourlyWeather: hourlyForecastData,
    });
    try {
      // await this.fetchPreviouslyStoredData();
      this.fetchData();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  async fetchPreviouslyStoredData() {
    try {
      let data = await this.weather.getPreviouslyStoredCurrent();
      // data !== null ? this.updateStateWithWeatherData(data) : this.setState({ city: 'Budapest' });
    } catch (error) {
      throw error;
    }
  }

  async fetchData({
    city = this.state.city,
    unit = this.state.unit,
    updateState = true,
  } = {}) {
    try {
      let data: CurrentModel = await this.weather.getCurrent({ city, unit });
      let hourData: HourlyRootModel = await this.weather.getHours({
        city,
        unit,
      });
      if (!updateState) {
        return data;
      }
      let hours = hourData.list.map((current) => {
        return new HourItemModel(
          current.dt_txt,
          WeatherConditionIcon.getForCode(current.weather[0].id, false),
          parseFloat(current.main.temp.toFixed(0)),
          "°C"
        );
      });
      this.setState({ temperatureUnit: unit });
      this.setState({ hourlyWeather: hours });
      this.updateStateWithWeatherData(data);
      console.log(data)
    } catch (error) {
      throw error;
    }
  }

  updateStateWithWeatherData(data: CurrentModel) {
    // console.error(data.weather[0].id)
    const icon: IconModel = WeatherConditionIcon.getForCode(
      data.weather[0].id,
      false
    );
    // console.error(icon.isIcon)
    // const icon = new IconModel(rawIcon.isIcon, rawIcon.name);
    // const icon = new IconModel(false, 'sun');
    // console.error(icon.name)
    const newWeatherData = new Current(
      parseFloat(data.main.temp.toFixed(1)),
      "°C",
      data.name,
      data.sys.country,
      parseFloat(data.main.feels_like.toFixed(1)),
      data.sys.sunset,
      icon
    );
    // console.error(newWeatherData)
    this.setState({ currentWeather: newWeatherData });
  }
 
  refreshWeatherData() {
    let newCity = this.state.cityRaw;
    let city = this.state.city;
    this.setState({city: oldCity})
    try {
      this.fetchData({ city:newCity });
    } catch (error) {
      Alert.alert(error.message);
    }
    this.setState({modalVisible: false})
  }

  render() {
    const rainData = [
      new RainItemModel(false, 30, 2),
      new RainItemModel(true, 40, 4),
      new RainItemModel(false, 50, 6),
      new RainItemModel(false, 80, 8),
      new RainItemModel(false, 100, 10),
      new RainItemModel(false, 20, 12),
    ];
    return (
      <View style={styles.container}>
        <Modal
        animationType="slide"
        animated={true}
        visible={this.state.modalVisible}
        transparent={true}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalClose} onPress={() => this.setState({modalVisible: false})}>
            <Ionicons name={'ios-close-circle-outline'} size={25} color={'#fefefe'}/>
          </TouchableOpacity>
          <Text
          style={{fontSize:25, color: '#fefefe'}}
          >Type the location...</Text>
          <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, color: '#fefefe'}}
        value={this.state.cityRaw}
        onChangeText={(text) => this.setState({cityRaw: text})}
      />
      <Button
      onPress={() => {this.refreshWeatherData()}}
      title={'Done'}
      color="#fefefe">
      </Button>
        </View>

        </Modal>
        <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.locationChooser} onPress={() => this.setState({modalVisible: true})}>
          <Ionicons name={'ios-pin'} size={25} color={'#fefefe'}/>
          <Text style={{fontSize:25, color: '#fefefe', marginLeft: 10}}>{this.state.city}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.currentWeatherContainer}>
          <CurrentWeather data={this.state.currentWeather} />
        </View>
        <View style={styles.hourlyWeatherContainer}>
          <HourlyForecast data={this.state.hourlyWeather} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000839",
    justifyContent: 'center',
  },
  currentWeatherContainer: {
    height: "40%",
    alignItems: "center",
    alignSelf: "center",
  },
  hourlyWeatherContainer: {
    height: "40%",
  },
  locationContainer: {
    height: "10%",
    flexDirection: 'column'
  },
  modalView: {
    // alignContent: 'center',
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: '70%',
    height: "20%",
    width: "100%",
    backgroundColor: "#111d5e",
    color: '#fefefe',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginRight: '10%'

  },
  locationChooser: {
    borderWidth: 2,
    borderColor: '#fefefe',
    width: '70%',
    padding: 5,
    alignContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  }
});
