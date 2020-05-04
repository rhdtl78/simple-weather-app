import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  GCP_GEOCODING_API_KEY,
  OPEN_WEATHER_API_KEY,
} from 'react-native-dotenv';
import LoadingScreen from 'screens/LoadingScreen';
import WeatherScreen from 'screens/WeatherScreen';

export default function App() {
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
      },
      (error) => {
        setErrorState(error);
      }
    );
    return;
  }, []);

  const getWeather = async (lat: number, lon: number) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
    );
    const res = await response.json();
    setWeather({
      temperature: res.main.temp,
      name: res.weather[0].main,
    });
    setLoadState(true);
  };

  const getLocation = async (lat: number, lon: number) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GCP_GEOCODING_API_KEY}`
    );
    const res = await response.json();

    setAddress(res.results[0].formatted_address);
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
