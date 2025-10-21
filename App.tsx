/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigationStackParamList } from './src/@types/navigation';
import HomeScreen from './src/screens/Home';
import LauncherScreen from './src/screens/Launcher';
import SplashScreen from './src/screens/Splash';

const RootNavigationStack =
  createNativeStackNavigator<RootNavigationStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigationStack.Navigator initialRouteName="Launcher">
          <RootNavigationStack.Screen
            name="Launcher"
            component={LauncherScreen}
            options={{
              headerShown: false,
              animation: 'none',
            }}
          />
          <RootNavigationStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
              animation: 'fade_from_bottom',
            }}
          />
          <RootNavigationStack.Screen name="Home" component={HomeScreen} />
        </RootNavigationStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
