import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Screen",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "Tabs Navigation",
        }}
      />
    </Stack>
  );
}
