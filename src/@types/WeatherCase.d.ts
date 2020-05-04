declare type WeatherCase = {
  colors: string[];
  title: string;
  subTitle: string;
  iconName: string;
};

declare type WeatherCases = Record<string, WeatherCase>;
