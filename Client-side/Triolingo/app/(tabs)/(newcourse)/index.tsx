import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NewCourse() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({
             headerShown: false,
             headerTitleAlign: 'center',
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select your desired language</Text>
            {/* <Button title="Go to Courses" onPress={() => router.push('/courses')} /> */}

            <CustomBtn type={'blue'} title={'Go back'} onPress={() => {navigation.goBack()}}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        rowGap: 20,
    },
    title: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
    },
});