import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "My Temple" }}
        ></Stack.Screen>
        <Stack.Screen
          name="product/[id]"
          options={{ title: "Services" }}
        ></Stack.Screen>
      </Stack>
    </GluestackUIProvider>
  );
}
