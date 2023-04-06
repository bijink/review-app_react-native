import "react-native-gesture-handler"
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import Home from "./screens/home"
import ReviewDetails from "./screens/reviewDetails"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { TransitionPresets } from "@react-navigation/stack"

SplashScreen.preventAutoHideAsync()
const Stack = createStackNavigator()

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
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Review"
          component={ReviewDetails}
          options={{
            title: "Review",
            // ...TransitionPresets.DefaultTransition,
            // ...TransitionPresets.SlideFromRightIOS,
            // ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
            // ...TransitionPresets.ModalTransition,
            // ...TransitionPresets.FadeFromBottomAndroid,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
