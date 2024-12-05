import WordCard from "@/components/vocabulary/WordCard";
import { Vocabulary, VocabularyHandler } from "@/courseData/VocabularyBank.json";
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native"

export default function VocabDetail(){
    const { vocabId } = useLocalSearchParams();
    const [currentVocab, setCurrentVocab] = useState<Vocabulary>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    useEffect(() => {
        if(vocabId){
            setCurrentVocab(VocabularyHandler.getVocabulary(Number(vocabId)));
            setLoading(false);
        }
        return () => {
            setCurrentVocab(undefined);
            setLoading(true);
        }
    }, []);
    return (
        <ScrollView style={styles.container}>
            {loading? 
            <>
                <ActivityIndicator size="large" color="#00ff00" style={{}} />
            </>
            :
            <>
                {currentVocab?.words.map((word, index) => 
                <WordCard 
                    key={index}
                    index={index}
                    title={word.word}
                    desc={word.meaning}
                    onPress={() => {
                        console.log('Word card clicked');
                        router.push({
                            pathname: './word',
                            params: { vocabId: currentVocab?.id ,wordId: word.id },
                        });
                    }}
                />
                
                )}
            </>}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})