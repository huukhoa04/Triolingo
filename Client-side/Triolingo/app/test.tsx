import CourseCard from "@/components/CourseCard";
import CourseInfo from "@/components/CourseInfo";
import TestComponent from "@/components/TestComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Test(){
    const percentage = 50;
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae. Et quasi illum veniam repellat, temporibus ab. Odit, provident voluptates debitis eaque, voluptatibus eum repellendus ullam veritatis iure minima numquam!"
    return(
        <ScrollView contentContainerStyle={{ 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            flexDirection: 'column',
            rowGap: 10,
            padding: 10,
            }}
        >
            <CourseInfo 
                flag={'jp'}
                label={'Japanese'}
                text={lorem}
            />
            <CourseInfo 
                flag={'jp'}
                label={'Japanese'}
                text={lorem}
            />
            <CourseInfo 
                flag={'jp'}
                label={'Japanese'}
                text={lorem}
            />
            <CourseInfo 
                flag={'jp'}
                label={'Japanese'}
                text={lorem}
            />
            <CourseInfo 
                flag={'jp'}
                label={'Japanese'}
                text={lorem}
            />
            
        </ScrollView>
    );
}