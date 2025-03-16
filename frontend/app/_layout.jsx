import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Link, Stack } from "expo-router";

import { Icon } from "@/components/ui/icon";
import { ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
// import { useAuth } from '@/store/authStore';

// Create a Client
const queryClient = new QueryClient();

export default function RootLayout() {
  const cartItemsNum = useCart((state) => state.items.length);
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href={"/cart"} asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={ShoppingCart} />
                  <Text>{cartItemsNum}</Text>
                </Pressable>
              </Link>
            ),
            headerLeft: () => (
              <Link href={"/login"} asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={User} />
                </Pressable>
              </Link>
            ),
          }}
        >
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
