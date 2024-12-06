import VocabCard from "@/components/vocabulary/VocabCard";
import { Vocabulary, VocabularyHandler } from "@/courseData/VocabularyBank.json";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router"
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native"

export default function VocabularyPage(){
    const { lang, name } = useLocalSearchParams();
    const router = useRouter();
    const [langCode, setLangCode] = useState<any>();
    const [langName, setLangName] = useState<any>();
    const [vocabList, setVocabList] = useState<Vocabulary[]>();
    const [loading, setLoading] = useState<boolean>(true);
    useFocusEffect(
        React.useCallback(() => {
            if(lang && name){
                setLangCode(lang);
                setLangName(name);
            }
        }, [lang, name])
    );
    useEffect(() => {
        if(langCode){
            setVocabList(VocabularyHandler.getVocabularyByLang(langCode));
            setLoading(false);
        }
        return () => {
            setVocabList([]);
            setLoading(true);
        }
    }, [langCode])

    return(
        <>
            <ScrollView contentContainerStyle={styles.container}>
                {loading? 
                <>
                    <ActivityIndicator size="large" color="#00ff00" style={{}} />
                </>
                :
                <>
                    {vocabList?.map((vocab: Vocabulary, index: number) => 
                    <VocabCard 
                        key={index}
                        index={index+1}
                        title={vocab.title}
                        desc={vocab.desc}
                        onPress={() => {
                            console.log('Vocab card clicked');
                            router.push({
                                pathname: './vocabDetail',
                                params: { vocabId: vocab.id },
                            });
                        }}
                    />)}
                </>}
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