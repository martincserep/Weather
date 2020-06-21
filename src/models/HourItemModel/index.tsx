export class HourItemModel {
    isActive: boolean;
    time: number;
    icon: string;
    temperature: number;
    temperatureUnit: string;

    constructor(isActive: boolean, time: number, icon: string, temperature: number, temperatureUnit: string){
        this.isActive = isActive;
        this.time = time;
        this.icon = icon;
        this.temperature = temperature;
        this.temperatureUnit = temperatureUnit;
    }
}