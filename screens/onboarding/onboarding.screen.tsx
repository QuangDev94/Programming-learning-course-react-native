import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '@/styles/onboarding/onboard';

export default function OnBoardingScreen() {
  let [fontsLoaded, fontsError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  });
  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <LinearGradient
      colors={['#E5ECF9', '#F6F7F9']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={styles.firstContainer}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} />
        <Image source={require('@/assets/onboarding/shape_9.png')} />
      </View>
      <View style={styles.titleWrapper}>
        <Image
          source={require('@/assets/onboarding/shape_3.png')}
          style={styles.titleTextShape1}
        />
        <Text style={[styles.titleText, { fontFamily: 'Raleway_700Bold' }]}>
          Start Learning with
        </Text>
        <Image
          source={require('@/assets/onboarding/shape_2.png')}
          style={styles.titleTextShape2}
        />
      </View>
      <View>
        <Image
          source={require('@/assets/onboarding/shape_3.png')}
          style={styles.titleTextShape3}
        />
        <Text style={[styles.titleText, { fontFamily: 'Raleway_700Bold' }]}>
          QuangDev
        </Text>
      </View>
    </LinearGradient>
  );
}
