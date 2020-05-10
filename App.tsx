import { LocationApi, WeatherApi } from 'modules';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { LoadingScreen, WeatherScreen } from 'screens';

export default function App() {
  const weatherApi = new WeatherApi();
  const locationApi = new LocationApi();

  const [isLoaded, setLoadState] = useState(false);
  const [error, setErrorState] = useState<PositionError>();
  const [weather, setWeather] = useState<Weather>({
    temperature: 36.5 + 273.15,
    name: 'Rain',
  });
  const [address, setAddress] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);
        getLocation(latitude, longitude);
        weatherApi.getForecast(latitude, longitude);
      },
      (error) => {
        setErrorState(error);
      }
    );
    return;
  }, []);

  const getWeather = async (lat: number, lon: number) => {
    const weather: Weather = await weatherApi.getWeather(lat, lon);
    setWeather(weather);
    setLoadState(true);
  };

  const getLocation = async (lat: number, lon: number) => {
    const address = await locationApi.getAddress(lat, lon);

    setAddress(address);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <WeatherScreen
          temp={weather.temperature}
          weatherName={weather.name}
          address={address}
        />
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
