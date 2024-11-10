import { StyleSheet, Text, View } from "react-native";
import { MultipleChoicesQuiz } from "@/constants/QuizDefinitions";
import { Root } from "@/constants/root.css";
import Choice from "../Choice";
import { useState } from "react";
import AnswerCheckAlert from "./AnswerCheckAlert";
import { KanaData } from "@/constants/Letter";
import IconBtn from "../IconBtn";
interface CharacterLessonProps {
    quiz: MultipleChoicesQuiz;
    handleSelected: (selected: any) => void;
    handleCorrect: (correct: any) => void;
}
export default function CharacterLesson({ quiz, handleSelected, handleCorrect } : CharacterLessonProps) {
    const match = quiz.question.match(/'([^']+)'/);
    const questionTitle = quiz.question.slice(0, match?.index);
    const letter = match ? match[1] : '';
    const audio = KanaData[letter as keyof typeof KanaData].audio //check if chosen an answer
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.question}>{questionTitle}</Text>
                <View style={styles.letterCard}>
                    <Text style={styles.letter}>{letter}</Text>
                </View>
                <View style={styles.optionHolder}>
                    <IconBtn type="audio" audio={audio} styles={{
                        alignSelf: 'center',
                    }}/>
                    {quiz.options.map((option: string, index: any) => {
                        return (
                            <Choice key={index} label={option} onPress={() => {
                                handleSelected(true);
                                if(quiz.checkAnswer(option)){
                                    handleCorrect(1);
                                }
                            }} check={quiz.checkAnswer(option)}/>
                        );
                    })}
                </View>
            </View>
            
        </>
        
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    question: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        color: Root.primaryTheme.bgColor3,
    },
    letterCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Root.primaryTheme.bgColor,
        color: '#fff',
        width: '100%',
        minHeight: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    letter: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 75,
        lineHeight: 100,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    optionHolder: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
    }
});