import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#000839" />
			<Home />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000839",
		justifyContent: "center",
		alignContent: "center",
	},
	currentWeatherContainer: {
		height: "40%",
		alignItems: "center",
		alignSelf: "center",
	},
	hourlyWeatherContainer: {
		height: "40%",
	},
});
