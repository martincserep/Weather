import React from "react";
import { StyleSheet, Text, View } from "react-native";

let percent = 10;
interface Props {
	hour: number;
	period: string;
	active: boolean;
	percentage: number;
}
const RainItem = ({ hour, active, period, percentage }: Props) => {
	percent = percentage;
	return (
		<View style={styles.container}>
			<View style={[{ height: `${100 - percent}%` }, styles.idle]}>
				<Text> </Text>
			</View>
			<View
				style={[
					{ height: `${percent}%` },
					styles.rainChance,
					active ? styles.activeBar : styles.bar,
				]}
			>
				<Text> </Text>
			</View>
			<Text style={styles.label}>
				{hour}
				{period}
			</Text>
		</View>
	);
};
export default RainItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 5,
		height: "80%",
		minWidth: 40,
		width: "auto",
		paddingHorizontal: 10,
	},
	idle: {
		width: "100%",
	},
	rainChance: {
		width: "100%",
		borderRadius: 1000,
	},
	activeBar: {
		backgroundColor: "#ffa41b",
	},
	bar: {
		backgroundColor: "#3b6978",
	},
	label: {
		color: "#fefefe",
		fontWeight: "300",
	},
});
