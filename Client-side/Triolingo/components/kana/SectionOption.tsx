import { Root } from "@/constants/root.css";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SectionOption({ title, onPress, selected }: { title: string, onPress: () => void, selected: boolean }) {
    return (
        <TouchableOpacity style={{
            ...styles.container,
            borderBottomWidth: selected? 3 : 0,
            borderBottomColor: Root.primaryTheme.bgColor3,
            }} onPress={onPress}>
            <Text style={{
                ...styles.title,
                color: selected? Root.primaryTheme.bgColor3 : '#000',
            }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        color: '#fff',
        width: 'auto',
        paddingHorizontal: 5,
        paddingBottom: 5,
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        // lineHeight: 35,
        color: '#000',
        textAlign: 'center',
    },
});