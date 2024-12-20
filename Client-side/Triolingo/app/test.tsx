import CardOption from "@/components/CardOption";
import Choice from "@/components/Choice";
import CountryCard from "@/components/CountryCard";
import CourseCard from "@/components/CourseCard";
import CourseInfo from "@/components/CourseInfo";
import CourseInfoCard from "@/components/CourseInfoCard";
import IconBtn from "@/components/IconBtn";
import KanaCard from "@/components/kana/KanaCard";
import KanaPopUpCard from "@/components/kana/KanaPopUpCard";
import SectionOption from "@/components/kana/SectionOption";
import PageIndicator from "@/components/PageIndicator";
import TestComponent from "@/components/TestComponent";
import VocabCard from "@/components/vocabulary/VocabCard";
import WordCard from "@/components/vocabulary/WordCard";
import { Assets } from "@/constants/Assets";
import auth from "@/utils/auth";
import { QUERY_BOOKMARKS_BY_USERNAME } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Test(){
    const percentage = 50;
    const options = [
        {title: 'Option 1'},
        {title: 'Option 2'},
        {title: 'Option 3'},
        {title: 'Option 4'},
    ]
    const [user, setUser] = useState<any>();
    const [userData, setUserData] = useState<any>();
    const {loading, data, refetch} = useQuery<any>(QUERY_BOOKMARKS_BY_USERNAME, {
        variables: {username: userData?.username},
        skip: !userData,
    });
    useEffect(() => {
        auth.getProfile().then((profile) => {
            setUser(profile);
            refetch({username: profile.username});
            console.log(profile);
        });
    }, []);
    useEffect(() => {
        if(data){
            console.log(data);
            setUserData(data.getBookmarksByUsername);
        }
        return () => {
            setUserData([]);
        }
    }, [data]);

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae. Et quasi illum veniam repellat, temporibus ab. Odit, provident voluptates debitis eaque, voluptatibus eum repellendus ullam veritatis iure minima numquam!"
    return(
        <>
            <ScrollView contentContainerStyle={{ 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                flexDirection: 'column',
                rowGap: 10,
                padding: 10,
                }}
            >
                <VocabCard index={1} title={'Vocab 1'} desc={'Description 1'} onPress={() => {}}/>
                <VocabCard index={2} title={'Vocab 2'} desc={'Description 2'} onPress={() => {}}/>
                <VocabCard index={3} title={'Vocab 3'} desc={'Description 3'} onPress={() => {}}/>
                <WordCard index={1} title={'Word 1'} desc={'Description 1'} onPress={() => {}}/>
            </ScrollView>
        </>
        // <ScrollView contentContainerStyle={{ 
        //     justifyContent: 'flex-start', 
        //     alignItems: 'center', 
        //     flexDirection: 'column',
        //     rowGap: 10,
        //     padding: 10,
        //     }}
        // >
        //     <PageIndicator current={1} total={30}/>
        //     <Choice label={'Choice 1'} check={true} onPress= {() => {
        //         console.log('Choice 1 pressed');
        //     }} />
        //     <Choice label={'Choice 2'} check={false} onPress= {() => {
        //         console.log('Choice 2 pressed');
        //     }} />
        //     <IconBtn type={'audio'} audio={Assets.testAudioPath}/>
        //     <CardOption title={'Option 1'} />
        //     <CourseInfoCard 
        //         lessonIndex={"LESSON 1"}
        //         title={'Greeting and Numbers'}
        //         description={lorem}
        //         options={options}
        //     />
        //     <KanaCard letter={'あ'} status={""}/>
        // </ScrollView>
    );
}