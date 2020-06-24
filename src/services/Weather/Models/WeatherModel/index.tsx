export class WeatherModel {
    id: number;
    main: string;
    desc: string;
    icon: string;
    constructor(id: number, main: string, desc: string, icon: string) {
        this.id = id;
        this.main = main;
        this.desc = desc;
        this.icon = icon;
    }
  }
  