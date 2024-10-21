import { Assets } from "@/constants/Assets";
import { ButtonStyle } from "@/constants/ButtonTheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

export default function IconBtn(props: any) {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <View>
                <FontAwesome name={props.name} size={25} color="white" style={{
                    alignSelf: "center",
                }}/>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        // Add your styles here
        position: "static",
        backgroundColor: ButtonStyle.green.backgroundColor,
        padding: 16,
        borderRadius: 25,
        width: 50,
        height: 50,
        shadowColor: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    text: {
        // Add your styles here
    },
    title: {
        // Add your styles here
    },
});