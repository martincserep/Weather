import { CityModel } from './Models/CityModel';
import { HourlyListModel } from './Models/HourlyListModel';
export class HourlyRootModel {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyListModel[];
  city: CityModel;
    constructor(response:any) {
      this.cod = response.cod;
      this.message = response.message;
      this.cnt = response.cnt;
      this.list = response.list;
      this.city = response.city;
    }
  }
  