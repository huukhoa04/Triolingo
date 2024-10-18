import { ButtonStyle } from "@/constants/ButtonTheme";
import { Text, TouchableOpacity } from "react-native";

export default function CustomBtn(props: any) {

    
    if(props.type === 'linktype'){
        return(
            <TouchableOpacity onPress={() => {
                props.onPress();
            }}>
                <Text style={ButtonStyle.linkTypeFont}>{props.title}</Text>
            </TouchableOpacity>
        );
    }

    if (props.type === 'purple') 
    {
        return (
            <TouchableOpacity style={ButtonStyle.purple} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
            </TouchableOpacity>
        );
    } 
    else if (props.type === 'green') 
    {
    return (
        <TouchableOpacity style={ButtonStyle.green} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </TouchableOpacity>
    );
    }
    else if (props.type === 'red') 
    {
       return (
        <TouchableOpacity style={ButtonStyle.red} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </TouchableOpacity>
        );
    }
    else 
    return(
        <TouchableOpacity style={ButtonStyle.blue} onPress={props.onPress}>
                <Text style={ButtonStyle.font}>{props.title}</Text>
        </TouchableOpacity>
    )
}