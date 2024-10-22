import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuOption(props: any) {
    return (
        <>
            {/* MenuOption */}
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <View style={styles.icon} >
                    <FontAwesome size={30} name={props.name} color={'#fff'} />
                </View>
                <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        fontFamily: Root.fontStyle.regular,
        color: '#fff',
    },
    icon: {
        color: '#fff',
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 24,
        lineHeight: 26,
        color: '#fff',
    }
})