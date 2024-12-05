import IconBtn from "@/components/IconBtn";
import { Root } from "@/constants/root.css";
import { VocabularyHandler, Word } from "@/courseData/VocabularyBank.json";
import auth from "@/utils/auth";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "@/utils/mutations";
import { QUERY_BOOKMARKS_BY_USERNAME } from "@/utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native"

export default function WordPage(){
    const [user, setUser] = useState<any>();
    const { vocabId, wordId } = useLocalSearchParams();
    const [currentWord, setCurrentWord] = useState<Word>();
    const [loading, setLoading] = useState<boolean>(true);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    const {data, refetch} = useQuery<any>(QUERY_BOOKMARKS_BY_USERNAME, {
        variables: {username: user?.username},
        skip: !user,
    });
    const [addBookmark] = useMutation<any>(ADD_BOOKMARK, {
        variables: {username: user?.username, vocabId: Number(vocabId), wordId: Number(wordId)},
    });
    const [removeBookmark] = useMutation<any>(REMOVE_BOOKMARK, {
        variables: {username: user?.username, vocabId: Number(vocabId), wordId: Number(wordId)},
    });
    const handleBookmark = () => {
        if(vocabId && wordId){
            if(isBookmarked){
                removeBookmark();
                setIsBookmarked(false);
                refetch();
            }else{
                addBookmark();
                setIsBookmarked(true);
                refetch();
            }
        }
        else console.log('Error: vocabId or wordId is not defined');
    }
    useFocusEffect(
        React.useCallback(() => {
        console.log(vocabId, wordId);
        if(vocabId && wordId){
            auth.getProfile().then((profile) => {
                if(profile){
                    setUser(profile);
                    refetch({username: profile.username});
                }
            });
            console.log('Word page');
            setCurrentWord(VocabularyHandler.getWordByVocabulary(Number(vocabId), Number(wordId)));
            setLoading(false);
        }
        return () => {
            setCurrentWord(undefined);
            setIsBookmarked(false);
            setUser([]);
            setLoading(true);
        }
        }, [])
    );
    useEffect(() => {
        if(data){
            const bookmarks = data.getBookmarksByUsername;
            if(bookmarks){
                setIsBookmarked(bookmarks.some((bookmark: any) => bookmark.vocabId == vocabId && bookmark.wordId == wordId));
            }
        }
        return () => {
            setIsBookmarked(false);
        }
    }, [data]);
    return(
        <>
            <ScrollView contentContainerStyle={styles.container}>
                {loading? 
                    <>
                        <ActivityIndicator size="large" color="#00ff00" style={{}} />
                    </>
                    :
                    <>
                        <View style={{
                            width: 200,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.title}>{currentWord?.word}</Text>
                        </View>
                        <IconBtn 
                            name="bookmark"
                            iconColor={isBookmarked? Root.primaryTheme.bgColor: '#fff'}
                            style={{
                                backgroundColor: isBookmarked? '#fff': Root.primaryTheme.bgColor,
                                padding: 10,
                                paddingHorizontal: 15,
                                borderRadius: 25,
                            }}
                            onPress={() => {
                                handleBookmark();
                            }}
                        />
                        <View style={styles.descHolder}> 
                            <View style={styles.descComp}>
                                <Text style={styles.descLabel}>Meaning: </Text>
                                <Text style={styles.desc}>{currentWord?.meaning}</Text>
                            </View>
                            <View style={styles.descComp}>
                                <Text style={styles.descLabel}>Example: </Text>
                                <Text style={styles.desc}>{currentWord?.example} ({currentWord?.exampleMeaning})</Text>
                            </View>
                            <View style={styles.descComp}>
                                <Text style={styles.descLabel}>Yomikata: </Text>
                                <Text style={styles.desc}>{currentWord?.yomikata}</Text>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        rowGap: 20,
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        color: "#000",
        fontSize: 40,
        lineHeight: 25,
    },
    descHolder: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
    },
    descComp: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
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