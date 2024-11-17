import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import IconBtn from "../IconBtn";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AnswerCheckAlert({ correct, onClose, explaination }: { correct: boolean, onClose: () => void, explaination: string }) {
    return (
        <>
            <View style={styles.bg}>
                <View style={{
                    ...styles.container,
                    borderColor: correct? '#66ff33' : '#ff0000',
                    // backgroundColor: correct? Root.primaryTheme.bgColor3 : '#990033',
                    }}>
                    <Text style={styles.title}>{correct? "Correct!" : "Incorrect"}</Text>
                    <Text style={styles.desc}>{explaination}</Text>
                    <TouchableOpacity style={styles.nextBtn} onPress={onClose}>
                        <Text style={styles.label}>Next question</Text>
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
        backgroundColor: Root.primaryTheme.bgColor3,
        color: '#fff',
        width: 300,
        minHeight: 'auto',
        rowGap: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#fff',
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        margin: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 100,
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        color: '#fff',
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
        color: '#fff',

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