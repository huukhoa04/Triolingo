import { Root } from "@/constants/root.css"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function WordCard(props: any){
    return (
        <TouchableOpacity style={styles.container}
        onPress={props.onPress}
        >
            {/* <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: Root.primaryTheme.bgColor,
                marginRight: 10,
            }}>
                <Text style={styles.index}>{props.index}</Text>
            </View> */}
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                height: '100%',
            }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: Root.primaryTheme.bgColor,
        borderWidth: 1,
    },
    index: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        lineHeight: 25,
        color: "#fff",
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        lineHeight: 25,
        color: Root.primaryTheme.bgColor,
    },
    desc: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 16,
        color: Root.primaryTheme.bgColor,
    }
}
)