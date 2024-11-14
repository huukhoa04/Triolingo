import { useRouter } from "expo-router"
import { useEffect } from "react";
import { Text } from "react-native";

export default function Redirect(){
    const router = useRouter();
    useEffect(() => {
        router.push({
            pathname: '/'
        })
    })
    
    return(
     <>
        <Text>Redirecting</Text>
     </>   
    )
}