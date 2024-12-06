import { Root } from "@/constants/root.css";
import { Stack } from "expo-router";

export default function VocabLayout(){

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
          name="vocabulary"
          options={{
            title: 'Vocabulary',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="vocabDetail"
          options={{
            title: 'Vocabulary',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="word"
          options={{
            title: 'Vocabulary',
            headerTitleAlign: 'center',
          }}
        />
      </Stack>
        </>
    )
}