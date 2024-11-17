import { KanaData } from "@/constants/Letter";
import { Root } from "@/constants/root.css";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import KanaPopUpCard from "./KanaPopUpCard";
import { Audio } from "expo-av";
interface KanaCardProps {
    letter: keyof typeof KanaData;
    status: string;
    styles?: object;
    onCharacterPress?: (character: keyof typeof KanaData) => void;
}
export default function KanaCard(props: KanaCardProps) {

        //play audio
        const handlePress = async () => {
            props.onCharacterPress?.(props.letter);
        }
    if(props.status === 'empty'){
        return (
            <View style={{
                ...styles.container,
                backgroundColor: 'transparent',
            }}>
            </View>
        );
    }
    else
    return (
        <>
            <TouchableOpacity style={{
                ...styles.container,
                ...props.styles,
            }}
            onPress={handlePress}
            >
                <Text style={{
                    ...styles.character,
                    }}>{props.letter}</Text>
            </TouchableOpacity>
            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Root.primaryTheme.bgColor,
        color: '#fff',
        padding: 5,
        minWidth: 60,
        minHeight: 60,
        borderRadius: 10,
    },
    character: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 30,
        lineHeight: 35,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});