import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './WeatherScreenStyles';

const WEATHER_CASES: WeatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining',
    subTitle: 'For more info look outside.',
    iconName: 'weather-rainy',
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny',
    subTitle: 'Good to hang out someone.',
    iconName: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#00&ADF'],
    title: 'Thunderstorm in the house',
    subTitle: 'Actually outside of the house',
    iconName: 'weather-lightning',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subTitle: 'Gloomy, but keep what you doing.',
    iconName: 'weather-cloudy',
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow',
    subTitle: 'Do you want to build a snowman?',
    iconName: 'weather-snowy',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subTitle: 'Not a havy rain.',
    iconName: 'weather-hail ',
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subTitle: "It's like you have no glasses.",
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
  address,
}: WeatherScreenProps): ReactElement {
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
        <Text style={styles.address}>{address}</Text>
      </View>
    </LinearGradient>
  );
}
