import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
            />

            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

        </Stack.Navigator>
    )
}
