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
        setIsCorrect(0);
    }, [props.quiz]);


    const handleOption = (option: string) => () => {
        console.log("handle option");
        if (isSubmitted) return;
        if (answer.includes(option)) {
            console.log("if answer includes option");
            setOptionIni((prevOptionIni) => [...prevOptionIni, option]);
            setAnswer((prevAnswer) => prevAnswer.filter((item) => item !== option));
        } else {
            console.log("if answer doesn't include option");
            setAnswer((prevAnswer) => [...prevAnswer, option]);
            setOptionIni((prevOptionIni) => prevOptionIni.filter((item) => item !== option));
            console.log("done handle option");
        }
    };

    const handleSubmit = () => {
        console.log("handle submit");
        setIsSubmitted(true);
        if(props.quiz.checkAnswer(answer.join(''))){
            props.handleCorrect(1);
            setIsCorrect(1);
        }
        else {
            props.handleCorrect(0);
        }
        props.handleSelected(true);
        console.log("done handle submit");
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.question}>{props.quiz.question}</Text>
                <View style={answer.length > 0 ? styles.answerSubmitHolder : {}}>
                    {answer.map((option: string, index: any) => {
                        return (
                            <Choice 
                            styles={{
                                borderWidth: isSubmitted ? 3 : 0,
                                borderColor: isSubmitted ? (isCorrect ? "#66ff33" : "#ff0000") : {},
                                width: 'auto',
                                minWidth: 0,
                                padding: 10,
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
                            styles={{
                                width: 'auto',
                                minWidth: 0,
                            }}
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
        flex: 1,
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
        maxWidth: '100%',
        flexDirection: 'row',
        columnGap: 10,
        rowGap: 10,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        borderWidth: 2,
        borderColor: Root.primaryTheme.bgColor,
        borderRadius: 10,
        padding: 10,
    },
    answerHolder: {
        rowGap: 10,
        width: '100%',
        flexDirection: 'row',
        columnGap: 10,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});