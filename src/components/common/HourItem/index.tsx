import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

import Moment from "moment";
import { IconModel } from "src/models/IconModel";

interface Props {
	time: string;
	icon: IconModel;
	temperature: number;
	temperatureUnit: string;
}

const HourItem = ({ time, icon, temperature, temperatureUnit }: Props) => {
	Moment.locale("hu");
	let isActive = false;
	let timeToCalculate = parseInt(Moment(time).format("hh"));
	let currentHour = Moment.now();
	let currentDay = Moment(currentHour).format("MM-DD");
	currentHour = parseInt(Moment(currentHour).format("hh"));
	let displayDayRaw = Moment.utc(time);
	let displayDay = Moment(displayDayRaw).format("MM-DD");
	let hourRaw = Moment.utc(time);

	if (
		timeToCalculate <= currentHour &&
		currentHour < timeToCalculate + 3 &&
		currentDay == displayDay
	) {
		isActive = true;
	} else {
		isActive = false;
	}

	return (
		<View style={isActive ? activeStyles.container : styles.container}>
			<View
				style={isActive ? activeStyles.hourContainer : styles.hourContainer}
			>
				<Text style={isActive ? activeStyles.day : styles.day}>
					{Moment(displayDayRaw).format("ddd, DD")}
				</Text>
				<Text style={isActive ? activeStyles.hour : styles.hour}>
					{Moment(hourRaw).format("HH:mm")}
				</Text>
			</View>
			<View
				style={isActive ? activeStyles.iconContainer : styles.iconContainer}
			>
				{icon === undefined ? (
					<Fontisto size={30} name={`sun`} color="#00a8cc" />
				) : icon.isIcon ? (
					<Icon size={30} name={`${icon.name}`} color="#00a8cc" />
				) : (
					<Fontisto size={30} name={`${icon.name}`} color="#00a8cc" />
				)}
			</View>
			<View
				style={
					isActive
						? activeStyles.temperatureContainer
						: styles.temperatureContainer
				}
			>
				<Text style={isActive ? activeStyles.temperature : styles.temperature}>
					{temperature}
				</Text>
				<Text
					style={
						isActive ? activeStyles.temperatureUnit : styles.temperatureUnit
					}
				>
					{temperatureUnit}
				</Text>
			</View>
		</View>
	);
};

export default HourItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		color: "#fefefe",
		borderColor: "#fefefe",
		borderWidth: 0.5,
		borderRadius: 70,
		marginHorizontal: 5,
		height: "85%",
		minWidth: 70,
		width: "auto",
		backgroundColor: "#00005c",
		paddingHorizontal: 10,
		marginTop: 20,
	},
	idle: {
		backgroundColor: "#00005c",
	},
	activeBar: {
		backgroundColor: "#ffffff",
	},
	hourContainer: {
		height: "35%",
		alignItems: "center",
		justifyContent: "center",
	},
	hour: {
		color: "#fefefe",
		fontWeight: "300",
	},
	day: {
		color: "#fefefe",
		fontWeight: "400",
		fontSize: 10,
	},
	iconContainer: {
		height: 50,
		width: 50,
		borderRadius: 100,
		backgroundColor: "#000045",
		alignItems: "center",
		justifyContent: "center",
	},
	temperatureContainer: {
		height: "35%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	temperature: {
		color: "#fefefe",
		fontSize: 25,
	},
	temperatureUnit: {
		color: "#fefefe",
		fontWeight: "300",
	},
});

const activeStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		color: "#0f0f0f",
		borderColor: "#fefefe",
		borderWidth: 0.5,
		borderRadius: 1000,
		marginHorizontal: 5,
		height: "90%",
		minWidth: 70,
		width: "auto",
		backgroundColor: "#bbbbbb",
		paddingHorizontal: 10,
	},
	hourContainer: {
		height: "35%",
		alignItems: "center",
		justifyContent: "center",
	},
	hour: {
		color: "#0f0f0f",
		fontWeight: "300",
	},
	iconContainer: {
		height: 50,
		width: 50,
		borderRadius: 100,
		backgroundColor: "#666666",
		alignItems: "center",
		justifyContent: "center",
	},
	temperatureContainer: {
		height: "35%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	temperature: {
		color: "#0f0f0f",
		fontSize: 25,
	},
	temperatureUnit: {
		color: "#0f0f0f",
		fontWeight: "300",
	},
});
