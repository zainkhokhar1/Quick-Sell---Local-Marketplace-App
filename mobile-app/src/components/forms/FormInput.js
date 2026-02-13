import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function FormInput({
    defaultText,
    text,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    keyboardType = "default",
    className = "",
    error = "",
    label,
    labelClassName = "",
    inputClassName = ""
}) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
    return (
        <View className={`mb-4 ${className}`}>

            {/* label */}
            {
                label && <Text className={`text-left font-medium text-lg text-darkBlue ${labelClassName}`}>
                    {
                        label
                    }
                </Text>
            }

            <View className={`bg-gray-50 border flex-row items-center ${error ? "border-red-400" : "border-gray-200"
                } rounded-xl pl-1 pr-4 py-1`}>

                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    defaultValue={defaultText}
                    className={`${inputClassName} font-roboto text-base text-darkBlue flex-1 font-medium`}
                    secureTextEntry={isPasswordVisible}
                    placeholderTextColor="#9CA3AF"
                    keyboardType={keyboardType}
                    value={text}
                />
                {
                    secureTextEntry && (
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            <Ionicons
                                name={isPasswordVisible ? "eye-off" : "eye"}
                                size={24}
                                color="#9CA3AF"
                            />
                        </TouchableOpacity>
                    )
                }
            </View>


            {
                error && <Text className="text-red-600 font-medium">
                    error
                </Text>
            }

        </View>
    )
}