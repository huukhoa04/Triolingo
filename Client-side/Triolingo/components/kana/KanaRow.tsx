import { StyleSheet, View } from "react-native";
import KanaCard from "./KanaCard";
import { KanaData } from "@/constants/Letter";

export default function KanaRow({ row, onCharacterPress }: { row: string[], onCharacterPress: (character: keyof typeof KanaData) => void }) {
    return (
        
        <View style={styles.container}>
                {row.map((child: any, index: number) => (
                    <KanaCard status={child === ''? "empty" : ""} letter={child} key={index} onCharacterPress={onCharacterPress}/>
                ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 20,
    }
})