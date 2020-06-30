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
import Ionicons from "react-native-vector-icons/Ionicons";

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
		try {
			await this.fetchPreviouslyStoredData();
			this.setState({ cityRaw: this.state.city });
			this.fetchData();
		} catch (error) {
			Alert.alert(error.message);
		}
	}

	async fetchPreviouslyStoredData() {
		try {
			let data = await this.weather.getPreviouslyStoredCurrent();
			let hourData = await this.weather.getPreviouslyStoredHourCurrent();
			data !== null
				? this.updateStateWithWeatherData(data)
				: this.setState({ city: "Hajdúböszörmény" });
			hourData !== null
				? this.updateStateWithHourlyWeatherData(hourData)
				: this.setState({ city: "Hajdúböszörmény" });
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
			this.updateStateWithHourlyWeatherData(hourData);
		} catch (error) {
			throw error;
		}
	}

	updateStateWithWeatherData(data: CurrentModel) {
		const icon: IconModel = WeatherConditionIcon.getForCode(
			data.weather[0].id,
			false
		);
		const newWeatherData = new Current(
			parseFloat(data.main.temp.toFixed(1)),
			"°C",
			data.name,
			data.sys.country,
			parseFloat(data.main.feels_like.toFixed(1)),
			data.sys.sunset,
			icon
		);
		this.setState({ city: data.name });
		this.setState({ currentWeather: newWeatherData });
	}
	updateStateWithHourlyWeatherData(hourData: HourlyRootModel) {
		let hours = hourData.list.map((current) => {
			let icon: IconModel = WeatherConditionIcon.getForCode(
				current.weather[0].id,
				false
				);
			return new HourItemModel(
				current.dt_txt,
				icon,
				parseFloat(current.main.temp.toFixed(0)),
				"°C"
			);
		});
		this.setState({ hourlyWeather: hours });
	}

	refreshWeatherData() {
		let newCity = this.state.cityRaw;
		let city = this.state.city;
		this.setState({ city: newCity });
		try {
			this.fetchData({ city: newCity });
		} catch (error) {
			Alert.alert(error.message);
		}
		this.setState({ modalVisible: false });
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
					transparent={true}
				>
					<View style={styles.modalView}>
						<TouchableOpacity
							style={styles.modalClose}
							onPress={() => this.setState({ modalVisible: false })}
						>
							<Ionicons
								name={"ios-close-circle-outline"}
								size={25}
								color={"#fefefe"}
							/>
						</TouchableOpacity>
						<Text style={{ fontSize: 25, color: "#fefefe" }}>
							Type the location...
						</Text>
						<TextInput
							style={{
								height: 40,
								borderColor: "gray",
								borderWidth: 1,
								color: "#fefefe",
							}}
							value={this.state.cityRaw}
							onChangeText={(text) => this.setState({ cityRaw: text })}
						/>
						<Button
							onPress={() => {
								this.refreshWeatherData();
							}}
							title={"Done"}
							color="#fefefe"
						></Button>
					</View>
				</Modal>
				<View style={styles.locationContainer}>
					<TouchableOpacity
						style={styles.locationChooser}
						onPress={() => this.setState({ modalVisible: true })}
					>
						<Ionicons name={"ios-pin"} size={25} color={"#fefefe"} />
						<Text style={{ fontSize: 25, color: "#fefefe", marginLeft: 10 }}>
							{this.state.city}
						</Text>
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
		justifyContent: "center",
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
		flexDirection: "column",
	},
	modalView: {
		// alignContent: 'center',
		alignSelf: "center",
		justifyContent: "center",
		marginTop: "70%",
		// height: "20%",
		width: "100%",
		backgroundColor: "#111d5e",
		color: "#fefefe",
		padding: 10,
		borderRadius: 20,
	},
	modalClose: {
		alignSelf: "flex-end",
		marginRight: "10%",
		// marginTop: '10%'
	},
	locationChooser: {
		borderWidth: 2,
		borderColor: "#fefefe",
		width: "70%",
		padding: 5,
		alignContent: "space-around",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		flexDirection: "row",
	},
});
