import { Image, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { onboardingSwiperData } from '@/constants/constants';
import { commonStyles } from '@/styles/common/common.styles';
import { router } from 'expo-router';

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontsError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  });
  if (!fontsLoaded && fontsError) {
    return null;
  }

  const _renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={['#E5ECF9', '#F6F7F9', '#E8EEF9']}
      style={{ flex: 1, padding: 16 }}
    >
      <View style={{ marginTop: 80 }}>
        <Image
          source={item.image}
          style={{ alignSelf: 'center', marginBottom: 30 }}
        />
        <Text
          style={[commonStyles.titleStyle, { fontFamily: 'Raleway_700Bold' }]}
        >
          {item.title}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text
            style={[
              commonStyles.descriptionStyle,
              { fontFamily: 'Nunito_400Regular' }
            ]}
          >
            {item.description}
          </Text>
          <Text
            style={[
              commonStyles.descriptionStyle,
              { fontFamily: 'Nunito_400Regular' }
            ]}
          >
            {item.sortDescrition}
          </Text>
          <Text
            style={[
              commonStyles.descriptionStyle,
              { fontFamily: 'Nunito_400Regular' }
            ]}
          >
            {item.sortDescrition2}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
  const _renderNextButton = () => {
    return (
      <View style={commonStyles.buttonStyle}>
        <Text
          style={[
            commonStyles.buttonTextStyle,
            { fontFamily: 'Nunito_700Bold' }
          ]}
        >
          Next
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={commonStyles.buttonStyle}>
        <Text
          style={[
            commonStyles.buttonTextStyle,
            { fontFamily: 'Nunito_700Bold' }
          ]}
        >
          Done
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={onboardingSwiperData}
      renderItem={_renderItem}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      bottomButton={true}
      dotStyle={commonStyles.dotStyle}
      activeDotStyle={commonStyles.activeDotStyle}
      onDone={() => {
        router.push('/login');
      }}
      onSkip={() => {
        router.push('/login');
      }}
      showSkipButton={false}
    />
  );
}
