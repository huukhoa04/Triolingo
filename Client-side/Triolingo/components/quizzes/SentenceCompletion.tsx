import { MultipleChoicesQuiz } from "@/constants/QuizDefinitions";
import { Root } from "@/constants/root.css";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Choice from "../Choice";
import CustomBtn from "../CustomBtn";
interface Props {
    quiz: MultipleChoicesQuiz;
    handleSelected: (selected: any) => void;
    handleCorrect: (correct: any) => void;
}

export default function SentenceCompletion(props : Props) {
    const [answer, setAnswer] = useState<string[]>([]);
    const [optionIni, setOptionIni] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        setAnswer([]);
        setOptionIni([...props.quiz.options]);
        setIsSubmitted(false);
    }, [props.quiz]);


    const handleOption = (option: string) => () => {
        if (isSubmitted) return;
        if (answer.includes(option)) {
            setOptionIni([...optionIni, option]);
            setAnswer(answer.filter((item) => item !== option));
        } else {
            setAnswer([...answer, option]);
            setOptionIni(optionIni.filter((item) => item !== option));
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if(props.quiz.checkAnswer(answer.join(''))){
            props.handleCorrect(1);
            setIsCorrect(1);
        }
        else {
            props.handleCorrect(0);
        }
        props.handleSelected(true);
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.question}>{props.quiz.question}</Text>
                <View style={styles.answerSubmitHolder}>
                    {answer.map((option: string, index: any) => {
                        return (
                            <Choice 
                            styles={{
                                borderColor: isSubmitted? (isCorrect ? "#66ff33" : "#ff0000") : {},
                            }}
                            type="sentence" 
                            key={index} 
                            label={option}
                            onPress={handleOption(option)}
                            />
                        );
                    })}
                </View>
                <View style={styles.answerHolder}>
                    {optionIni.map((option: string, index: any) => {
                        return (
                            <Choice 
                            type="sentence" 
                            key={index} 
                            label={option} 
                            onPress={handleOption(option)}/>
                        );
                    })}
                </View>
                <CustomBtn title="Submit" onPress={handleSubmit}/>
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
    label: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 20,
        color: Root.primaryTheme.bgColor3,
    },
    answerSubmitHolder: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 10,
        flexWrap: 'wrap',
    },
    answerHolder: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 10,
        flexWrap: 'wrap',
    }
});