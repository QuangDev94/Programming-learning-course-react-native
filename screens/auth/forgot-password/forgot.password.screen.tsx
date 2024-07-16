import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
import { forgotPasswordStyles } from '@/styles/auth/forgot.password.style';
import { styles } from '@/styles/onboarding/onboard';

export default function ForgotPasswordScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      style={forgotPasswordStyles.container}
      colors={['#E5ECF9', '#F6F7F9']}
    >
      <Text
        style={[
          forgotPasswordStyles.headerTextStyle,
          { fontFamily: 'Nunito_600SemiBold' }
        ]}
      >
        Reset Email Password
      </Text>
      <TextInput
        style={[
          forgotPasswordStyles.inputStyle,
          { fontFamily: 'Nunito_400Regular' }
        ]}
        placeholder="abc@gmail.com"
        keyboardType="email-address"
      />
      <Pressable style={[forgotPasswordStyles.buttonStyle]}>
        <Text
          style={[
            forgotPasswordStyles.buttonTextStyle,
            { fontFamily: 'Nunito_600SemiBold' }
          ]}
        >
          Send
        </Text>
      </Pressable>
      <View style={forgotPasswordStyles.loginLinkStyle}>
        <Text style={{ fontFamily: 'Nunito_700Bold', fontSize: 16 }}>
          Back to ?
        </Text>
        <Pressable onPress={() => router.back()}>
          <Text
            style={[
              forgotPasswordStyles.loginTextStyle,
              { fontFamily: 'Nunito_700Bold' }
            ]}
          >
            Sign In
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
