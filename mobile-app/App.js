import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTodoStore } from "./store/store.js";

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

      <SafeAreaView style={{ flex: 1, paddingInline: 20 }}>

        {/* Roboto Examples */}
        <Text className="font-roboto text-base text-gray-800">
          This is Roboto Regular
        </Text>

        <Text className="font-roboto-medium text-lg text-gray-900 mt-2">
          This is Roboto Medium
        </Text>

        <Text className="font-roboto-bold text-xl text-black mt-2">
          This is Roboto Bold
        </Text>

        {/* Lora Examples */}
        <Text className="font-lora text-2xl text-gray-800 mt-6">
          This is Lora Regular
        </Text>

        <Text className="font-lora-medium text-2xl text-gray-900 mt-2">
          This is Lora Medium
        </Text>

        <Text className="font-lora-semibold text-3xl text-gray-900 mt-2">
          This is Lora Semibold
        </Text>

        <Text className="font-lora-bold text-4xl text-black mt-2">
          This is Lora Bold
        </Text>

        <StatusBar style="auto" />
      </SafeAreaView>

    </SafeAreaProvider>
  );
}

