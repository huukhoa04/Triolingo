import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter} from 'expo-router';
import { lessonData } from '../../../data/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useMutation, useQuery } from "@apollo/client";
import {  UPDATE_EXPERIENCE } from "@/utils/mutations";
import { QUERY_ME } from "@/utils/queries";
import { UserData } from "@/interface/UserData";
import auth from "@/utils/auth";
const VocabQuiz: React.FC = () => {
  const { unitWords } = useLocalSearchParams();
  const [userData, setUserData] = useState<UserData>();
  const [parsedUnitWords, setParsedUnitWords] = useState<any>(null);
  const [lessonContent, setLessonContent] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<string | null>(null); 
  const [updateExperience] = useMutation(UPDATE_EXPERIENCE);
  const router = useRouter();

  const { data: userDataQuery, loading, error, refetch } = useQuery<any>(QUERY_ME, {
    skip: !userData,  // Skip if no user data is present yet
  });
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

  useEffect(() => {
    console.log('unitWords:', unitWords); 
    if (unitWords) {
      try {
        const decodedUnitWords = decodeURIComponent(unitWords as string);
        const parsed = JSON.parse(decodedUnitWords);
        setParsedUnitWords(parsed);

        const lessonIndex = parseInt(parsed.lessonUrl.replace('lesson-', ''), 10);
        const selectedLessonData = lessonData[lessonIndex];
        setLessonContent(selectedLessonData);
      } catch (error) {
        console.error('Error parsing unitWords:', error);
      }
    }
  }, [unitWords]);

  useEffect(() => {
    if (lessonContent) {
      const allQuestions = lessonContent.lessonUnits.flatMap((unit: any) => {
        return unit.unitContent.map((item: any) => {
          const correctAnswer = item.meanings;
          const incorrectAnswers = unit.unitContent
            .filter((i: any) => i.meanings !== correctAnswer)
            .slice(0, 3)
            .map((i: any) => i.meanings);

          const answers = [correctAnswer, ...incorrectAnswers];
          return {
            question: item.character,
            correctAnswer,
            answers: shuffleArray(answers),
          };
        });
      });

      setQuestions(allQuestions.slice(0, 20)); // Limit to 20 questions
    }
  }, [lessonContent]);

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const saveQuizState = async () => {
    try {
      await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    } catch (error) {
      console.error('Error saving quiz state:', error);
    }
  };

  const loadQuizState = async () => {
    try {
       // Đặt lại chỉ số câu hỏi
      setQuizResult(null);
      setCurrentQuestionIndex(0); 
      setSelectedAnswer(null); // Reset câu trả lời đã chọn
      // const savedQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
      // if (savedQuestionIndex !== null) {
      //   setCurrentQuestionIndex(parseInt(savedQuestionIndex, 10));
      // }
    } catch (error) {
      console.error('Error loading quiz state:', error);
    }
  };
  

  useEffect(() => {
    loadQuizState();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      Alert.alert('Error', 'Please select an answer before submitting.');
      return;
    }
    if (!userDataQuery?.me) {
      Alert.alert('Error', 'User data is not available.');
      return;
    }
    if (selectedAnswer === questions[currentQuestionIndex]?.correctAnswer) {
      setQuizResult('Correct! You got it right!');
      updateExperience({
        variables: {
          experience: parseInt(userDataQuery?.me.experience, 10) + 1,
        },
      });
      
    } else {
      setQuizResult(`Incorrect! The correct answer is: ${questions[currentQuestionIndex]?.correctAnswer}`);
    }
    saveQuizState();
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleExit = () => {
    Alert.alert(
      'Exit Quiz',
      'Are you sure you want to exit? The quiz will reset.',
      [
        { text: 'Cancel' },
        { text: 'OK', onPress: async () => {
          await AsyncStorage.removeItem('currentQuestionIndex');
          setCurrentQuestionIndex(0);
          setQuizResult(null); 
        setSelectedAnswer(null);
        router.back(); 
        }}
      ]
    );
  };

  const handleNextQuestion = () => {
    setQuizResult(null); 
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.unitTitle}>
            Question {currentQuestionIndex + 1}: Choose the same meaning for this {currentQuestion.question}
          </Text>
          {currentQuestion.answers.map((answer: string, idx: number) => {
            const isSelected = selectedAnswer === answer;
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.answerButton, isSelected && styles.selectedAnswerButton]}
                onPress={() => handleAnswerSelect(answer)}
              >
                <Text style={styles.answerText}>{answer}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          {quizResult && (
            <Text style={styles.resultText}>{quizResult}</Text>
          )}

          {quizResult && (
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <FontAwesome name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <FontAwesome name="times" size={24} color="white" />
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Text style={styles.text}>Loading Quiz...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content from the top
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1, // Allow scrolling
    justifyContent: 'flex-start', // Align content vertically
    alignItems: 'center',
    paddingBottom: 0,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  answerButton: {
    backgroundColor: Root.primaryTheme.bgColor,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  selectedAnswerButton: {
    backgroundColor: Root.primaryTheme.bgColor3,
  },
  answerText: {
    color: '#fff',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#2ecc71',
  },
  exitButton: {
    backgroundColor: Root.primaryTheme.bgColor,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute', // Keep exit button fixed at the bottom
    top: '90%',
  },
  nextButton: {
    backgroundColor:  Root.primaryTheme.bgColor,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VocabQuiz;
