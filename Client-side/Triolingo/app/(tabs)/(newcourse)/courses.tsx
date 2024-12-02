
import CountryCard from "@/components/CountryCard";
import CourseInfo from "@/components/CourseInfo";
import { Root } from "@/constants/root.css";
import { Lesson } from "@/courseData/Lesson.json";
import auth from "@/utils/auth";
import { ADD_COURSE_TO_USER } from "@/utils/mutations";
import { useMutation } from "@apollo/client";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Courses() {
    const { isoCode } = useLocalSearchParams();
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae. Et quasi illum veniam repellat, temporibus ab. Odit, provident voluptates debitis eaque, voluptatibus eum repellendus ullam veritatis iure minima numquam!"
    const language = (
        (isoCode) === 'jp' ? 'Japanese' :
        (isoCode) === 'vn' ? 'Vietnamese' :
        (isoCode) === 'kp' ? 'Korean' :
        (isoCode) === 'cn' ? 'Chinese' : 'Language'
    );
    const lesson = Lesson;
    const navigation = useNavigation();
    const router = useRouter();
    const [joinCourse] = useMutation(ADD_COURSE_TO_USER);
    useEffect(() => {
        navigation.setOptions({

            title: `All ${language} Courses`,
             headerShown: true,
             headerTitleAlign: 'center',
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);
      //TODO: Handle Join Course
    const handleJoin = (index: number) => {
        return () => {Alert.alert('Join Course', `Are you sure you want to join this course? ${index}`, [{
            text: 'Yes',
            onPress: async () => {
                await joinCourse({
                    variables: { courseId: index, username: auth.getProfile().username },
                }).then((res) => {
                    if(res){
                        Alert.alert('Success', 'You have successfully joined the course');
                    }
                    else{
                        Alert.alert('Failed', 'Error joining the course');
                    }
                });

            }
        }, {
            text: 'No',
            onPress: () => {
                return;
            }
        }]);}
    }
    const handleRedirect = (index: number) => {
        return () => {router.push({
            pathname: './course',
            params: { id: index, },
        });}
    }
    return (
        <ScrollView contentContainerStyle={styles.container}
        >
            {
                lesson.filter((course: any) => course.lang === isoCode)
                .map((course: any, index: number) => 
                <CourseInfo 
                key={index}
                flag={isoCode}
                label={course.title}
                text={course.description}
                id={course.id}
                join={handleJoin(course.id)}
                info={handleRedirect(course.id)}
                />
            )
            }
            
        
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
            alignItems: 'center', 
            flexDirection: 'column',
            rowGap: 10,
            padding: 10,
    },
});