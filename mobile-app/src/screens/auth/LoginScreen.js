import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import ScreenWrapper from "../../components/common/ScreenWrapper";
import { Body, H2 } from "../../components/ui/Typography";
import FormInput from "../../components/forms/FormInput";
import useLogin from "../../hooks/useLogin";

export default function LoginScreen({ navigation }) {

    // custom hook for validation
    const { formData, setFormData } = useLogin();

    return (
        <ScreenWrapper bgColor="bg-light">

            {/* Background gradient */}
            <LinearGradient
                colors={['#5161F1', '#63E9F8', '#FFFFFF']}
                locations={[0, 0.5, 1]}
                className="absolute top-0 left-0 right-0 h-[70%] opacity-30"
            />

            {/* Top Header */}
            <View className="px-4 mt-6 gap-2">
                <H2>
                    Welcome Back
                </H2>

                <Body className="text-lg">
                    Enter your credentials to access youur account.
                </Body>

            </View>

            {/* Form container */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="mt-5 px-4 flex-1"
            >

                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    className="flex-1 mt-4"
                >

                    <FormInput
                        label={"Email Id"}
                        keyboardType="email-address"
                        defaultText={""}
                        labelClassName={"text-darkBlue mb-2"}
                        inputClassName="py-1 px-4 h-14"
                        className=""
                        placeholder={"joe@gmail.com"}
                        text={formData.email}
                        onChangeText={(text) => setFormData((prev) => {
                            return { ...prev, email: text }
                        })}
                    />

                    <FormInput
                        label={"Password"}
                        keyboardType="password"
                        defaultText={""}
                        labelClassName={"text-darkBlue mb-2"}
                        inputClassName="py-1 px-4 h-14"
                        className="mt-2"
                        placeholder={"*****"}
                        secureTextEntry={true}
                        text={formData.password}
                        onChangeText={(text) => setFormData((prev) => {
                            return { ...prev, password: text }
                        })}
                    />

                </ScrollView>

            </KeyboardAvoidingView>

        </ScreenWrapper>
    )
}