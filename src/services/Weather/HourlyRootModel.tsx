import { WeatherModel } from './Models/WeatherModel';
import { MainModel } from './Models/MainModel/index';
import { SysModel } from './Models/SysModel/index';
import { CoordModel } from './Models/CoordModel/index';
import { WindModel } from './Models/WindModel/index';
import { CityModel } from './Models/CityModel';
export class HourlyRootModel {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: CityModel;
    constructor(response:any) {
      this.cod = response.coord;
      this.message = response.weather;
      this.cnt = response.base;
      this.list = response.main;
      this.city = response.visibility;
      this.cod = response.cod;
    }
  }
  