import React from "react";
import "react-native-gesture-handler";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/about";
import Header from "./shared/header";
import { globalStyles } from "./styles/global";
import { MaterialIcons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              style={globalStyles.menuIcon}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => <Header title={"Review App"} />,
        }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewDetails}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          // ...TransitionPresets.ScaleFromCenterAndroid,
          headerTitle: () => <Header title={"Review Details"} />,
        }}
      />
    </Stack.Navigator>
  );
};

const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About page",
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              style={globalStyles.menuIcon}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home Stack" component={HomeStack} />
        <Drawer.Screen name="About Stack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
