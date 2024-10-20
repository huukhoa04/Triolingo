import PageIndicator from "@/components/PageIndicator";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
    const quizzes = [
        { type: 1, question: 'What is the pronouciation of this letter?' , query: 'letter:き;ki,sa,chi,su;0', audio: 'path/to/audio.mp3' },
        { type: 2, question: 'Complete this sentence', query: 'sentence:私は__です;学生,先生,医者,会社員;' },
        { type: 3, question: 'Match the correct tuples', query: 'a-b;g-h;c-d;m-n;d-h' },
    ];
    const renderQuiz = () => {
        const quiz = quizzes[currentQuizIndex];
        switch(quiz.type){
            case 1:
                return (
                    <Text>{quiz.question}</Text>
                );
            case 2:
                return (
                    <Text>{quiz.question}</Text>
                );
            case 3:
                return (
                    <Text>{quiz.question}</Text>
                );
            default:
                return (
                    <Text>no question</Text>
                );
        }
    }
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    return (
        <>
            {/* LearningScreen */}
            <View style={styles.container}>
            <PageIndicator current={currentQuizIndex+1} total={30}
                left={() => {
                    console.log(`indexleftb4: ${currentQuizIndex}`);
                    setCurrentQuizIndex(currentQuizIndex - 1);
                    console.log(`indexleft: ${currentQuizIndex}`);
                }}
                right={() => {
                    console.log(`indexrightb4: ${currentQuizIndex}`);
                    setCurrentQuizIndex(currentQuizIndex + 1);
                    console.log(`indexright: ${currentQuizIndex}`);
                }}
            />
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