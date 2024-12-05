import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function VocabIndex(){
    
    return (
    <>
    
            <ScrollView style={styles.container}>
                <Text>Index</Text>
            </ScrollView>
    </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
})