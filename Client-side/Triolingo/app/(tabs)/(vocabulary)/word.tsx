import { StyleSheet, Text, View } from "react-native"

export default function Word(){
    return(
        <>
            <View style={styles.container}>
                <Text>Vocabulary</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})