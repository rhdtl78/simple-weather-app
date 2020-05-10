import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

export default class WeatherApi {
  async getWeather(lat: number, lon: number): Promise<Weather> {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
    );
    const res = await response.json();

    return {
      temperature: res.main.temp,
      name: res.weather[0].main,
    };
  }

  async getForecast(lat: number, lon: number): Promise<void> {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
    );
    const res = await response.json();
    const forecasts = res.list.map((forecast: ForecastResponse) => ({
      weatherName: forecast.weather[0].main,
      dateTime: forecast.dt_txt,
      temperature: forecast.main.temp,
    }));

    console.log(forecasts);
  }
}
