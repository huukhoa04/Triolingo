import VocabCard from "@/components/vocabulary/VocabCard";
import { Vocabulary, VocabularyHandler } from "@/courseData/VocabularyBank.json";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VocabularyPage() {
    const { lang, name } = useLocalSearchParams();
    const router = useRouter();
    const [langCode, setLangCode] = useState<any>();
    const [langName, setLangName] = useState<any>();
    const [vocabList, setVocabList] = useState<Vocabulary[]>();
    const [filteredWords, setFilteredWords] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {
            if (lang && name) {
                setLangCode(lang);
                setLangName(name);
            }
        }, [lang, name])
    );

    useEffect(() => {
        if (langCode) {
            const vocabData = VocabularyHandler.getVocabularyByLang(langCode);
            setVocabList(vocabData);
            setFilteredWords(
                vocabData.flatMap((vocab) => vocab.words.map((word) => ({ ...word, vocabId: vocab.id })))
            );
            setLoading(false);
        }
        return () => {
            setVocabList([]);
            setFilteredWords([]);
            setLoading(true);
        };
    }, [langCode]);

    useEffect(() => {
        if (vocabList) {
            const filtered = vocabList.flatMap((vocab) =>
                vocab.words
                    .filter((word) =>
                        word.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        word.romaji.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((word) => ({ ...word, vocabId: vocab.id }))
            );
            setFilteredWords(filtered);
        }
    }, [searchTerm, vocabList]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search vocabulary..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <ScrollView contentContainerStyle={styles.list}>
                    {searchTerm ? (
                        filteredWords.map((word, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.wordCard}
                                onPress={() =>
                                    router.push({
                                        pathname: "./word",
                                        params: { vocabId: word.vocabId, wordId: word.id },
                                    })
                                }
                            >
                                <Text style={styles.wordText}>Word: {word.word}</Text>
                                <Text style={styles.meaningText}>Meaning: {word.meaning}</Text>
                                <Text style={styles.romajiText}>Romaji: {word.romaji}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        vocabList?.map((vocab, index) => (
                            <VocabCard
                                key={index}
                                index={index + 1}
                                title={vocab.title}
                                desc={vocab.desc}
                                onPress={() => {
                                    router.push({
                                        pathname: "./vocabDetail",
                                        params: { vocabId: vocab.id },
                                    });
                                }}
                            />
                        ))
                    )}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    searchBar: {
        width: "100%",
        height: 55,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    list: {
        alignItems: "center",
        paddingBottom: 20,
    },
    wordCard: {
        width: "100%",
        marginVertical: 5,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    wordText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    meaningText: {
        fontSize: 14,
        color: "#555",
    },
    romajiText: {
        fontSize: 14,
        color: "#888",
    },
});
