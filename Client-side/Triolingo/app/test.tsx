import CourseCard from "@/components/CourseCard";
import TestComponent from "@/components/TestComponent";
import { View } from "react-native";

export default function Test(){
    return(
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            rowGap: 10,
            }}
        >

            {/* Course */}
            <CourseCard part={1} all={30} title={'simple card'} flag={'JP'}
                onPress={() => {

                }} 
            />
            
        </View>
    );
}