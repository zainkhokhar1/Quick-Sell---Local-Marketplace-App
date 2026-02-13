import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthNavigator from "./AuthNavigator";


export default function RootNavigation() {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}