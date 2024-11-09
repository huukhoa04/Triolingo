import { StyleSheet, Text, View } from "react-native";
import { MultipleChoicesQuiz } from "@/constants/QuizDefinitions";
import { Root } from "@/constants/root.css";
import Choice from "../Choice";
import { useState } from "react";
import AnswerCheckAlert from "./AnswerCheckAlert";
interface CharacterLessonProps {
    quiz: MultipleChoicesQuiz;
    next: () => void;
}
export default function CharacterLesson({ quiz, next } : CharacterLessonProps) {
    const match = quiz.question.match(/'([^']+)'/);
    const questionTitle = quiz.question.slice(0, match?.index);
    const letter = match ? match[1] : '';
    const [selected, setSelected] = useState(false);
    const [correct, setCorrect] = useState(0); //check if chosen an answer
    const answerCheck = (option: string) => {
        if(option === quiz.answer){
            return true;
        }
        else return false;
    };
    const handleNext = () => {
        next();
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.question}>{questionTitle}</Text>
                <View style={styles.letterCard}>
                    <Text style={styles.letter}>{letter}</Text>
                </View>
                <View style={styles.optionHolder}>
                    {quiz.options.map((option: string, index: any) => {
                        return (
                            <Choice key={index} text={option} onPress={() => {
                                setSelected(true);
                                if(answerCheck(option)){
                                    setCorrect(1);
                                }
                            }} check={answerCheck}/>
                        );
                    })}
                </View>
            </View>
            {(selected && correct === 1)? 
            setTimeout(() => {
                return (
                    <>
                        <AnswerCheckAlert correct={true} explaination={`The correct pronounciation for ${letter} is ${quiz.answer}`}
                         onClose={handleNext}/>
                    </>
                )
            })
            : 
            null}
        </>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    question: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        color: '#000',
    },
    letterCard: {
        justifyContent: 'flex-start',
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