import { IconModel } from "../IconModel";

export class HourItemModel {
    time: string;
    icon: IconModel;
    temperature: number;
    temperatureUnit: string;

    constructor(time: string, icon: IconModel, temperature: number, temperatureUnit: string){
        this.time = time;
        this.icon = icon;
        this.temperature = temperature;
        this.temperatureUnit = temperatureUnit;
    }
}