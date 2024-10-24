import { Root } from "@/constants/root.css";
import { Stack } from "expo-router";

export default function CourseStack(){
    return (
        <>
            {/* CourseStack */}
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
            </Stack>
        </>
    )

}