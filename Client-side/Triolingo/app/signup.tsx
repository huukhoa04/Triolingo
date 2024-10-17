import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ButtonStyle } from '@/constants/ButtonTheme';
import { Root } from '@/constants/root.css';
import { Assets } from '@/constants/Assets';
import CustomBtn from '@/components/CustomBtn';
import { InputStyle } from '@/constants/Input';
export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();
    const handleSignup = () => {
        // Handle signup logic here
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <View style={styles.container}>
            <Image style={Assets.logocss.align} source={Assets.logo}/>
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
            
            <CustomBtn type='purple' title='Sign Up' onPress={handleSignup}/>


            <CustomBtn type='linktype' title="Already have an account? Login" onPress={() => {
                // Navigate to the Login page
                router.push({
                    pathname: './login',
                });
            }}/>
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