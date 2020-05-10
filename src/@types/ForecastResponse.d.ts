declare type ForecastResponse = {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      main: string;
    }
  ];
};
