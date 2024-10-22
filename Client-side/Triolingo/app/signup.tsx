import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native'; 
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { Assets } from '@/constants/Assets';
import CustomBtn from '@/components/CustomBtn';
import { InputStyle } from '@/constants/Input';

import { useMutation } from '@apollo/client'; 
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const [addUser] = useMutation(ADD_USER);

    const handleSignup = async () => {
      console.log("Signup button pressed");
        try {
            const { data } = await addUser({
                variables: { username, email, password, confirmPassword },
            });

            // Gọi Auth.login
            Auth.login(data.addUser.token);

            // Hiển thị thông báo thành công
            Alert.alert("Success", "Registration successful!", [
                { text: "OK" } // Chỉ hiển thị nút OK
            ]);

            // Chuyển hướng sau 1 giây
            setTimeout(() => {
                router.push('/(tabs)'); // Chuyển hướng đến tabs
            }, 1000); // 1000ms = 1 giây
        } catch (error) {
            const err = error as Error;
            console.error(error);

            // Xử lý thông báo lỗi
            switch (true) {
                case err.message.includes('username_1 dup key'):
                    setErrorMessage('Username already exists');
                    break;
                case err.message.includes('email_1 dup key'):
                    setErrorMessage('Email already exists');
                    break;
                case err.message.includes('Must match an email address'):
                    setErrorMessage('Email must be a valid address');
                    break;
                case err.message.includes('shorter than the minimum allowed length'):
                    setErrorMessage('Password must be at least 5 characters');
                    break;
                default:
                    setErrorMessage('Something went wrong');
                    break;
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image style={Assets.logocss.align} source={Assets.logo} />
            <Text style={InputStyle.title}>Sign Up</Text>
            <TextInput
                style={InputStyle.textField}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                placeholderTextColor={Root.placeholderColor}
            />
            <TextInput
                style={InputStyle.textField}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor={Root.placeholderColor}
            />
            <TextInput
                style={InputStyle.textField}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor={Root.placeholderColor}
            />
            <TextInput
                style={InputStyle.textField}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                secureTextEntry
                placeholderTextColor={Root.placeholderColor}
            />
            <CustomBtn type='purple' title='Sign Up' onPress={handleSignup} />

            <CustomBtn type='linktype' title="Already have an account? Login" onPress={() => {
                router.push({ pathname: './login' });
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Root.primaryTheme.bgColor,
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
    label: {
        fontFamily: Root.fontStyle.semibold,
        color: '#fff',
        marginBottom: 4,
    },
});
