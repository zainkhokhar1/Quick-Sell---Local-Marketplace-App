import { TouchableOpacity } from "react-native"

export const DarkButton = ({ className = '', children, handlePress }) => {
    return (
        <TouchableOpacity
            className={`bg-darkBlue px-3 py-3 rounded-xl mx-auto w-[85%] ${className}`}
            activeOpacity={0.8}
            onPress={handlePress}
        >
            {
                children
            }
        </TouchableOpacity>
    )
}