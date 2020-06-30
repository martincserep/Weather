import { WeatherModel } from "./Models/WeatherModel";
import { MainModel } from "./Models/MainModel/index";
import { SysModel } from "./Models/SysModel/index";
import { CoordModel } from "./Models/CoordModel/index";
import { WindModel } from "./Models/WindModel/index";
export class CurrentModel {
	coord: CoordModel;
	weather: WeatherModel[];
	base: string;
	main: MainModel;
	visibility: number;
	wind: WindModel;
	clouds: Object;
	dt: number;
	sys: SysModel;
	timezone: number;
	id: number;
	name: string;
	cod: number;
	constructor(response: any) {
		this.coord = response.coord;
		this.weather = response.weather;
		this.base = response.base;
		this.main = response.main;
		this.visibility = response.visibility;
		this.wind = response.wind;
		this.clouds = response.clouds;
		this.dt = response.dt;
		this.sys = response.sys;
		this.timezone = response.timezone;
		this.id = response.id;
		this.name = response.name;
		this.cod = response.cod;
	}
}
