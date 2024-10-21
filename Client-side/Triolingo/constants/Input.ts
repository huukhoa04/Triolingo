import { StyleSheet } from "react-native";
import { Root } from "./root.css";

export const InputStyle = StyleSheet.create({
    textField: {
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.medium,
        height: 'auto',
        borderColor: '#fff',
        color: '#fff',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    label: {
        fontFamily: Root.fontStyle.semibold,
        color: '#fff',
        marginBottom: 4,
    },
    title: {
        fontFamily: Root.fontStyle.regular,
        color: '#fff',
        fontSize: 40,
        marginBottom: 16,
        textAlign: 'center',
    }
});