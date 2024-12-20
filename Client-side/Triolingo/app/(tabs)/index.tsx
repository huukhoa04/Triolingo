import CourseCard from '@/components/CourseCard';
import IconBtn from '@/components/IconBtn';
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { Lesson, LessonHandler } from '@/courseData/Lesson.json';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Test from '../test';
import { TestData } from '@/constants/SampleData.json';
import { useQuery } from '@apollo/client';
import { QUERY_COURSES_BY_USER } from '@/utils/queries';
import auth from '@/utils/auth';
import { userCourses } from '@/interface/UserCourse';
import { UserData } from '@/interface/UserData';


export default function Tab() {
  const router = useRouter();
  //test
  const [user, setUser] = useState<UserData | null>(null);
  const [userData, setUserData] = useState<any>();
  const { loading, data, refetch } = useQuery<any>(QUERY_COURSES_BY_USER, {
    variables: { username: user?.username },
    skip: !user, // Skip query until user is set
  });

  useFocusEffect(
    // console.log(LessonHandler.getLesson(1));
    React.useCallback(() => {
      auth.getProfile().then((profile) => {
        setUser(profile);
        if (profile) {
          refetch({ username: profile.username });
        }
      });
    }, [])  
  );

  useEffect(() => {
    if (data) {
      setUserData(data.userCoursesByUsername);
      // console.log(data.userCoursesByUsername);
    }
  }, [data]);
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
        {/*Todo: Solveed this (12/04/2024)*/}
          {
          userData && 
          userData.filter((course: any) => course.isCompleted === false && course.visible === true).length > 0?
          userData
          .filter((course: any) => course.isCompleted === false && course.visible === true)
          .map((course: any, index: number) => 
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
          )
          :
          <Text style={styles.subLabel}>No course available</Text>
          }
        <Text style={styles.label}>Completed</Text>
        {
          userData &&
          userData.filter((course: any) => course.isCompleted === true && course.visible === true).length > 0?
          userData
          .filter((course: any) => course.isCompleted === true && course.visible === true)
          .map((course: any, index: number) => 
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
          )
          :
          <Text style={styles.subLabel}>No course available</Text>
          }
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
  },
  subLabel: {
    fontSize: 20,
    fontFamily: Root.fontStyle.medium,
    marginBottom: 5,
    marginLeft: 15,
  }
});
