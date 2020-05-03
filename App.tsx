import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoadingScreen from 'screens/LoadingScreen';
import WeatherScreen from 'screens/WeatherScreen';

export default function App() {
  const [isLoaded, setLoadState] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {!isLoaded ? <LoadingScreen /> : <WeatherScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
