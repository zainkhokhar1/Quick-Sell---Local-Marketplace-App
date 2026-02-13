import { TouchableOpacity, Text } from "react-native";

export default function OutlineButton({
    text = "",
    className = "",
    textClassName = "",
    handlePress,
    loading = false,
    loadingText = ""
}) {
 
    return (
        <TouchableOpacity
            className={`w-[85%] py-4 rounded-xl bg-transparent border-darkBlue border-2 ${className}`}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text className={`${textClassName} font-medium text-xl tracking-wide text-darkBlue`}>
                {
                    loading ? loadingText : text
                }
            </Text>
        </TouchableOpacity>
    )

}