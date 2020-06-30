import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import RainItem from "../common/RainItem";
import { RainItemModel } from "src/models/RainItemModel";

interface Props {
	data: Array<RainItemModel>;
}
const ChanceOfRain = ({ data }: Props) => {
	const rainForecast = data.map((current) => {
		return (
			<RainItem
				hour={current.time}
				active={current.isActive}
				period={"AM"}
				percentage={current.percentage}
			/>
		);
	});
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Chance of rain</Text>
			<View style={styles.dataContainer}>
				<View style={styles.infoContainer}>
					<Text style={styles.label}>heavy rain</Text>
					<Text style={styles.label}>rainy</Text>
					<Text style={styles.label}>sunny</Text>
				</View>
				<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
					{rainForecast}
				</ScrollView>
			</View>
		</View>
	);
};

export default ChanceOfRain;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		color: "#fefefe",
		height: "100%",
	},
	dataContainer: {
		flex: 1,
		flexDirection: "row",
		height: "80%",
		marginLeft: 10,
	},
	title: {
		color: "#fefefe",
		fontSize: 20,
		alignSelf: "flex-start",
		marginBottom: 10,
		marginLeft: 10,
	},
	label: {
		fontSize: 15,
		color: "#fefefe",
		fontWeight: "200",
		// marginVertical: 15,
	},
	infoContainer: {
		flexDirection: "column",
		alignContent: "space-between",
		justifyContent: "space-between",
		height: "80%",
	},
});
