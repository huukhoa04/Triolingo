import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href='./signup'>Signup</Link>
    </View>
  );
}
