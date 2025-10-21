import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { ReactElement, useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootNavigationStackParamList } from '../@types/navigation';

//
// note: we do not use the current theme on this screen hence the hardcoded colours
//
export default function SplashScreen(): ReactElement {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationStackParamList>>();
  const insets = useSafeAreaInsets();

  // move to the home screen once the spash screen timeout has expired. We only show the splash once a day
  // so any subsequent loads are quick but it looks like the app is doing something if left for a while.
  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      // navigate to the home screen
      navigation.replace('Home'); //ApplicationDrawer');
    }, 10000);

    return () => {
      clearTimeout(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={localStyles.container} testID="TEST_VIEW_SPLASH_SCREEN">
      <Image
        style={localStyles.splashLogo}
        resizeMode="contain"
        source={require('../../assets/images/ninja_transparent_512.png')}
      />

      <View style={[localStyles.footer, { bottom: insets.bottom + 16 }]}>
        <Text>&copy; Chris Leathley {new Date().getFullYear()}</Text>

        <ActivityIndicator
          size="large"
          style={localStyles.splashActivityIndicator}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    height: 400,
    alignSelf: 'center',
  },
  footer: {
    alignItems: 'center',
    position: 'absolute',
  },
  splashActivityIndicator: {
    marginTop: 10,
  },
});
