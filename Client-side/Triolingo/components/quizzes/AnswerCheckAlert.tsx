import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import IconBtn from "../IconBtn";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AnswerCheckAlert({ correct, onClose, explaination }: { correct: boolean, onClose: () => void, explaination: string }) {
    return (
        <>
            <View style={styles.bg}>
                <View style={styles.container}>
                    <Text style={styles.title}>{correct? "Correct!" : "Incorrect"}</Text>
                    <Text style={styles.desc}>{explaination}</Text>
                    <TouchableOpacity style={styles.nextBtn} onPress={onClose}>
                        <Text style={styles.label}>"Next question"</Text>
                        <FontAwesome name={"arrow-right"} size={20} color={"#fff"} style={{
                            alignSelf: "center",
                            lineHeight: 30,
                        }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Root.primaryTheme.bgColor,
        color: '#fff',
        width: 300,
        minHeight: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
    bg: {
        width: '100%',
        height: '100%',
        margin: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
    },
    label: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 20,
        lineHeight: 22,
        color: '#fff',
    },
    desc: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 16,
        color: '#000',

    },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        columnGap: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
});