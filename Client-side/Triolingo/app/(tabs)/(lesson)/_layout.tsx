import { Root } from "@/constants/root.css";
import { Stack } from "expo-router";

export default function LessonLayout(){

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
      }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Vocabulary',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="vocabquiz"
          options={{
            title: 'Vocabulary',
            headerTitleAlign: 'center',
          }}
        />
      </Stack>
        </>
    )
}