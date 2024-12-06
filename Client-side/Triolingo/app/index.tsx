import { Link, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useEffect } from "react";
import { Assets } from "@/constants/Assets";
import { Root } from "@/constants/root.css";
import auth from "@/utils/auth";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await auth.loggedIn();
      if (loggedIn) {
      router.push('/(tabs)');
      }
      else {
        router.push('/login');
      }
    };
    setTimeout(() => {
      //load back-end data
      checkLoginStatus();
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Root.primaryTheme.bgColor,
      }}
    >
      <Image source={Assets.logo} style={Assets.logocss.align}/>
      <Text style={{ color: Root.primaryTheme.fontColorWhite, 
        fontSize: 24, 
        fontFamily: Root.fontStyle.regular }}>
          Intializing...
      </Text>
    </View>
  );
}
