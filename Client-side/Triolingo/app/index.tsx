import { Link, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useEffect } from "react";
import { Assets } from "@/constants/Assets";
import { Root } from "@/constants/root.css";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //load back-end data
      router.push({
        pathname: "./login",
      });
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
