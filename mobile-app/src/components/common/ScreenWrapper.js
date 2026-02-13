import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function ScreenWrapper({
    bgColor = "white",
    className,
    children
}) {

    const [isDark, setIsDark] = useState(bgColor == 'white' ? true : false);

    return (
        <View className={`${bgColor} ${className} flex-1`}>
            <SafeAreaView className="flex-1">
                {
                    children
                }
            </SafeAreaView>

            <StatusBar barStyle={isDark ? "default" : "dark-content"}/>
        </View>
    )

}