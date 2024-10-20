import Choice from "@/components/Choice";
import CountryCard from "@/components/CountryCard";
import CourseCard from "@/components/CourseCard";
import CourseInfo from "@/components/CourseInfo";
import IconBtn from "@/components/IconBtn";
import PageIndicator from "@/components/PageIndicator";
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
            <CountryCard flag={'jp'} name={'Japanese'} />
            <PageIndicator current={1} total={30}
                left={() => {console.log('left')}}
                right={() => {console.log('right')}}
            />
            <Choice label={'Choice 1'} check={true} onPress= {() => {
                console.log('Choice 1 pressed');
            }} />
            <Choice label={'Choice 2'} check={false} onPress= {() => {
                console.log('Choice 2 pressed');
            }} />
            <IconBtn type={'audio'} />
        </ScrollView>
    );
}