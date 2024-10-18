import CourseCard from "@/components/CourseCard";
import TestComponent from "@/components/TestComponent";
import { View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Test(){
    const percentage = 50;
    return(
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            rowGap: 10,
            }}
        >

            {/* Course */}
            <CircularProgress
                    
                            value={percentage}
                            radius={30}
                            progressValueStyle={{
                                userSelect: 'none',
                                color: '#000',
                            }}
                            maxValue={100}
                            activeStrokeColor={(percentage < 20) ? '#DFBF3C' : (percentage > 20 && percentage < 40) ? '#AEDF3C' : '#8EDF3C'}
                            inActiveStrokeColor={'#2ecc71'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#000'}
                            valueSuffix={'%'}
                        />
            
        </View>
    );
}