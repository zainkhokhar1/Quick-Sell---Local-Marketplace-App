/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        light : "#FFF2F9",
        Pink : "#FA4EAB",
        dark : "#323232",
        lightPink: "#FE83C6"
      },
      fontFamily: {
        // Roboto
        'roboto': ['Roboto_400Regular'],
        'roboto-medium': ['Roboto_500Medium'],
        'roboto-bold': ['Roboto_700Bold'],
        
        // Lora
        'lora': ['Lora_400Regular'],
        'lora-medium': ['Lora_500Medium'],
        'lora-semibold': ['Lora_600SemiBold'],
        'lora-bold': ['Lora_700Bold'],
      },
    },
  },
  plugins: [],
}

