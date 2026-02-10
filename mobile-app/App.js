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
import { ButtonText, H1 } from "./components/ui/Typography.js";
import { DarkButton } from "./components/ui/Button.js";

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

      <SafeAreaView className="bg-light flex-1" >

        <View className="bg-light flex-1 px-4">

          {/* Roboto Examples */}
          <H1 className="font-roboto text-darkBlue">
            This is Roboto Regular
          </H1>

          <DarkButton className="w-[90%]">
            <ButtonText className="text-lg font-medium text-center">
              Click Me
            </ButtonText>
          </DarkButton>

        </View>

        <StatusBar style="auto" />

      </SafeAreaView>

    </SafeAreaProvider>
  );
}

