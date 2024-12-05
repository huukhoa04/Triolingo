import CountryCard from "@/components/CountryCard";
import { LangType } from "@/courseData/LangType.json";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function VocabIndex(){
    
    const router = useRouter();
    const LangList = LangType;
    return (
    <>
    
            <ScrollView contentContainerStyle={styles.container}>
                {LangList.map((lang, index) => 
                <CountryCard
                    key={index}
                    flag={lang.code}
                    name={lang.name}
                    onPress={() => {
                        router.push({
                            pathname: './vocabulary',
                            params: { lang: lang.code, name: lang.name },
                        });
                    }}
                />)}
            </ScrollView>
    </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
    }
})