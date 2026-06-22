import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,        // sem barra de titulo
          contentStyle: { backgroundColor: "#0a0a0f" },
          animation: "slide_from_right",
        }}
      />
    </>
  );
}
