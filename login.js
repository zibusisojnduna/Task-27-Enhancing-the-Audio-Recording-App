import React, { useState } from 'react';
import { TextInput, Button, Text, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

function LoginScreen ({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Email and Password are required")
            return
        }

        try {
            await auth().signInWithEmailAndPassword(email, password)
            Alert.alert("Success", "Logged in successfully!")
            navigation.navigate("Home")
        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }

    return(
        <View>
            <Text>Login</Text>
            <TextInput
            placeholder='Email Address'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            />

            <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />

            <Button title='Login' onPress={handleLogin} />
            <Text onPress={() => navigation.navigate("Register")}>
                Don't have an account? Register here
            </Text>
        </View>
    )
}

export default LoginScreen