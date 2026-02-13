/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        light : "#FFFFFF",
        darkBlue : "#252243",
        skyBlue : "#5161F1",
        lightCyan : "#63E9F8",
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

