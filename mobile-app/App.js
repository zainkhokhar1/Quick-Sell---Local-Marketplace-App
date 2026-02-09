import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTodoStore } from "./store/store";

export default function App() {

  const { todos } = useTodoStore();

  return (
    <SafeAreaProvider>

      <SafeAreaView style={{ flex: 1 }}>

        <View className="">

        </View>

        <StatusBar style="auto" />
      </SafeAreaView>

    </SafeAreaProvider>
  );
}

