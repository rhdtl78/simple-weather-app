import React, { ReactElement, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './LoadingScreenStyles';
interface Props {}

export default function LoadingScreen({}: Props): ReactElement {
  const [isLoaded, setisLoaded] = useState(false);
  return (
    <View style={styles.container}>
      {!isLoaded && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the fucking weather</Text>
        </View>
      )}
    </View>
  );
}
