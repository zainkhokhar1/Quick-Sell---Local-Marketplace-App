import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ScreenWrapper from "../../components/common/ScreenWrapper.js"
import { ButtonText, H1, H4 } from "../../components/ui/Typography.js";
import { DarkButton } from "../../components/ui/Button.js";
import OutlineButton from "../../components/common/OutlineButton.js";

export default function WelcomeScreen({ navigation }) {
    return (
        <ScreenWrapper className="" bgColor={'bg-light'}>

            {/* Background gradient */}
            <LinearGradient
                colors={['#5161F1', '#63E9F8', '#FFFFFF']}
                locations={[0, 0.5, 1]}
                className="absolute top-0 left-0 right-0 h-[70%] opacity-30"
            />

            {/* Logo on the top */}
            <View
                className="flex-1 justify-center items-center z-10"
            >
                <Image
                    source={require('../../assets/logo-two.png')}
                    className="w-80 h-80"
                    resizeMode="contain"
                />

                {/* Text Section */}
                <View className="gap-6 mt-6 px-8">
                    <H1 className="text-darkBlue text-center">
                        Buy & Sell Locally
                    </H1>

                    <H4 className="text-darkBlue text-center font-roboto">
                        Your local marketplace for everything. Browse listings around you, chat directly with sellers, and make quick deals — all without shipping fees or long waits.
                    </H4>
                </View>
            </View>

            {/* Buttons Section */}
            <View className="gap-5 mb-3">

                <DarkButton
                    className="py-5"
                    handlePress={() => navigation.navigate('Login')}
                >
                    <ButtonText className="text-center text-xl tracking-wide">
                        Login
                    </ButtonText>
                </DarkButton>

                <OutlineButton
                    className="py-3 self-center" loadingText="loading..." text="Signup" textClassName="text-darkBlue text-center"
                    handlePress={() => navigation.navigate('Signup')}
                />

            </View>

        </ScreenWrapper>
    )
}
