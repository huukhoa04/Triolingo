import { ButtonStyle } from "@/constants/ButtonTheme";
import { Pressable, Text } from "react-native";

export default function CustomBtn(props: any) {

    
    if(props.type === 'linktype'){
        return(
            <Pressable onPress={() => {
                props.onPress();
            }}>
                <Text style={ButtonStyle.linkTypeFont}>{props.title}</Text>
            </Pressable>
        );
    }

    if (props.type === 'purple') 
    {
        return (
            <Pressable style={ButtonStyle.purple} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
            </Pressable>
        );
    } 
    else if (props.type === 'green') 
    {
    return (
        <Pressable style={ButtonStyle.green} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </Pressable>
    );
    }
    else if (props.type === 'red') 
    {
       return (
        <Pressable style={ButtonStyle.red} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </Pressable>
        );
    }
    else 
    return(
        <Pressable style={ButtonStyle.blue} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </Pressable>
    )
}