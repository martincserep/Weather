import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HourItem from "../common/HourItem";
import { HourItemModel } from "src/models/HourItemModel";

interface Props {
	data: Array<HourItemModel>;
}
const HourlyForecast = ({ data }: Props) => {
	const hours = data.map((current) => {
		return (
			<HourItem
				time={current.time}
				weather={current.icon}
				temperature={current.temperature}
				temperatureUnit={current.temperatureUnit}
			/>
		);
	});
	return (
		<View style={styles.container}>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
				{hours}
			</ScrollView>
		</View>
	);
};

export default HourlyForecast;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		color: "#fefefe",
		width: "100%",
	},
});
