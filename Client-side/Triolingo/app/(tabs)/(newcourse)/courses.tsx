
import CountryCard from "@/components/CountryCard";
import CourseInfo from "@/components/CourseInfo";
import { Root } from "@/constants/root.css";
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

    const navigation = useNavigation();
    const router = useRouter();
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
    const handleJoin = (index: number) => {
        return () => {Alert.alert('Join Course', `Are you sure you want to join this course? ${index}`, [{
            text: 'Yes',
            onPress: () => {
                Alert.alert('Success', 'You have successfully joined the course');

            }
        }, {
            text: 'No',
            onPress: () => {
                Alert.alert('Cancelled', 'You have cancelled the course');
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
            <CourseInfo 
                flag={isoCode}
                label={'SampleLabel'}
                text={lorem}
                id={1}
                join={handleJoin(1)}
                info={handleRedirect(1)}
            />
            <CourseInfo
                flag={isoCode}
                label={'SampleLabel'}
                text={lorem}
                id={2}
                join={handleJoin(2)}
                info={handleRedirect(2)}
            />
            <CourseInfo 
                flag={isoCode}
                label={'SampleLabel'}
                text={lorem}
                id={3}
                join={handleJoin(3)}
                info={handleRedirect(3)}
            />
            <CourseInfo 
                flag={isoCode}
                label={'SampleLabel'}
                text={lorem}
                id={4}
                join={handleJoin(4)}
                info={handleRedirect(4)}
            />
            
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