// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { RootNavigationStackParamList } from '../@types/navigation';

//
// note: we do not use the current theme on this screen hence the hardcoded colours
//
export default function HomeScreen(): ReactElement {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[localStyles.container, { paddingBottom: insets.bottom }]}
      testID="TEST_VIEW_HOME_SCREEN"
    >
      <Text>HOME SCREEN</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
