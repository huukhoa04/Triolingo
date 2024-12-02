import PageIndicator from "@/components/PageIndicator";
import AnswerCheckAlert from "@/components/quizzes/AnswerCheckAlert";
import CharacterLesson from "@/components/quizzes/CharacterLesson";
import SentenceCompletion from "@/components/quizzes/SentenceCompletion";
import { MultipleChoicesQuiz, QuizType } from "@/constants/QuizDefinitions.d";
import { LessonHandler } from "@/courseData/Lesson.json";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
    //test quizzes
    //get question tuples from SampleQuizzes
    const { courseId } = useLocalSearchParams();
    console.log(courseId);
    const [lesson, setLesson] = useState(LessonHandler.getLesson(Number(courseId)) || null);
    const [selected, setSelected] = useState(false);
    const [correct, setCorrect] = useState(0); //check if chosen an answer
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useFocusEffect(
        React.useCallback(() => {
            setSelected(false);
            setCorrect(0);
            setCurrentQuizIndex(0);
            setLesson(LessonHandler.getLesson(Number(courseId)) || null);
            console.log("Screen focused, state reset");
            setLoading(false);
        }, [])
    );
    if (loading) 
    {
        return(
            <>
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            </>
        )
    }
    else if(lesson === null){
            return(
            <>
                <View style={styles.container}>
                    <Text>FAILED TO OPEN QUIZZES</Text>
                </View>
            </>
            );
    }
    else
    {
        const handleNext = () => {
            setCorrect(0);
            setSelected(false);
            if(currentQuizIndex === lesson.numberOfQuizzes - 1){
                router.push({
                    pathname: './complete',
                    params: {
                        title: 'Congratulations!',
                        message: 'You have completed the lesson!',
                    },
                })
            }
            else setCurrentQuizIndex(currentQuizIndex + 1);
        };
        const renderQuiz = () => {
            const quiz: MultipleChoicesQuiz = lesson.quizzes[currentQuizIndex];
            switch(quiz.type){
                case QuizType.CHARACTERS_LEARNING:{
                    return (
                        <>
                            <CharacterLesson 
                            quiz={quiz} 
                            handleCorrect={setCorrect}
                            handleSelected={setSelected}/>
                        </>
                    );
                }
                case QuizType.SENTENCES_COMPLETION:{
                    return (
                        <>
                            <SentenceCompletion 
                                quiz={quiz}
                                handleCorrect={setCorrect}
                                handleSelected={setSelected}
                            />
                        </>
                    );
                }
                default: 
                    return (
                        <>
                        </>
                    );
            }
        }
        return (
            <>
                {/* LearningScreen */}
                {(selected && correct === 1)? 
                                <>
                                    <AnswerCheckAlert correct={true} explaination={lesson.quizzes[currentQuizIndex].explaination}
                                    onClose={handleNext}/> 
                                </>
                            : (selected && correct !== 1)? 
                                <>
                                    <AnswerCheckAlert correct={false} explaination={lesson.quizzes[currentQuizIndex].explaination}
                                    onClose={handleNext}/>
                                </>
                            :
                            null}
                <View style={styles.container}>
                <PageIndicator current={currentQuizIndex+1} total={lesson.numberOfQuizzes}/>
                    {renderQuiz()}
                </View>
            </>
        );}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});