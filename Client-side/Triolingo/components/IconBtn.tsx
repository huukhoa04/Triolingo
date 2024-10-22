import { Assets } from "@/constants/Assets";
import { ButtonStyle } from "@/constants/ButtonTheme";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

export default function IconBtn(props: any) {
    if (props.type === "audio")
    {
        const [toggle, setToggle] = useState(false);
        // const [sound, setSound] = useState<Audio.Sound | null>(null);

    // useEffect(() => {
    //     return sound
    //         ? () => {
    //               sound.unloadAsync(); // Unload sound when component unmounts
    //           }
    //         : undefined;
    // }, [sound]);


    //     const AudioHandle = async () => {
    //     setToggle(!toggle);
    //     if (!toggle) {
    //         const { sound } = await Audio.Sound.createAsync(
    //             Assets.testAudioPath // Replace with your audio file path
    //         );

    //         setSound(sound);
    //     } else {
    //         if (sound) {
    //             await sound.pauseAsync();
    //             setToggle(false);
    //         }
    //     }
    // };
        const handlePress = () => {
            setToggle(!toggle);
        }
        return (
            <TouchableOpacity style={{
                ...styles.container,
                padding: 10,
                backgroundColor: (!toggle ? Root.primaryTheme.bgColor : "#fff"),
                
            }} onPress={handlePress}>
                    <FontAwesome name={"volume-up"} size={20} color={toggle ? Root.primaryTheme.bgColor : "#fff"} style={{
                        alignSelf: "center",
                        lineHeight: 30,
                    }}/>
            </TouchableOpacity>
        )
    }
    else
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <View>
                <FontAwesome name={props.name} size={25} color="white" style={{
                    alignSelf: "center",
                    lineHeight: 30,
                }}/>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        // Add your styles here
        position: "static",
        backgroundColor: ButtonStyle.green.backgroundColor,
        padding: 16,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    text: {
        // Add your styles here
    },
    title: {
        // Add your styles here
    },
});