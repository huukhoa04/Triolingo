import { Root } from "@/constants/root.css";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function AttendedCourse() {
    const { title, flag, description, dateAttended, timeLearned, corrected, total } = useLocalSearchParams();
    console.log(title, flag, description, dateAttended, timeLearned, corrected, total);
    return (
        <ScrollView contentContainerStyle={{}}>
            <View style={styles.title}>
                <Text style={{}}>{title}</Text>
                <CountryFlag isoCode={flag as string} size={35} style={{}}/>
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
        rowGap: 10,
    },
    title: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 24,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        color: '#000',
        alignSelf: 'center',
    },
    description: {

    },
    button: {

    },
});