import { Root } from "@/constants/root.css";
import { VocabularyHandler, Word } from "@/courseData/VocabularyBank.json";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native"

export default function Word(){
    const { vocabId, wordId } = useLocalSearchParams();
    const [currentWord, setCurrentWord] = useState<Word>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        console.log(vocabId, wordId);
        if(vocabId && wordId){
            console.log('Word page');
            setCurrentWord(VocabularyHandler.getWordByVocabulary(Number(vocabId), Number(wordId)));
            setLoading(false);
        }
        return () => {
            setCurrentWord(undefined);
            setLoading(true);
        }
    }, []);
    return(
        <>
            <ScrollView style={styles.container}>
                {loading? 
                    <>
                        <ActivityIndicator size="large" color="#00ff00" style={{}} />
                    </>
                    :
                    <>
                        <Text style={styles.title}>{currentWord?.word}</Text>
                        <View style={styles.descHolder}> 
                            <View style={styles.descComp}>
                                <Text style={styles.descLabel}>Meaning: </Text>
                                <Text style={styles.desc}>{currentWord?.meaning}</Text>
                            </View>
                            <View style={styles.descComp}>
                                <Text style={styles.descLabel}>Example: </Text>
                                <Text style={styles.desc}>{currentWord?.example} ({currentWord?.exampleMeaning})</Text>
                            </View>
                        </View>
                    </>    
                }
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        color: "#000",
        fontSize: 25,
        lineHeight: 25,
    },
    descHolder: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    descComp: {
        display: 'flex',
        flexDirection: 'row',
    },
    descLabel: {
        fontFamily: Root.fontStyle.bold,
        color: "#000",
        fontSize: 20,
        lineHeight: 20,
    }, 
    desc: {
        fontFamily: Root.fontStyle.regular,
        color: "#000",
        fontSize: 20,
        lineHeight: 20,
    }
})