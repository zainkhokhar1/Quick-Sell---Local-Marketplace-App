import { View, Text } from "react-native";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import { LinearGradient } from "expo-linear-gradient";

export default function SignupScreen({ navigation }) {
    return (
        <ScreenWrapper bgColor="bg-light" >

            {/* Background gradient */}
            <LinearGradient
                colors={['#5161F1', '#63E9F8', '#FFFFFF']}
                locations={[0, 0.5, 1]}
                className="absolute top-0 left-0 right-0 h-[70%] opacity-30"
            />

            <Text>
                Signup screen
            </Text>
        </ScreenWrapper>
    )
}