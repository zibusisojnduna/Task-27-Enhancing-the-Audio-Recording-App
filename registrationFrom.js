import React, { use, useState } from 'react';
import { TextInput, Button, Text, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

function RegistrationScreen ({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required")
            return
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.")
        }

        try {
            await auth().createUserWithEmailAndPassword(email, password)
            Alert.alert("Sucess", "User created sucessfully!")
            navigation.navigate("Login")
        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }

    return(
        <View>
            <Text>Register</Text>
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

            <TextInput
            placeholder='Confrim Password'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            />

            <Button title='Register' onPress={handleRegister} />
        </View>
    )
}

export default RegistrationScreen