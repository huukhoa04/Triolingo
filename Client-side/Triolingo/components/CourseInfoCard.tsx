import { Root } from "@/constants/root.css";
import { StyleSheet, Text, View } from "react-native";
import CardOption from "./CardOption";

export default function CourseInfoCard(props: any) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.lessonIndex}</Text>
                    <Text style={styles.label}>{props.title}</Text>
                    <Text style={styles.text}>{props.description}</Text>
                </View>
                {props.options.map((option: any, index: number) => {
                    return(
                        <CardOption 
                            key={index}
                            title={option.title}
                        />
                    )
                })}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 10,
        textAlign: 'left',
        color: '#fff',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5,
        paddingLeft: 10,
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 30,
        lineHeight: 25,
        color: '#fff',

    },
    text: {
        fontFamily: Root.fontStyle.light,
        fontSize: 16,
        color: '#fff',

    },
    flag: {
        width: 35,
        height: 35*11/16,
        borderRadius: 5,
    },

})