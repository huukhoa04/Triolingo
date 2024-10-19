import { Root } from "@/constants/root.css";
import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: Root.fontStyle.semibold,
                },
            }}>
                <Stack.Screen name="index" options={{
                    headerShown: false,

                }}/>
                <Stack.Screen name="courses" options={{
                    headerShown: true,
                }} />
                <Stack.Screen name="course" options={{
                }}/>
            </Stack>
        </>
    )
}