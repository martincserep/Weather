export default class TemperatureUnit {
    static get CELCIUS() {
      return 'Celcius';
    }
  
    static get FAHRENHEIT() {
      return 'Fahrenheit';
    }
  
    static get KELVIN() {
      return 'Kelvin';
    }
  
    static getSymbolForUnit(unit:string) {
      switch (unit) {
        case TemperatureUnit.CELCIUS:
          return '°C';
        case TemperatureUnit.FAHRENHEIT:
          return '°F';
        case TemperatureUnit.KELVIN:
          return 'K';
      }
    }
  
    static convertCelciusToFahrenheit(value:number) {
      return (1.8 * value) + 32;
    }
  
    static convertCelciusToKelvin(value:number) {
      return value + 273.15;
    }
  }