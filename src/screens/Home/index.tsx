import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import ChanceOfRain from "../../components/ChanceOfRain";
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

export default class Home extends Component {
  weather: any;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      currentWeather: Current,
      city: "Hajdúböszörmény",
      countryCode: "Hu",
      temperature: 0,
      temperatureUnit: TemperatureUnit.CELCIUS,
      emoji: "⛅️",
      conditionName: "loading",
      locationFormModalVisibility: false,
    };

    this.weather = new Weather({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  async componentDidMount() {
    this.setState({
      currentWeather: new Current(
        20,
        "°C",
        "Budapest",
        "Hu",
        21,
        1592764535,
        new IconModel(false, "sun")
      ),
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
      let data = await this.weather.getCurrent({ city, unit });
      if (!updateState) {
        return data;
      }

      this.setState({ temperatureUnit: unit });
      this.updateStateWithWeatherData(data);
    } catch (error) {
      throw error;
    }
  }
  // data.sys.sunset

  updateStateWithWeatherData(data: CurrentModel) {
    const rawIcon: IconModel = WeatherConditionIcon.getForCode(
      data.weather.id,
      false
    );
    const icon = new IconModel(rawIcon.isIcon, rawIcon.name);
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

  handlePressLocation() {
    this.setState({ locationFormModalVisibility: true });
  }

  handlePressLocationFormModalCancel() {
    this.setState({ locationFormModalVisibility: false });
  }

  async handleSubmitEditingLocationFromModal(city: any) {
    try {
      await this.fetchData({ city });
      this.setState({ locationFormModalVisibility: false });
    } catch (error) {
      Alert.alert(error.message);
    }
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
    const hourlyForecastData = [
      new HourItemModel(false, 2, "night-alt-cloudy", 15, "°C"),
      new HourItemModel(true, 4, "night-alt-cloudy", 15, "°C"),
      new HourItemModel(false, 6, "night-alt-cloudy", 15, "°C"),
      new HourItemModel(false, 8, "rain", 14, "°C"),
      new HourItemModel(false, 10, "rain", 14, "°C"),
      new HourItemModel(false, 12, "day-sunny", 15, "°C"),
    ];
    return (
      <View style={styles.container}>
        <View style={styles.currentWeatherContainer}>
          <CurrentWeather data={this.state.currentWeather} />
        </View>
        <View style={styles.hourlyWeatherContainer}>
          <HourlyForecast data={hourlyForecastData} />
        </View>
        <View style={styles.chanceOfRainContainer}>
          <ChanceOfRain data={rainData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000839",
  },
  currentWeatherContainer: {
    height: "40%",
    alignItems: "center",
    alignSelf: "center",
  },
  hourlyWeatherContainer: {
    height: "30%",
  },
  chanceOfRainContainer: {
    height: "30%",
  },
});
