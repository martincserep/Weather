import moment from "moment";
import BaseStorage from "../../utils/Storage";

export default class Storage {
	storage: BaseStorage;
	defaultExpirationMinutes: number;

	constructor({ storageKey = "Weather", defaultExpirationMinutes = 10 }) {
		this.storage = new BaseStorage(storageKey);
		this.defaultExpirationMinutes = defaultExpirationMinutes;
	}

	async setCurrent(key: string, data: any) {
		try {
			await this.set(key, data);
		} catch (error) {
			throw error;
		}
	}

	async set(key: string, data: any) {
		try {
			await this.storage.set(key, data);
		} catch (error) {
			throw error;
		}
	}

	async getCurrent(storageName: string) {
		try {
			return await this.get(storageName);
		} catch (error) {
			throw error;
		}
	}

	async getCurrentWithParams(
		storageName: string,
		requestParams = {},
		expirationMinutes = this.defaultExpirationMinutes
	) {
		try {
			return await this.get(storageName, requestParams, expirationMinutes);
		} catch (error) {
			throw error;
		}
	}

	async get(key: string, requestParams = null, expirationMinutes = 0) {
		try {
			let data = await this.storage.get(key);

			if (data === null) {
				return null;
			}

			if (
				requestParams !== null &&
				this.hasDifferentRequestParams(data, requestParams)
			) {
				return null;
			}

			return data;
		} catch (error) {
			throw error;
		}
	}

	hasDifferentRequestParams(
		{ request_params: prevParams },
		{ city, countryCode }
	) {
		return prevParams.city !== city || prevParams.country_code !== countryCode;
	}
}
