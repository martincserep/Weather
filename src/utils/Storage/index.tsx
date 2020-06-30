import { AsyncStorage } from "react-native";

export default class Storage {
	storageKey: string;
	constructor(storageKey: string) {
		this.storageKey = storageKey;
	}

	async set(key: string, value: any) {
		try {
			await AsyncStorage.setItem(this.keyPath(key), JSON.stringify(value));
		} catch (error) {
			throw error;
		}
	}

	async get(key: string) {
		try {
			const value: any = await AsyncStorage.getItem(this.keyPath(key));

			return JSON.parse(value);
		} catch (error) {
			throw error;
		}
	}

	async remove(key: string) {
		try {
			await AsyncStorage.removeItem(this.keyPath(key));
		} catch (error) {
			throw error;
		}
	}

	keyPath(key: string) {
		return `${this.storageKey}:${key}`;
	}
}
