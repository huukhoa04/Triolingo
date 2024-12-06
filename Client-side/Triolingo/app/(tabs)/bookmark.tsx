import WordCard from "@/components/vocabulary/WordCard";
import { Root } from "@/constants/root.css";
import { VocabularyHandler } from "@/courseData/VocabularyBank.json";
import auth from "@/utils/auth";
import { QUERY_BOOKMARKS_BY_USERNAME } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";

export default function BookmarkPage() {

    const router = useRouter();
    const [user, setUser] = useState<any>();
    const [userData, setUserData] = useState<any>();
    const {loading, data, refetch} = useQuery<any>(QUERY_BOOKMARKS_BY_USERNAME, {
        variables: {username: user?.username},
        skip: !user,
    });
    const [bookmarkWords, setBookmarkWords] = useState<any>();
    //fetch user
    useFocusEffect(
        React.useCallback(() => {
            auth.getProfile().then((profile) => {
                setUser(profile);
                refetch({username: profile.username});
            });
            return () => {
                setUser([]);
            }
        }, [])
    )
    //fetch user bookmarks
    useEffect(() => {
        if(data){
            setUserData(data.getBookmarksByUsername);
        }
        return () => {
            setUserData([]);
        }
    }, [data]);
    //fetch bookmarked words
    useEffect(() => {
        if(userData){
            setBookmarkWords(userData.map((word: any) => {
                const wordObj = VocabularyHandler.getWordByVocabulary(word.vocabId, word.wordId);
                return { wordObj: wordObj, vocabId: word.vocabId };
            }));
        }
        return () => {
            setBookmarkWords([]);
        }
    }, [userData]);
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                {loading?
                <>
                    <ActivityIndicator size="large" color="#00ff00" style={{}} />
                </>
                :
                <>
                {userData && console.log(userData)}
                    {bookmarkWords && 
                    bookmarkWords.length > 0?
                    bookmarkWords.map((word: any, index: number) => 
                    <WordCard 
                        key={index}
                        index={index}
                        title={word.wordObj.word}
                        desc={word.wordObj.meaning}
                        onPress={() => {
                            console.log('Word card clicked');
                            router.push({
                                pathname: './word',
                                params: { vocabId: word.vocabId ,wordId: word.wordObj.id },
                            });
                        }}
                    />
                    )
                    :
                    <>
                        <Text style={styles.label}>No bookmarked words</Text>
                    </>
                    }
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
    label: {
        fontFamily: Root.fontStyle.semibold,
        color: "#000",
        marginTop: 20,
        fontSize: 25,
        lineHeight: 25,
    }
});