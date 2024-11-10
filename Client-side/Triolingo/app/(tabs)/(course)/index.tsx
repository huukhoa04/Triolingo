import PageIndicator from "@/components/PageIndicator";
import AnswerCheckAlert from "@/components/quizzes/AnswerCheckAlert";
import CharacterLesson from "@/components/quizzes/CharacterLesson";
import { MultipleChoicesQuiz, QuizType } from "@/constants/QuizDefinitions";
import { SampleQuizzes } from "@/constants/Quizzes";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
    //get question tuples from SampleQuizzes
    const data = require('@/constants/Quizzes');
    const lesson = data["SampleQuizzes"];
    // const shuffledQuizzes = lesson.quizzes.sort(() => 0.5 - Math.random());
    // const selectedQuizzes = shuffledQuizzes.slice(0, 15);
    // lesson.quizzes = selectedQuizzes;
    // lesson.numberOfQuizzes = selectedQuizzes.length;

    const [selected, setSelected] = useState(false);
    const [correct, setCorrect] = useState(0); //check if chosen an answer
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const router = useRouter();




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
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});