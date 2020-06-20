export class Current {
    temperature: number;
    temperatureUnit: string;
    location: string;
    countryCode: string;
    feelsLike: number;
    sunset: string;
    constructor(temperature: number, temperatureUnit: string, location: string, countryCode: string, feelsLike: number, sunset: string){
        this.temperature = temperature;
        this.temperatureUnit = temperatureUnit;
        this.location = location;
        this.countryCode = countryCode;
        this.feelsLike = feelsLike;
        this.sunset = sunset;
    }
}