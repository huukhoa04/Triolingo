import CustomBtn from "@/components/CustomBtn";
import { Root } from "@/constants/root.css";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import CountryFlag from "react-native-country-flag";

export default function AttendedCourseIndex() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({
             headerShown: true,
             headerStyle: {
                    backgroundColor: Root.primaryTheme.bgColor,
                },

            });
      }, [navigation]);



    const { title, flag, description, dateAttended, timeLearned, corrected, total } = useLocalSearchParams();
    const percentage = Math.round((Number(corrected) / Number(total)) * 100);
    console.log(title, flag, description, dateAttended, timeLearned, corrected, total);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={Root.flex.row}>
                <Text style={styles.title}>{title}</Text>
                <CountryFlag isoCode={flag as string} size={45} style={styles.flag}/>
                
            </View>
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
            <Text style={styles.description}>{description}</Text>
            <View style={styles.infoHolder}>
                <Text style={styles.label}>Date Attended: <Text style={styles.text}>{dateAttended}</Text></Text>
                <Text style={styles.label}>Time Learned: <Text style={styles.text}>{timeLearned}</Text></Text>
                <Text style={styles.label}>Corrected: <Text style={styles.text}>{corrected}</Text></Text>
                <Text style={styles.label}>Total: <Text style={styles.text}>{total}</Text></Text>
            </View>
            <View style={styles.button}>
                <CustomBtn 
                    title="Start learning"
                    onPress={() => {
                        console.log('start learning logged');
                        router.push({
                            pathname: './(course)/',
                            params: { title, flag, description, dateAttended, timeLearned, corrected, total },
                        });
                    }}
                />
                <CustomBtn 
                type="purple"
                    title="Rate this course"
                    onPress={() => {
                        console.log('rate logged');
                
                    }}
                />
                <CustomBtn 
                    type="red"
                    title="Unattend this course"
                    onPress={() => {
                        console.log('unattend logged');
                    }}
                />
                
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 40,
        lineHeight: 45,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        color: '#000',
        alignSelf: 'center',
    },
    flag: {
        borderRadius: 5,
    },
    description: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 20,
        color: '#000',
        alignSelf: 'center',
    },
    infoHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center',
        // rowGap: 20,
        width: '100%',
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 18,
        fontFamily: Root.fontStyle.bold,
    },
    text: {
        fontSize: 18,
        fontFamily: Root.fontStyle.regular,
    },
    button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,

    },
});