import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(()=>{
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={DarkTheme}>
        
        <Stack>

          <Stack.Screen 
            name="index" options={{ headerShown: false }} 
          />

          <Stack.Screen 
            name="permissions" 
            options={{presentation: "modal", headerShown: true}}
          />

          <Stack.Screen
            name="media"
            options={{presentation: "modal", headerShown: false}}
          />

          <Stack.Screen
            name="+not-found"
            options={{presentation: "modal"}}
          />
        
      </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
