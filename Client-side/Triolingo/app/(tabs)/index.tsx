import CourseCard from '@/components/CourseCard';
import IconBtn from '@/components/IconBtn';
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { Lesson, LessonHandler } from '@/courseData/Lesson.json';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Test from '../test';
import { TestData } from '@/constants/SampleData.json';
import { useQuery } from '@apollo/client';
import { QUERY_COURSES_BY_USER } from '@/utils/queries';

interface userCourses {
    username: string;
    courseId: number;
    dateJoined: string;
    highestCorrected: number;
    total: number;
    timeLearned: number;
    isCompleted: boolean;
    visible: boolean;
}

export default function Tab() {
  const router = useRouter();
  //test

  // data receiver
  const [userData, setUserData] = useState<userCourses[]>([]);
  //fetch userCourses
  const {loading, data} = useQuery<{userCourses: userCourses[]}>(QUERY_COURSES_BY_USER, {
    variables: {username: 'test'},
  });
  useEffect(() => {
    if (data) {
      setUserData(data.userCourses); //assign all data to userData
    }
  }, []);
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
          <ActivityIndicator size="large" color="#00ff00" style={{
            marginTop: 20,
          }} />
        ) : (
        <>
        <Text style={styles.label}>In progress</Text>
          {userData.filter((course) => course.isCompleted === false).map((course, index) => {
            <CourseCard 
              key={index}
              part={course.highestCorrected}
              all={course.total}
              title={LessonHandler.getLesson(course.courseId)?.title}
              flag={LessonHandler.getLesson(course.courseId)?.lang}
              onPress={() => {
                router.push({
                  pathname: './attendedcourse',
                  params: {
                    courseId: course.courseId,
                    dateJoined: course.dateJoined,
                    times: course.timeLearned,
                    highestCorrect: course.highestCorrected,
                    total: course.total,
                  },
                });
              }}
            />
          })}
        </>
      )}
      {/* <Text style={styles.label}>In progress</Text>
      {userData.UserCourses
      .filter((course) => course.isCompleted === false)
      .map((course, index) => {
          return (
            <CourseCard
              key={index}
              part={course.highestCorrect}
              all={course.total}
              title={LessonHandler.getLesson(course.courseId)?.title}
              flag={LessonHandler.getLesson(course.courseId)?.lang}
              onPress={() => {
                router.push({
                  pathname: './attendedcourse',
                  params: {
                    courseId: course.courseId,
                    dateJoined: course.dateJoined,
                    times: course.times,
                    highestCorrect: course.highestCorrect,
                    total: course.total,
                  },
                });
              }}
            />
          );
        })} */}
      {/* <CourseCard part={15} all={30} title={'simple card'} flag={'jp'}
                onPress={() => {
                    router.push({
                      pathname: './attendedcourse',
                      params: params1,
                    });
                }} 
      />
      
      <Text style={styles.label}>Done</Text>
      <CourseCard part={30} all={30} title={'simple card'} flag={'jp'}
                onPress={() => {

                }} 
      /> */}
      







      
    </ScrollView>
    <IconBtn name={'plus'} style={{
        position: "absolute",
        display: "flex",
        // alignItems: "center",
        backgroundColor: ButtonStyle.green.backgroundColor,
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        right: 10,
        bottom: 10,
        shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }} 
        onPress={() => {
          console.log('add button clicked');
          router.push({
            pathname: './(newcourse)/',
          });
        }}
      
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexBasis: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 10,
    rowGap: 10,
  },
  label: {
    fontSize: 30,
    fontFamily: Root.fontStyle.medium,
    marginBottom: 5,
    marginLeft: 15,
  }
});
