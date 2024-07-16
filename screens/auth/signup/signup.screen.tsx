import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import {
  Raleway_700Bold,
  Raleway_600SemiBold
} from '@expo-google-fonts/raleway';
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons
} from '@expo/vector-icons';
import { authStyles } from '@/styles/auth/auth.style';
import { commonStyles } from '@/styles/common/common.styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SignUpScreen() {
  let [fontsLoaded, fontsError] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded && fontsError) {
    return null;
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userInfor, setUserInfor] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [required, setRequired] = useState(false);
  const [error, setError] = useState({
    password: ''
  });
  const [isButtonSpinner, setIsButtonSpinner] = useState(false);

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;
    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: 'Write at least one special character'
      });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: 'Write at least one number'
      });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: 'Write at least 6 character'
      });
    } else {
      setError({
        ...error,
        password: ''
      });
      setUserInfor({
        ...userInfor,
        password: value
      });
    }
  };
  const handleSignUp = () => {
    router.push('/(routes)/verify-account');
  };
  return (
    <LinearGradient colors={['#E5ECF9', '#F6F7F9']} style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Image
            source={require('@/assets/auth/sign_up.png')}
            style={authStyles.imageStyle}
          />
          <Text
            style={[
              authStyles.welcomeTextStyle,
              { fontFamily: 'Raleway_700Bold' }
            ]}
          >
            Let 's get started !
          </Text>
          <Text style={[authStyles.learningTextStyle]}>
            Create an account to QuangDev to get all features
          </Text>
          <View style={authStyles.inputContainerStyle}>
            <View>
              <TextInput
                style={[commonStyles.inputStyle, { paddingLeft: 40 }]}
                keyboardType="default"
                placeholder="QuangDev"
                value={userInfor.name}
                onChangeText={(value) =>
                  setUserInfor({ ...userInfor, name: value })
                }
              />
              <AntDesign
                style={{ position: 'absolute', top: 17.8, left: 26 }}
                name="user"
                size={20}
                color={'#A1A1A1'}
              />
              {required && (
                <View style={commonStyles.errorStyle}>
                  <Entypo name="cross" size={18} color="red" />
                </View>
              )}
            </View>
            <View>
              <TextInput
                style={[commonStyles.inputStyle, { paddingLeft: 40 }]}
                keyboardType="email-address"
                placeholder="QuangDev@gmail.com"
                value={userInfor.email}
                onChangeText={(value) =>
                  setUserInfor({ ...userInfor, email: value })
                }
              />
              <Fontisto
                style={{ position: 'absolute', top: 17.8, left: 26 }}
                name="email"
                size={20}
                color={'#A1A1A1'}
              />
              {required && (
                <View style={commonStyles.errorStyle}>
                  <Entypo name="cross" size={18} color="red" />
                </View>
              )}
            </View>
            <View>
              <TextInput
                style={[commonStyles.inputStyle, { paddingLeft: 40 }]}
                keyboardType="default"
                placeholder="********"
                secureTextEntry={!isPasswordVisible}
                defaultValue=""
                onChangeText={handlePasswordValidation}
              />
              <Pressable
                style={authStyles.visibleIconButtonStyle}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Ionicons
                  name={`${!isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}`}
                  size={23}
                  color={'#747474'}
                />
              </Pressable>
              <SimpleLineIcons
                style={authStyles.securityIconStyle}
                name="lock"
                size={20}
                color="#A1A1A1"
              />
            </View>
            {error.password && (
              <View style={[commonStyles.errorStyle, { top: 145 }]}>
                <Entypo name="cross" size={18} color="red" />
                <Text style={commonStyles.errorTextStyle}>
                  {error.password}
                </Text>
              </View>
            )}

            <Pressable style={commonStyles.buttonStyle} onPress={handleSignUp}>
              {isButtonSpinner ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text
                  style={[
                    commonStyles.buttonTextStyle,
                    { fontFamily: 'Raleway_700Bold', fontSize: 16 }
                  ]}
                >
                  Sign Up
                </Text>
              )}
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                gap: 10
              }}
            >
              <Pressable>
                <FontAwesome name="google" size={30} />
              </Pressable>
              <Pressable>
                <FontAwesome name="github" size={30} />
              </Pressable>
            </View>
            <View style={authStyles.signUpRedirectStyle}>
              <Text style={{ fontSize: 18, fontFamily: 'Raleway_600SemiBold' }}>
                Already have an account ?
              </Text>
              <Pressable onPress={() => router.push('/(routes)/login')}>
                <Text
                  style={[
                    authStyles.signUpTextStyle,
                    { fontFamily: 'Raleway_600SemiBold' }
                  ]}
                >
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
