declare type Weather = {
  temperature: number | string;
  name:
    | 'Rain'
    | 'Clear'
    | 'Thunderstrom'
    | 'Clouds'
    | 'Snow'
    | 'Drizzle'
    | 'Haze'
    | 'Mist';
};
