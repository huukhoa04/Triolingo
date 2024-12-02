import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Root } from '@/constants/root.css';
import { Assets } from '@/constants/Assets';
import { InputStyle } from '@/constants/Input';
import CustomBtn from '@/components/CustomBtn';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/utils/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@/utils/auth';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    
    const [login] = useMutation(LOGIN);

    const handleLogin = async () => {
        setIsLoading(true); // Set loading state to true
        setErrorMessage(''); // Reset error message before attempting login
        try {
            const { data } = await login({
                variables: { email, password }, // Use email and password state
            });
            await AsyncStorage.setItem('userToken', data.login.token); 
            
            auth.login(data.login.token); // Store the token in auth utility
            router.push('/(tabs)'); // Navigate to home page after successful login
        } catch (error) {
            const err = error as Error;
            console.error(error);
            setErrorMessage(
                err.message.includes('Incorrect credentials')
                    ? 'Incorrect credentials'
                    : 'Something went wrong'
            );
        } finally {
            setIsLoading(false); // Reset loading state
        }
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

