# Step 1 — Auth Screens Setup (Welcome, Login, Signup)

## Flow

```
App Opens
    │
    ▼
┌─────────────────────┐
│   App.js             │  loads fonts, hides native splash
└─────────┬───────────┘
          │ fonts ready
          ▼
┌─────────────────────┐
│  NavigationContainer │  ← src/navigation/index.js
└─────────┬───────────┘
          │
          ▼
┌─────────────────────────────────────┐
│   AuthNavigator (Stack Navigator)   │
│                                     │
│   Welcome ──► Login ──► Signup      │
│      │                    │         │
│      └────► Signup   Login ◄────┘   │
└─────────────────────────────────────┘
```

---

## Build Order (follow this sequence)

### 1. Create FormInput Component

**File:** `src/components/forms/FormInput.jsx`

- A reusable text input with label, placeholder, and error message
- Props: `label`, `placeholder`, `value`, `onChangeText`, `secureTextEntry`, `error`, `keyboardType`
- Use NativeWind for styling
- Use your `Roboto` font via `font-roboto` class

```jsx
import { View, TextInput, Text } from "react-native";

export default function FormInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error = "",
  keyboardType = "default",
  className = "",
}) {
  return (
    <View className={`mb-4 ${className}`}>
      {label && (
        <Text className="font-roboto-medium text-sm text-darkBlue mb-1.5">
          {label}
        </Text>
      )}
      <TextInput
        className={`bg-gray-50 border ${
          error ? "border-red-400" : "border-gray-200"
        } rounded-xl px-4 py-3 font-roboto text-base text-darkBlue`}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {error ? (
        <Text className="font-roboto text-xs text-red-500 mt-1">{error}</Text>
      ) : null}
    </View>
  );
}
```

---

### 2. Create WelcomeScreen

**File:** `src/screens/auth/WelcomeScreen.jsx`

**Layout:**
```
┌──────────────────────────────┐
│                              │
│       [Logo Image]           │
│                              │
│    "Buy & Sell Locally"      │   ← H1 (Lora Bold)
│    "Your campus marketplace" │   ← Body (Roboto)
│                              │
│  ┌────────────────────────┐  │
│  │     Login Button       │  │   ← DarkButton → navigates to "Login"
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │   Create Account       │  │   ← Outline Button → navigates to "Signup"
│  └────────────────────────┘  │
│                              │
└──────────────────────────────┘
```

**Key code:**
```jsx
// navigation prop comes from Stack Navigator
const WelcomeScreen = ({ navigation }) => {
  return (
    // ... layout
    <DarkButton onPress={() => navigation.navigate("Login")}>
      <ButtonText>Login</ButtonText>
    </DarkButton>
    // ... Create Account button
    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
      <Text>Create Account</Text>
    </TouchableOpacity>
  );
};
```

> NOTE: Your current `DarkButton` does NOT accept `onPress`. You need to
> update `src/components/ui/Button.js` to pass `onPress` to TouchableOpacity.

---

### 3. Create LoginScreen

**File:** `src/screens/auth/LoginScreen.jsx`

**Layout:**
```
┌──────────────────────────────┐
│  [← Back]                    │   ← Stack header or custom back button
│                              │
│       [Small Logo]           │
│     "Welcome Back"           │   ← H2
│                              │
│  ┌────────────────────────┐  │
│  │  Email Input            │  │   ← FormInput
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │  Password Input         │  │   ← FormInput (secureTextEntry)
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │     Login Button        │  │   ← DarkButton
│  └────────────────────────┘  │
│                              │
│  "Don't have an account?"    │
│  "Sign Up" ← link to Signup  │
└──────────────────────────────┘
```

**Key code:**
```jsx
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For now, just console.log — API comes later
    console.log("Login:", email, password);
  };

  return (
    // ... layout using FormInput, DarkButton
    <Text onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
  );
};
```

---

### 4. Create SignupScreen

**File:** `src/screens/auth/SignupScreen.jsx`

**Layout:**
```
┌──────────────────────────────┐
│  [← Back]                    │
│                              │
│     "Create Account"         │   ← H2
│                              │
│  ┌────────────────────────┐  │
│  │  Full Name Input        │  │
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │  Email Input            │  │
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │  Password Input         │  │
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │  Confirm Password       │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │    Sign Up Button       │  │
│  └────────────────────────┘  │
│                              │
│  "Already have an account?"  │
│  "Login" ← link to Login     │
└──────────────────────────────┘
```

---

### 5. Fix DarkButton to accept onPress

**File:** `src/components/ui/Button.js`

Change:
```jsx
export const DarkButton = ({ className='', children }) => {
```
To:
```jsx
export const DarkButton = ({ className='', children, onPress }) => {
    return (
        <TouchableOpacity
          onPress={onPress}
          className={`bg-darkBlue shadow-sm shadow-darkBlue px-3 py-3 rounded-xl mx-auto w-[80%] ${className}`}
        >
            {children}
        </TouchableOpacity>
    )
}
```

---

### 6. Create AuthNavigator

**File:** `src/navigation/AuthNavigator.js`

```jsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
```

---

### 7. Create Root Navigator

**File:** `src/navigation/index.js`

```jsx
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
```

---

### 8. Update App.js

Replace the test UI with the navigator:

```jsx
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts, Lora_400Regular, Lora_500Medium, Lora_600SemiBold, Lora_700Bold } from "@expo-google-fonts/lora";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import RootNavigator from "./src/navigation/index";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Lora_400Regular, Lora_500Medium, Lora_600SemiBold, Lora_700Bold,
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
```

---

## Checklist

- [ ] Create `src/components/forms/FormInput.jsx`
- [ ] Update `src/components/ui/Button.js` (add `onPress` prop)
- [ ] Create `src/screens/auth/WelcomeScreen.jsx`
- [ ] Create `src/screens/auth/LoginScreen.jsx`
- [ ] Create `src/screens/auth/SignupScreen.jsx`
- [ ] Create `src/navigation/AuthNavigator.js`
- [ ] Create `src/navigation/index.js`
- [ ] Update `App.js` to use RootNavigator

## Already Done (prerequisites)

- [x] Install `@react-navigation/native` + `@react-navigation/native-stack`
- [x] Add `./src/**/*.{js,jsx,ts,tsx}` to `tailwind.config.js` content array
- [x] Fonts (Lora + Roboto) configured
- [x] NativeWind + TailwindCSS configured
- [x] Button and Typography components exist
