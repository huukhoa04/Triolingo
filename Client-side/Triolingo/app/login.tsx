import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Root } from '@/constants/root.css';
import { Assets } from '@/constants/Assets';
import { InputStyle } from '@/constants/Input';
import CustomBtn from '@/components/CustomBtn';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <View style={styles.container}>
            <Image style={Assets.logocss.align} source={Assets.logo}/>
            <Text style={InputStyle.title}>Login</Text>
            <TextInput
                style={InputStyle.textField}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                placeholderTextColor={Root.placeholderColor}
            />
            <TextInput
                style={InputStyle.textField}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={Root.placeholderColor}
                secureTextEntry
            />
            <CustomBtn type='purple' title='Login' onPress={handleLogin}/>
            <CustomBtn type='linktype' title="Don't own an account? Sign up" onPress={() => {
                // Navigate to the Login page
                router.push({
                    pathname: './signup',
                });
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F3F46',
        flex: 1,
        justifyContent: 'center',
        rowGap: 10,
        padding: 16,
    },
    title: {
        fontFamily: Root.fontStyle.semibold,
        color: '#fff',
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        fontFamily: Root.fontStyle.regular,
        height: 40,
        borderColor: '#fff',
        color: '#fff',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
});

