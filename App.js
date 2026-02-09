import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider >

      <View className="bg-white p-8 rounded-lg shadow-lg">
        <Text className="text-3xl font-bold text-blue-600 mb-4">
          Hello NativeWind!
        </Text>
        <Text className="text-gray-700 text-center">
          Tailwind CSS is now working in your React Native app
        </Text>
      </View>
      <StatusBar style="auto" />

    </SafeAreaProvider>
  );
}

