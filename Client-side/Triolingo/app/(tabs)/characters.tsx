import KanaGrid from "@/components/kana/KanaGrid";
import KanaPopUpCard from "@/components/kana/KanaPopUpCard";
import SectionOption from "@/components/kana/SectionOption";
import { KanaData } from "@/constants/Letter";
import { useState } from "react";
import { StyleSheet ,Text,View, ScrollView} from "react-native";

export default function Characters() {
    const [options, setOptions] = useState(0);
    const [mode, setMode] = useState(0);
    const [selectedCharacter, setSelectedCharacter] = useState<keyof typeof KanaData | null>(null);
    const [popUp, setPopUp] = useState(false);
    const handleCharacterPress = (character: keyof typeof KanaData) => {
        setSelectedCharacter(character);
        setPopUp(true);
    };
    return (
        <>
            <View style={styles.optionHolder}>
                <SectionOption title="Hiragana" onPress={() => setOptions(0)} selected={options === 0}/>
                <SectionOption title="Katakana" onPress={() => setOptions(1)} selected={options === 1}/>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <KanaGrid onCharacterPress={handleCharacterPress} type={options}/>
            </ScrollView>






            {popUp && selectedCharacter && (
                <KanaPopUpCard
                    character={selectedCharacter}
                    onClose={() => setPopUp(false)}
                />
            )}
        </>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingTop: 30,
        alignItems: 'center',
    },
    optionHolder: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});