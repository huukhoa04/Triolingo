import { ButtonStyle } from "@/constants/ButtonTheme";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ChoiceProps {
    label: string;
    onPress: () => void;
    styles?: object;
    type?: string;
    check?: boolean;
    noIcon?: boolean;
}

export default function Choice(props: ChoiceProps) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        console.log("choice effect");
        let timer: any;
        if (isPressed) {
            timer = setTimeout(() => {
                setIsPressed(false);
            }, 500); // Change the effect duration here (500ms = 0.5 seconds)
        }
        return () => clearTimeout(timer);
    }, [isPressed]);

    const handlePress = () => {
        console.log("pressed");
        setIsPressed(!isPressed);
        props.onPress();
        console.log("done pressed");
    };

    if (props.type === "sentence") {
        return (
            <TouchableOpacity
                style={[styles.container, props.styles]}
                onPress={handlePress}
            >
                <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    ...styles.container,
                    ...props.styles,
                    backgroundColor: isPressed
                        ? props.check
                            ? ButtonStyle.green.backgroundColor
                            : ButtonStyle.red.backgroundColor
                        : Root.primaryTheme.bgColor,
                }}
                onPress={handlePress}
            >
                {!props.noIcon && (
                    <FontAwesome name="circle-thin" size={30} color="#fff" />
                )}
                <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: 150,
        padding: 10,
        paddingLeft: 15,
        display: "flex",
        flexDirection: "row",
        columnGap: 10,
        textAlign: "center",
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 20,
    },
    label: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 20,
        lineHeight: 22,
        alignSelf: "center",
        color: "#fff",
    },
});