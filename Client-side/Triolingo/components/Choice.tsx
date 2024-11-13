import { ButtonStyle } from "@/constants/ButtonTheme";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Choice(props:any) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        let timer: any;
        if (isPressed) {
            timer = setTimeout(() => {
                setIsPressed(false);
            }, 500); // Change the effect duration here (2000ms = 2 seconds)
        }
        return () => clearTimeout(timer);
    }, [isPressed]);

    const handlePress = () => {
        setIsPressed(!isPressed);
        props.onPress();
    };
    if(props.type === "sentence"){
        return (
            <>
                <TouchableOpacity style={{
                ...styles.container,
                ...props.styles,
            }} onPress={handlePress}>
                <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
            </>
        )
    }
    else
    {

        return (
            <>
                {/* Choice */}
                <TouchableOpacity style={{
                    ...styles.container,
                    ...props.styles,
                    backgroundColor: isPressed ? props.check ? ButtonStyle.green.backgroundColor : ButtonStyle.red.backgroundColor : Root.primaryTheme.bgColor,
                }} onPress={handlePress}>
                    {props.noIcon? <></> :<FontAwesome name="circle-thin" size={30} color="#fff"/>}
                    <Text style={styles.label}>{props.label}</Text>
                </TouchableOpacity>
            </>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
        minWidth: 150,
        padding: 10,
        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        textAlign: 'center',
        backgroundColor: Root.primaryTheme.bgColor,
        borderRadius: 20,
    },
    label: {
        fontFamily: Root.fontStyle.semibold,
        fontSize: 20,
        lineHeight: 22,
        alignSelf: 'center',
        color: '#fff',
    }

});