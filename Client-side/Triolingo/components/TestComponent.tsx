import { Text, View } from "react-native";

export default function TestComponent(props: any) {
    return (
        <View>
            <Text>Test Component</Text>
            <Text>{props.content}</Text>
            <Text>{props.age}</Text>
        </View>
    );
}