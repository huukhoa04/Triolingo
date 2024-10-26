import { Root } from "@/constants/root.css";
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function CardOption(props: any) {
    return (
        <>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
        fontFamily: Root.fontStyle.light,
        fontSize: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Root.primaryTheme.bgColor3,
        borderRadius: 10,
    },
    title: {
        fontFamily: Root.fontStyle.light,
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
        lineHeight: 20,
    }
});