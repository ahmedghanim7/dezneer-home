import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Segoe-UI-Regular": require("../assets/fonts/segoeui.ttf"),
    "Segoe-UI-Bold": require("../assets/fonts/segoeuib.ttf"),
    "Segoe-UI-Italic": require("../assets/fonts/segoeuii.ttf"),
    "Segoe-UI-Light": require("../assets/fonts/segoeuil.ttf"),
    "Segoe-UI-Semi-Light": require("../assets/fonts/segoeuisl.ttf"),
    "Segoe-UI-Bold-Italic": require("../assets/fonts/segoeuiz.ttf"),
    "Segoe-UI-Black": require("../assets/fonts/seguibl.ttf"),
    "Segoe-UI-Black-Italic": require("../assets/fonts/seguibli.ttf"),
    "Segoe-UI-Light-Italic": require("../assets/fonts/seguili.ttf"),
    "Segoe-UI-Semi-Bold": require("../assets/fonts/seguisb.ttf"),
    "Segoe-UI-Semi-Bold-Italic": require("../assets/fonts/seguisbi.ttf"),
    "Segoe-UI-Semi-Light-Italic": require("../assets/fonts/seguisli.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      </Stack>
    </GestureHandlerRootView>
  );
}
