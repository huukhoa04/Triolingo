import { StyleSheet, View, Text } from "react-native";
import IconBtn from "../IconBtn";
import { Root } from "@/constants/root.css";
import { KanaData } from "@/constants/Letter";
interface KanaPopUpCardProps {
    character: keyof typeof KanaData;
    onClose: () => void;
}
export default function KanaPopUpCard(props: KanaPopUpCardProps) {
    const characterData = KanaData[props.character];
    return (
        <>
        <View style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.btnHolder}>
                    <IconBtn type="audio" audio={characterData.audio} style={{
                        borderRadius: 5,
                    }}/>
                    <IconBtn style={{
                        padding: 10,
                        minWidth: 50,
                    }}name="close" onPress={props.onClose}/>
                </View>
                <Text style={styles.character}>{characterData.kana}</Text>
                <Text style={styles.sub}>{characterData.eng}</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Root.primaryTheme.bgColor,
        color: '#fff',
        width: 200,
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
    btnHolder: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    character: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 75,
        lineHeight: 100,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    sub: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
});