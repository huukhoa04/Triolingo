import { Root } from "@/constants/root.css";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CountryFlag from "react-native-country-flag";

export default function CountryCard(props: any) {
    return (

        <TouchableOpacity style={styles.container} onPress={props.onPress}>

            <CountryFlag style={{
                borderRadius: 5,
            }} 
            isoCode={props.flag} 
            size={30} />

            <Text style={styles.label}>{props.name}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        padding: 10,
        width: '100%',

        height: 90,
        color: '#fff',
        columnGap: 10,
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 15,
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 26,
        color: '#fff',
    }
});