import Storage from './Storage';
import { Client } from '../OpenWeatherMap';
import TemperatureUnit from '../../utils/TemperatureUnit';
import env from '../../../env';
import { CurrentModel } from './CurrentModel';

export default class Weather {
  static temperature(temperature: any) {
      throw new Error("Method not implemented.");
  }
  defaultUnit: string;
  client: Client;
  storage: Storage;
    static temperature_range: any;
  constructor({ defaultUnit = TemperatureUnit.CELCIUS, apiKey = null, storageKey = 'Weather', defaultExpirationMinutes = 10 } = {}) {
    this.defaultUnit = defaultUnit;

    this.client = new Client({ apiKey: env.OPEN_WEATHER_API_KEY, defaultUnits: Client.UNITS_METRIC });
    this.storage = new Storage({ storageKey, defaultExpirationMinutes });
  }

  async getPreviouslyStoredCurrent() {
    try {
      let data = await this.storage.getCurrent();

      return data !== null ? data : null;
    } catch (error) {
      throw error;
    }
  }

  async getCurrent({ city = 'Budapest', countryCode = 'Hu', unit = this.defaultUnit, force = false}) {
      try {
            let data = await this.client.getCurrent({ city });
           
            data = new CurrentModel(data)
            
           
        await this.storage.setCurrent(data);

      console.log('🔥 FROM API');
      return data;
    } catch (error) {
      throw error;
    }
  }
}
