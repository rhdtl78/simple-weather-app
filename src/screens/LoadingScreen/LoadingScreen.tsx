import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './LoadingScreenStyles';
interface Props {}

export default function LoadingScreen({}: Props): ReactElement {
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Getting the fucking weather</Text>
    </View>
  );
}
