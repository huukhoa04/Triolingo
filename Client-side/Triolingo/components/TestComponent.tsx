import { StyleSheet, Text, View } from "react-native";
import { Root } from "@/constants/root.css";
export default function TestComponent(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test Component</Text>
            <Text style={styles.text}>{props.content}</Text>
            <Text style={styles.text}>{props.age}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Root.primaryTheme.bgColor,
        color: Root.primaryTheme.fontColorWhite,
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.medium,
        padding: 16,
    },
    text: {
        color: Root.primaryTheme.fontColorBlack,
        fontFamily: Root.fontStyle.bold,
        fontSize: Root.fontSize.large,
    },
    title: {
        color: Root.primaryTheme.fontColorWhite,
        fontFamily: Root.fontStyle.semibold,
        fontSize: Root.fontSize.huge,
    },
});