import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const WaveAnimation = () => {
  const waveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateWave = () => {
      waveAnimation.setValue(0);
      Animated.timing(waveAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => animateWave());
    };

    animateWave();
  }, [waveAnimation]);

  const waveStyle = {
    transform: [
      {
        translateY: waveAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -20], // Dalganın yüksekliği
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wave, waveStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Denizin rengi
  },
  wave: {
    width: 200,
    height: 100,
    backgroundColor: '#1E90FF', // Dalganın rengi
    borderRadius: 50,
  },
});

export default WaveAnimation;
