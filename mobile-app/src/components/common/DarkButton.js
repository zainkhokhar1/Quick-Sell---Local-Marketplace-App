import { TouchableOpacity, Text } from "react-native";

export default function DarkButton({
    text = "",
    className = "",
    textClassName = "",
    handlePress,
    loading = false,
    loadingText = ""
}) {

    return (
        <TouchableOpacity
            className={`px-24 py-4 rounded-lg bg-darkBlue shadow-sm ${className}`}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text className={`${textClassName} font-medium text-lg text-white`}>
                {
                    loading ? loadingText : text
                }
            </Text>
        </TouchableOpacity>
    )

}