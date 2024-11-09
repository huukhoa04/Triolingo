import PageIndicator from "@/components/PageIndicator";
import CharacterLesson from "@/components/quizzes/CharacterLesson";
import { MultipleChoicesQuiz, QuizType } from "@/constants/QuizDefinitions";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
    const quizzes: any = require('@/constants/Quizzes');
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const router = useRouter();
    const handleNext = () => {
        if(currentQuizIndex === quizzes.numberOfQuizzes - 1){
            router.push
        }

    };
    const renderQuiz = () => {
        const quiz: MultipleChoicesQuiz = quizzes[currentQuizIndex];
        switch(quiz.type){
            case QuizType.CHARACTERS_LEARNING:
                return (
                    <CharacterLesson quiz={quiz} next={() => setCurrentQuizIndex(currentQuizIndex + 1)}/>
                );
        }
    }
    return (
        <>
            {/* LearningScreen */}
            <View style={styles.container}>
            <PageIndicator current={currentQuizIndex+1} total={quizzes.numberOfQuizzes}/>
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