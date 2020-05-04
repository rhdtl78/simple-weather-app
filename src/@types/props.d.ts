declare interface WeatherScreenProps {
  temp: number | string;
  weatherName:
    | 'Rain'
    | 'Clear'
    | 'Thunderstrom'
    | 'Clouds'
    | 'Snow'
    | 'Drizzle'
    | 'Haze'
    | 'Mist';
  address: string;
}
