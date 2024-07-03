import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AppContextProvider } from "../context/context";
import StackHeader from "../components/StackHeader/StackHeader";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    regular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    medium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    semibold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    bold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontError) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AppContextProvider>
      <Stack
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="payment"
          options={{
            header: () => (
              <StackHeader label="Payment" backroute="(tabs)/checkout" />
            ),
          }}
        />
        <Stack.Screen
          name="success"
          options={{
            header: () => (
              <StackHeader label="Confirmed" backroute="/payment" />
            ),
            headerShown: false,
          }}
        />
      </Stack>
    </AppContextProvider>
  );
};

export default RootLayout;
