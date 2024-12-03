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
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Login from "./login";
import { Root } from "@/constants/root.css";
SplashScreen.preventAutoHideAsync();
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Thay đổi nếu cần
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const noHeader: any = {
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
    <ApolloProvider client={client}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: Root.primaryTheme.bgColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: Root.fontStyle.semibold,
        },
      }}
      >
      <Stack.Screen name="index" options={noHeader}/>
      <Stack.Screen name="login" options={noHeader} />
      <Stack.Screen name="signup" options={noHeader}/>
      <Stack.Screen name="test" options={{}}/>
      <Stack.Screen name="(tabs)" options={noHeader} />
      </Stack>
    </ApolloProvider>
    
  );
}
