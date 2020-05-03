import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './WeatherScreenStyles';
interface Props {
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
}

type WeatherCase = {
  colors: string[];
  title: string;
  subTitle: string;
  iconName: string;
};

type WeatherCases = Record<string, WeatherCase>;

const WEATHER_CASES: WeatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining like a MF',
    subTitle: 'For more info look outside',
    iconName: 'weather-rainy',
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny as fuck',
    subTitle: 'Go get your ass burnt',
    iconName: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#00&ADF'],
    title: 'Thunderstorm int the house',
    subTitle: 'Actually outside of ther house',
    iconName: 'weather-lightning',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subTitle: 'I know, fucking boring',
    iconName: 'weather-cloudy',
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subTitle: 'Do you want to build a snowman? Fuck no.',
    iconName: 'weather-snowy',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subTitle: 'Is like rain, but gay',
    iconName: 'weather-hail ',
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subTitle: "Don't know what that is.",
    iconName: 'weather-hail',
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subTitle: "It's like you have no glasses.",
    iconName: 'weather-fog',
  },
};

export default function WeatherScreen({
  temp,
  weatherName,
}: Props): ReactElement {
  return (
    <LinearGradient
      colors={WEATHER_CASES[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={150}
          name={WEATHER_CASES[weatherName].iconName}
        />
        <Text style={styles.temp}>{Math.floor(Number(temp) - 273.15)}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{WEATHER_CASES[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {WEATHER_CASES[weatherName].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
