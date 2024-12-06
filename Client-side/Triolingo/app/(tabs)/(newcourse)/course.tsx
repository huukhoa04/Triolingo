
import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { LessonHandler } from "@/courseData/Lesson.json";
import auth from "@/utils/auth";
import { ADD_COURSE_TO_USER } from "@/utils/mutations";
import { QUERY_COURSES_BY_COURSE_ID, QUERY_COURSES_COUNT_BY_COURSE_ID } from "@/utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function CourseIndex() {
    const { id } = useLocalSearchParams();
    const lesson = LessonHandler.getLesson(Number(id));
    const navigation = useNavigation();
    const [userData, setUserData] = useState<any>();
    const [joinCourse] = useMutation(ADD_COURSE_TO_USER);
    const {data} = useQuery<any>(QUERY_COURSES_COUNT_BY_COURSE_ID, {
        variables: { courseId: Number(id) },
    });
    useEffect(() => {
        auth.getProfile().then((profile) => {
            setUserData(profile);
            console.log(profile);
        });
    },[]);
    useEffect(() => {
        navigation.setOptions({
             title: 'Browse courses',
             headerShown: true,
             headerTitleAlign: 'center',
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={Root.flex.row}>
                <Text style={styles.title}>{lesson?.title}</Text>
                <CountryFlag isoCode={'jp'} size={45} style={styles.flag}/>
            </View>
            <Text style={{
                fontFamily: Root.fontStyle.semibold,
                fontSize: 26,
            }}>
                Rating: <Text style={{
                    fontFamily: Root.fontStyle.regular,
                    fontSize: 26,
                }}>
                    5/5
                </Text>
            </Text>
            <Text style={styles.description}>{lesson?.description}</Text>
            <View style={styles.infoHolder}>
                <Text style={styles.label}>Number of quizzes: <Text style={styles.text}>{lesson?.numberOfQuizzes}</Text></Text>
                <Text style={styles.label}>People joined this course: <Text style={styles.text}>{data && data.userCoursesCountByCourseId}</Text></Text>
            </View>
            <View style={styles.button}>
            <CustomBtn 
                type={'green'}
                    title="Attend this course"
                    onPress={() => {
                        Alert.alert('Join Course', `Are you sure you want to join this course? ${id}`, [{
                            text: 'Yes',
                            onPress: async () => {
                                await joinCourse({
                                    variables: { courseId: Number(id), username: userData?.username },
                                }).then((res) => {
                                    if(res){
                                        if(res.errors){
                                            Alert.alert('Failed', 'You have joined this course already');
                                        } else {
                                            Alert.alert('Success', 'You have successfully joined the course');
                                        }
                                    }
                                    else{
                                        Alert.alert('Failed', 'An unexpected error occurred or you may have joined this course already');
                                    }
                                });
                            }
                        }, {
                            text: 'No',
                            onPress: () => {
                                Alert.alert('Cancelled', 'You have cancelled the course');
                            }
                        }]);
                    }}
                />
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {

        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 40,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        color: '#000',
        alignSelf: 'center',
    },
    flag: {
        borderRadius: 5,
    },
    description: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 20,
        color: '#000',
        // alignSelf: 'center',
    },
    infoHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center',
        // rowGap: 20,
        width: '100%',
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 18,
        fontFamily: Root.fontStyle.bold,
    },
    text: {
        fontSize: 18,
        fontFamily: Root.fontStyle.regular,
    },
    button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,
    },
});