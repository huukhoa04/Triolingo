import { Root } from "@/constants/root.css";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function VocabCard(props: any){
    return (
        <>
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 75,
                height: 75,
                borderRadius: 50,
                backgroundColor: Root.primaryTheme.bgColor,
                marginLeft: 5,
            }}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                height: '100%',
                // borderWidth: 1,
            }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({ 
    container: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 10,
        borderWidth: 1,
        borderColor: Root.primaryTheme.bgColor,
        borderRadius: 20,
        borderTopLeftRadius: 0,

    },
    index: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 40,
        color: "#fff",
        lineHeight: 40,
        
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 50,
    },
    title: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 25,
        color: Root.primaryTheme.bgColor,
        lineHeight: 25,
    },
    desc: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 15,
        color: Root.primaryTheme.bgColor,
    }
}
)