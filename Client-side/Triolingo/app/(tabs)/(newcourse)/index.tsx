import CountryCard from "@/components/CountryCard";
import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";


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
    const HandleNavigate = (languageCode: string) => {
        return () => {
            router.push({
                pathname: './courses',
                params: { isoCode: languageCode },
            });
        };
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select language that you desire to learn</Text>
            {/* <Button title="Go to Courses" onPress={() => router.push('/courses')} /> */}
            <ScrollView 
                contentContainerStyle={styles.optionHolderText}
                style={styles.optionHolder}
            >
                <CountryCard flag={'jp'} name={'Japanese'} onPress={HandleNavigate('jp')}/>
                <CountryCard flag={'vn'} name={'Vietnamese'} onPress={HandleNavigate('vn')}/>
                <CountryCard flag={'kp'} name={'Korean'} onPress={HandleNavigate('kp')}/>
                <CountryCard flag={'cn'} name={'Chinese'} onPress={HandleNavigate('cn')}/>
            </ScrollView>
            <CustomBtn type={'blue'} title={'Go back'} onPress={() => {navigation.goBack()}}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20,
        rowGap: 20,
    },
    title: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
    },
    optionHolder: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderRadius: 5,
        width: '100%',
        maxHeight: 300,

        borderWidth: 0,
    },
    optionHolderText: {
        rowGap: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});