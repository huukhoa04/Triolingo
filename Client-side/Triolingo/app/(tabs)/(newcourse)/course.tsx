import { StyleSheet, Text, View } from "react-native";

export default function CourseIndex() {
    return (
        <View style={styles.container} >
            <Text>Course Index</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});