import { WeatherModel } from '../WeatherModel';
import { MainModel } from '../MainModel';
import { SysModel } from '../SysModel';
import { CloudsModel } from '../CloudsModel';
import { WindModel } from '../WindModel';
import { RainModel } from '../RainModel';
export class HourlyListModel {
    dt: number;
    main: MainModel;
    weather: WeatherModel[];
    clouds: CloudsModel;
    wind: WindModel;
    sys: SysModel;
    dt_txt: string;
    rain: RainModel;
 
    constructor(dt: number, main: MainModel, weather: WeatherModel[], clouds: CloudsModel, wind: WindModel, sys: SysModel, dt_txt: string, rain: RainModel,) {
        this.dt = dt;
        this.main = main;
        this.weather = weather;
        this.clouds = clouds;
        this.wind = wind;
        this.sys = sys;
        this.dt_txt = dt_txt;
        this.rain = rain;
    }
  }
  