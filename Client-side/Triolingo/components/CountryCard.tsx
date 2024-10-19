import { Root } from "@/constants/root.css";
import { StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function CountryCard(props: any) {
    return (
        <View style={styles.container}>
            <CountryFlag style={{
                borderRadius: 5,
            }} 
            isoCode={props.flag} 
            size={30} />
            <Text>{props.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        padding: 10,
        width: '100%',
        height: 80,
        color: '#fff',
    },
    label: {
        fontFamily: Root.fontStyle.medium,
        fontSize: 16,
        color: '#000',
    }

});