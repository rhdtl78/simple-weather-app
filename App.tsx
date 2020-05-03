import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoadingScreen from 'screens/LoadingScreen';
import WeatherScreen from 'screens/WeatherScreen';

const OPEN_WEATER_MAP_API_KEY = '88c6bb40c5fc3c1e010f0d2eb4047dfe';

type Weather = {
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

export default function App() {
  const [isLoaded, setLoadState] = useState(false);
  const [error, setErrorState] = useState<PositionError>();
  const [weather, setWeather] = useState<Weather>({
    temperature: 0,
    name: 'Rain',
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setErrorState(error);
      }
    );
    return;
  }, []);

  const getWeather = async (lat: number, lon: number) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATER_MAP_API_KEY}`
    );
    const res = await response.json();
    setWeather({
      temperature: res.main.temp,
      name: res.weather[0].main,
    });
    setLoadState(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <WeatherScreen temp={weather.temperature} weatherName={weather.name} />
      )}
      {error && <Text>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
  },
});
