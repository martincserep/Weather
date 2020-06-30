export class WeatherModel {
	id: number;
	main: string;
	desc: string;
	icon: string;
	constructor(response: any) {
		this.id = response.id;
		this.main = response.main;
		this.desc = response.desc;
		this.icon = response.icon;
	}
}
