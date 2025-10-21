import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactElement } from 'react';
import { RootNavigationStackParamList } from '../@types/navigation';

export default function LauncherScreen(): ReactElement {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationStackParamList>>();

  navigation.replace('Splash');

  return <></>;
}
