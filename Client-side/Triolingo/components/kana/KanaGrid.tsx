import { KanaData, KanaGridData } from "@/constants/Letter";
import { StyleSheet, Text, View } from "react-native";
import KanaRow from "./KanaRow";
import { Children } from "react";
import KanaPopUpCard from "./KanaPopUpCard";
import { Root } from "@/constants/root.css";

export default function KanaGrid({ onCharacterPress, type }: { onCharacterPress: (character: keyof typeof KanaData) => void , type: any}) {
    const data = {
        hiraganaLayout: KanaGridData.Hiragana.layout,
        katakanaLayout: KanaGridData.Katakana.layout,
    };
    const typeCheck = type === 0 ? data.hiraganaLayout : data.katakanaLayout;
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Monographs</Text>
                {typeCheck
                .slice(0, 11)
                .map((_row: any, index: number) => (
                    <KanaRow row={_row} key={index} onCharacterPress={onCharacterPress}/>
                ))}
                <Text style={styles.title}>Dakuten</Text>
                {typeCheck
                .slice(12, 16)
                .map((_row: any, index: number) => (
                    <KanaRow row={_row} key={index} onCharacterPress={onCharacterPress}/>
                ))}
                <Text style={styles.title}>Digraph</Text>
                {typeCheck
                .slice(17)
                .map((_row: any, index: number) => (
                    <KanaRow row={_row} key={index} onCharacterPress={onCharacterPress}/>
                ))}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 10,
    },
    title: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'flex-start',
    },
});