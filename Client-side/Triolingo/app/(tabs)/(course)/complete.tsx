import CustomBtn from "@/components/CustomBtn";
import { Assets } from "@/constants/Assets";
import { Root } from "@/constants/root.css";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Complete() {
    const router = useRouter();
    const {courseId, corrected, total, isCompleted} = useLocalSearchParams();
    const percentage = Math.round((Number(corrected) / Number(total)) * 100);
    return(
        <>
        <ImageBackground source={Assets.completeBg} style={styles.wrapper}>
            <View style={styles.container}>
                {isCompleted === 'true' ?
                
                <>
                    <Text style={styles.title}>Completed</Text>
                    <Text style={styles.sub}>You have completed the test</Text>
                </>
                :
                <>
                    <Text style={styles.title}>Incompleted</Text>
                    <Text style={styles.sub}>You have quitted completing the test</Text>
                </>    
                }
                
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
                <Text style={styles.sub}>{corrected}/{total} quizzes corrected</Text>
                    <CustomBtn title="Back to Course" onPress={() => {
                        router.push({
                            pathname: './../redirect',
                        });
                    }}
                    
                    />
            </View>
            </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
   },
   title: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 40,
   },
   sub: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 20,
   },
   wrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'transparent',
   }
});