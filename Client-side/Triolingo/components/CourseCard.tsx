import { StyleSheet, Text, View } from "react-native";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Root } from "@/constants/root.css";
export default function CourseCard(props: any) {
    return (
        <>
            <View style={styles.container} >
                <CircularProgressbar 
                value={(props.corrected/props.all)*100}
                text={`${props.corrected}/${props.all}`} 
                />
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        // Add your styles here
        width: 400,
        height: 80,
        backgroundColor: '#fff',
        shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',

    },
    text: {
        fontFamily: Root.fontStyle.medium,
        fontSize: Root.fontSize.large,

    },
    flagIcon: {
        // Add your styles here
    },
});