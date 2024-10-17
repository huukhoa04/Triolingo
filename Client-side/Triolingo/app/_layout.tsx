import { Stack } from "expo-router";
import {
  useFonts,
  LeagueSpartan_100Thin,
  LeagueSpartan_200ExtraLight,
  LeagueSpartan_300Light,
  LeagueSpartan_400Regular,
  LeagueSpartan_500Medium,
  LeagueSpartan_600SemiBold,
  LeagueSpartan_700Bold,
  LeagueSpartan_800ExtraBold,
  LeagueSpartan_900Black,
} from '@expo-google-fonts/league-spartan';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import Login from "./login";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const noHeader = {
    headerShown: false
  }


  const [loaded, error] = useFonts({
    LeagueSpartan_100Thin,
    LeagueSpartan_200ExtraLight,
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LeagueSpartan_800ExtraBold,
    LeagueSpartan_900Black,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="index" options={noHeader}/>
      <Stack.Screen name="login" options={noHeader} />
      <Stack.Screen name="signup" options={noHeader}/>
      <Stack.Screen name="test" options={noHeader}/>
      <Stack.Screen name="main" options={noHeader}/>
    </Stack>
  );
}
