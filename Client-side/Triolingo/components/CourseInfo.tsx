import { Root } from "@/constants/root.css";
import { StyleSheet, View, Text } from "react-native";
import CountryFlag from "react-native-country-flag";
import CustomBtn from "./CustomBtn";

export default function CourseInfo(props: any) {
    return (
            <View style={styles.container}>
                <View style={Root.flex.row}>
                    <CountryFlag
                        isoCode={props.flag}
                        size={35}
                        style={styles.flag}
                    />
                    <Text style={styles.label}>{props.label}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                <View style={Root.flex.row}>
                    <CustomBtn type={'green'} title={'Join this course'} 
                    onPress={() => {

                    }}/>
                    <CustomBtn type={'blue'} title={'Info'} 
                    onPress={() => {
                        
                    }}/>
                </View>
            </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 10,
        color: '#fff',
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 24,
        color: '#fff',

    },
    text: {
        fontFamily: Root.fontStyle.regular,
        fontSize: 14,
        color: '#fff',

    },
    flag: {
        width: 35,
        height: 35*11/16,
        borderRadius: 5,
    },

})