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
                headerTintColor: 'transparent',
                headerTitleStyle: {
                    fontFamily: Root.fontStyle.semibold,
                },
            }}>
                <Stack.Screen name="learning" options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="complete" options={{
                    headerShown: false,
                }}/>
            </Stack>
        </>
    )

}