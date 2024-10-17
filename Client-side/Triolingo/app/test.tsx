import TestComponent from "@/components/TestComponent";
import { View } from "react-native";

export default function Test(){
    return(
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center' 
            }}
        >
            <TestComponent content="hello" age={50} />
        </View>
    );
}