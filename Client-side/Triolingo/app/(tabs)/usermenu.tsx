import MenuOption from "@/components/MenuOption";
import { Assets } from "@/constants/Assets";
import { Root } from "@/constants/root.css";
import { UserData } from "@/interface/UserData";
import auth from "@/utils/auth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function UserMenu() {
    const router = useRouter();
    const [user, setUser] = useState<UserData>();
    useEffect(() => {
        auth.getProfile().then((profile) => {
            setUser(profile);
        });
    }, []);
    return (
        <View style={styles.container}>
            <Image style={Assets.logocss.align} source={Assets.logo}/>
            <Image style={Assets.avatarcss.align} source={Assets.sampleAvatar}/>
            <Text style={styles.username}>{user?.username}</Text>
            <View style={Root.flex.column}>
                <MenuOption 
                    label='Settings' 
                    name='cog'
                    onPress={() => {
                        // Navigate to the Profile page
                        router.push({
                            pathname: './settings',
                        });
                    }}
                />
                <MenuOption 
                    label='About Us' 
                    name='question'
                    onPress={() => {
                        // Navigate to the Profile page
                        router.push({
                            pathname: '/',
                        });
                    }}
                />
                <MenuOption 
                    label='My Bookmark'
                    name='bookmark'
                    onPress={() => {
                        // Navigate to the Profile page
                        router.push({
                            pathname: './bookmark',
                        });
                    }}
                />
                <MenuOption 
                    label='Report issues' 
                    name='exclamation'
                    onPress={() => {
                        // Navigate to the Profile page
                        router.push({
                            pathname: '/',
                        });
                    }}
                />
                <MenuOption 
                    label='Log Out' 
                    name='arrow-circle-o-left'
                    onPress={() => {
                        // Navigate to the Profile page
                        auth.logout();
                        router.replace('/login');
                    }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: Root.primaryTheme.bgColor,
      paddingVertical: 20,
    //   fontFamily: Root.fontStyle.regular,
      color: '#fff',
      paddingTop: 50,
    },
    username: {
        fontFamily: Root.fontStyle.bold,
        fontSize: 30,
        color: '#fff',
        alignSelf: 'center',
        marginBottom: 20,
    }
  });