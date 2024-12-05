import { Assets } from "@/constants/Assets";
import { ButtonStyle } from "@/constants/ButtonTheme";
import { Root } from "@/constants/root.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { Audio } from "expo-av";
import { Animated } from "react-native";
export default function IconBtn(props: any) {
    const [toggle, setToggle] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const getPath = () => {
        
    };
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); // Unload sound when component unmounts
            }
            : undefined;
    }, [sound]);

    //playback update
    const _onPlaybackStatusUpdate = (playbackStatus: any) => {
        if (!playbackStatus.isLoaded) {
            // Update your UI for the unloaded state
            if (playbackStatus.error) {
                console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
            }
        } else {
            // Update your UI for the loaded state
            if (playbackStatus.isPlaying) {
                // Update your UI for the playing state
            } else {
                // Update your UI for the paused state
            }

            if (playbackStatus.isBuffering) {
                // Update your UI for the buffering state
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                // The player has just finished playing and will stop. Maybe you want to play something else?
                setToggle(false);
            }
        }
    };

    //play audio
    const handlePress = async () => {
        setToggle(!toggle);

        if (!toggle) {
            const { sound } = await Audio.Sound.createAsync(
                (props.audio? props.audio : Assets.testAudioPath),
                {
                    shouldPlay: true,
                    isLooping: false,
                }
            );
            sound.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate);
            setSound(sound);
            await sound.playAsync();
        } else {
        if (sound) {
                await sound.pauseAsync();
                setToggle(false);
            }
        }
    }
    if (props.type === "audio")
    {
        return (
            <TouchableOpacity style={{
                ...styles.container,
                ...props.styles,
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
        <TouchableOpacity style={{
            ...props.style,
            }} onPress={props.onPress}>
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