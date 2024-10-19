import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
    const quizzes = [
        { type: 1, question: 'What is the pronouciation of this letter?' , query: 'letter:き;ki,sa,chi,su;0', audio: 'path/to/audio.mp3' },
        { type: 2, question: 'Complete this sentence', query: 'sentence:私は__です;学生,先生,医者,会社員;' },
        { type: 3, question: 'Match the correct tuples', query: '' },
    ];
    return (
        <>
            {/* LearningScreen */}
            <View style={styles.container}>
                <Text>LearningScreen</Text>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});