import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { LessonHandler } from "@/courseData/Lesson.json";
import auth from "@/utils/auth";
import { UPDATE_COURSE_STATS } from "@/utils/mutations";
import { useMutation } from "@apollo/client";
import { useFocusEffect, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import CountryFlag from "react-native-country-flag";

export default function AttendedCourseIndex() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({
             headerShown: true,
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);

    const { courseId, dateJoined, times, highestCorrect, total } = useLocalSearchParams();
    const [userData, setUserData] = useState<any>();
    const [updateCourse] = useMutation(UPDATE_COURSE_STATS);
    const [courseInfo, setCourseInfo] = useState<any>(LessonHandler.getLesson(Number(courseId)));
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setCourseInfo(LessonHandler.getLesson(Number(courseId)));
    //     auth.getProfile().then((profile) => {
    //         setUserData(profile);
    //     });
    // }, []);
    useFocusEffect(
        React.useCallback(() => {
            console.log(courseId);
            setCourseInfo(LessonHandler.getLesson(Number(courseId)));
            auth.getProfile().then((profile) => {
                setUserData(profile);
            });
            setLoading(false);
            return () => {
                setLoading(true)
            }
        }, [courseId])
    );
    
    const percentage = Math.round((Number(highestCorrect) / Number(total)) * 100);
    // console.log(title, flag, description, dateAttended, timeLearned, corrected, total);
    if (loading) 
        {
            return(
                <>
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#00ff00" style={{

                        }} />
                    </View>
                </>
            )
        }
    else
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={Root.flex.row}>
                <Text style={styles.title}>{courseInfo?.title}</Text>
                <CountryFlag isoCode={courseInfo?.lang as string} size={45} style={styles.flag}/>
                
            </View>
            <CircularProgress
                            title="Corrected"
                            value={percentage}
                            titleStyle={{
                                fontFamily: Root.fontStyle.semibold,
                                fontSize: 20,
                                color: '#000',
                            }}
                            progressValueStyle={{
                                fontFamily: Root.fontStyle.semibold,
                                fontWeight: '100',
                            }}
                            valueSuffixStyle={{
                                padding: 0,
                            }}
                            radius={100}
                            maxValue={100}
                            activeStrokeColor={(percentage < 20) ? '#DFBF3C' : (percentage > 20 && percentage < 40) ? '#AEDF3C' : '#8EDF3C'}
                            activeStrokeWidth={20}
                            inActiveStrokeWidth={20}
                            inActiveStrokeColor={'#2ecc71'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#000'}
                            valueSuffix={'%'}
                        />
            <Text style={styles.description}>{courseInfo?.description}</Text>
            <View style={styles.infoHolder}>
                <Text style={styles.label}>Date Attended: <Text style={styles.text}>{dateJoined}</Text></Text>
                <Text style={styles.label}>Time Learned: <Text style={styles.text}>{times}</Text></Text>
                <Text style={styles.label}>Highest Corrected: <Text style={styles.text}>{highestCorrect}</Text></Text>
                <Text style={styles.label}>Total: <Text style={styles.text}>{total}</Text></Text>
            </View>
            <View style={styles.button}>
                <CustomBtn 
                    title="Start learning"
                    onPress={() => {
                        console.log('start learning logged');
                        router.push({
                            pathname: './(course)/learning',
                            params: {
                                courseId: courseId,
                                times: times,
                                highestCorrect: highestCorrect,
                            },
                        });
                    }}
                />
                {/* <CustomBtn 
                type="purple"
                    title="Rate this course"
                    onPress={() => {
                        console.log('rate logged');
                    }}
                /> */}
                <CustomBtn 
                    type="red"
                    title="Unattend this course"
                    onPress={() => {
                        updateCourse({
                            variables: {
                                username: userData?.username,
                                courseId: Number(courseId),
                                visible: false,
                            }
                        }).then(() => {
                            Alert.alert('Unattended', 'You have successfully unattended this course');
                        });
                    }}
                />
                
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
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
        lineHeight: 45,
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
        alignSelf: 'center',
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