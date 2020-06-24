import { IconModel } from '../IconModel/index';
export class Current {
    temperature: number;
    temperatureUnit: string;
    location: string;
    countryCode: string;
    feelsLike: number;
    sunset: number;
    icon: IconModel;

    constructor(temperature: number, temperatureUnit: string, location: string, countryCode: string, feelsLike: number, sunset: number, icon: IconModel){
        this.temperature = temperature;
        this.temperatureUnit = temperatureUnit;
        this.location = location;
        this.countryCode = countryCode;
        this.feelsLike = feelsLike;
        this.sunset = sunset;
        this.icon = icon;
    }
}