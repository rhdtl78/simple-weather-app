import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoadingScreen from 'screens/LoadingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
