import CustomBtn from "@/components/CustomBtn";
import PageIndicator from "@/components/PageIndicator";
import AnswerCheckAlert from "@/components/quizzes/AnswerCheckAlert";
import CharacterLesson from "@/components/quizzes/CharacterLesson";
import SentenceCompletion from "@/components/quizzes/SentenceCompletion";
import { MultipleChoicesQuiz, QuizType } from "@/constants/QuizDefinitions.d";
import { LessonHandler } from "@/courseData/Lesson.json";
import { UserData } from "@/interface/UserData";
import auth from "@/utils/auth";
import { UPDATE_COURSE_STATS, UPDATE_EXPERIENCE } from "@/utils/mutations";
import { QUERY_ME } from "@/utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function LearningScreen() {
    //test quizzes
    //get question tuples from SampleQuizzes
    const { courseId, times, highestCorrect } = useLocalSearchParams();
    console.log(courseId);
    const [userData, setUserData] = useState<UserData>();
    const [lesson, setLesson] = useState(LessonHandler.getLesson(Number(courseId)) || null);
    const [selected, setSelected] = useState(false);
    const [correct, setCorrect] = useState(0); //check if chosen an answer
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [totalCorrected, setTotalCorrected] = useState(0);
    const [updateCourse] = useMutation(UPDATE_COURSE_STATS);
    const [updateExperience] = useMutation(UPDATE_EXPERIENCE);
    const {data, refetch} = useQuery<any>(QUERY_ME, {
        skip: !userData,
    });
    const router = useRouter();
    useEffect(() => {
        auth.getProfile().then((profile) => {
            setUserData(profile);
        });
    }, []);
    useEffect(() => {
        if(userData){
            refetch();
        }
    }, [userData]);
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
                console.log("Course completed:" + JSON.stringify({
                    username: userData?.username,
                    courseId: Number(courseId),
                    times: Number(times) + 1,
                    highestCorrect: Number(highestCorrect) > totalCorrected? highestCorrect : totalCorrected,
                    isCompleted: true,
                    visible: true,
                }));
                updateCourse({
                    variables: {
                        username: userData?.username,
                        courseId: Number(courseId),
                        timeLearned: Number(times) + 1,
                        highestCorrected: Number(highestCorrect) > totalCorrected? highestCorrect : totalCorrected,
                        isCompleted: true,
                        visible: true,
                    }
                });
                updateExperience({
                    variables: {
                        username: userData?.username,
                        experience: data?.me.experience,
                    }
                });
                router.push({
                    pathname: './complete',
                    params: {
                        courseId: courseId,
                        corrected: totalCorrected,
                        total: lesson.numberOfQuizzes,
                        isCompleted: "true",
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
        const handleQuit = () => {
            if(currentQuizIndex !== lesson.numberOfQuizzes - 1){
                updateCourse({
                    variables: {
                        username: userData?.username,
                        courseId: Number(courseId),
                        timeLearned: Number(times) + 1,
                        highestCorrected: Number(highestCorrect) > totalCorrected? highestCorrect : totalCorrected,
                        isCompleted: false,
                        visible: true,
                    }
                });
                router.push({
                    pathname: './complete',
                    params: {
                        courseId: courseId,
                        corrected: totalCorrected,
                        total: lesson.numberOfQuizzes,
                        isCompleted: "false",
                    },
                })
            }
        };
        return (
            <>
                {/* LearningScreen */}
                {(selected && correct === 1)? 
                                <>
                                    <AnswerCheckAlert correct={true} explaination={lesson.quizzes[currentQuizIndex].explaination}
                                    onClose={() => {
                                        setTotalCorrected(totalCorrected + 1);
                                        handleNext();
                                    }}/> 
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
                    <View style={styles.quiz}>
                        {renderQuiz()}
                    </View>
                    <View style={styles.btnHolder}>
                        <CustomBtn type={"red"} title="Quit" onPress={handleQuit}/>
                    </View>               
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
    },
    quiz: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});