import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Stack } from "expo-router";

// Create a Client
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "My Temple" }}
          ></Stack.Screen>
          <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
