import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function PageIndicator(props: any) {
    return (
        <>
            {/* PageIndicator */}
            <View style={styles.container}>
                {/* <FontAwesome name="arrow-left" size={30} color="#fff" onPress={props.left}/> */}
                <Text style={styles.label}>Quiz {props.current}/{props.total}</Text>
                {/* <FontAwesome name="arrow-right" size={30} color="#fff" onPress={props.right}/> */}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: Root.primaryTheme.bgColor,
        paddingHorizontal: 20,
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 25,
        color: '#fff',
    }
});