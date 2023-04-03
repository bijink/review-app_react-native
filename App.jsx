import { useCallback } from "react"
import { Text, View } from "react-native"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import Home from "./screens/home"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Home />
    </View>
  )
}
