import "./global.css";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTodoStore } from "./src/store/store.js";

import {
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
  useFonts,
} from '@expo-google-fonts/lora';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import WelcomeScreen from "./src/screens/auth/WelcomeScreen.js";
import RootNavigation from "./src/navigation/index.js";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const { todos } = useTodoStore();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>

      <RootNavigation />

    </SafeAreaProvider>
  );
}

