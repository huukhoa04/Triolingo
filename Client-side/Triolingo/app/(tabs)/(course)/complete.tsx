import CustomBtn from "@/components/CustomBtn";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Complete() {
    const router = useRouter();
    return(
        <>
            <View style={styles.container}>
                <Text>Completed</Text>
                <CustomBtn title="Back to Course" onPress={() => {
                    router.push({
                        pathname: './../redirect',
                    });
                }}/>
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
});