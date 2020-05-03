import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './WeatherScreenStyles';
interface Props {}

export default function WeatherScreen({}: Props): ReactElement {
  return (
    <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={150} name="ios-rainy" />
        <Text style={styles.temp}>35°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>Raining like a MF</Text>
        <Text style={styles.subtitle}>For more info look outside</Text>
      </View>
    </LinearGradient>
  );
}
