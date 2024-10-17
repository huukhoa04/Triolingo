import { StyleSheet } from "react-native"
import { Root } from "./root.css"


const ButtonTheme = {
    color: {
        blue: '#105CC0',
        bluePressed: '#108BC0',

        green: '#47BE0F',
        greenPressed: '#338B0A',

        red: '#FF0D11',
        redPressed: '#810D0F',

        purple: '#C0109A',
        purplePressed: '#860B6B',
    }
}

export const ButtonStyle = StyleSheet.create({
    font: {
        fontFamily: Root.fontStyle.medium,
        fontSize: Root.fontSize.large,
        textAlign: 'center',
        color: '#fff',
    },
    linkTypeFont: {
        fontFamily: Root.fontStyle.regular,
        fontSize: Root.fontSize.large,
        textAlign: 'center',
        color: '#fff',
        textDecorationLine: 'underline',
    },
    blue: {
        minWidth: 185,
        alignSelf: 'center',
        backgroundColor: ButtonTheme.color.blue,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
    },
    red: {
        minWidth: 185,
        alignSelf: 'center',
        backgroundColor: ButtonTheme.color.red,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
        

    },
    green: {
        minWidth: 185,
        alignSelf: 'center',
        backgroundColor: ButtonTheme.color.green,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
        

    },
    purple: {
        minWidth: 185,
        alignSelf: 'center',
        backgroundColor: ButtonTheme.color.purple,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
    }
});