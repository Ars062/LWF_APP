import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../../constants/Colors';
import { createUserWithEmailAndPassword } from '../../firebaseConfig'; // Add this if you're using Firebase
import { auth } from '../../firebaseConfig'; // Make sure you import your Firebase auth instance

export default function Signup() {
  const router = useRouter();
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const CreateNewaccount = () => {
    if (!FullName || !Email || !Password || !ConfirmPassword) {
      alert('Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(Password)) {
      alert('Password must be at least 8 characters long and contain at least one letter and one number');
      return;
    }

    if (Password !== ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
        Alert.alert('Success', 'Account created successfully!');
        router.push('/auth/login');
      })
      .catch((error) => {
        console.error('Error:', error.message);
        Alert.alert('Signup Error', error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE, padding: 20 }}>
      <Image source={require('../../assets/images/original.png')} style={{ width: 100, height: 100, marginTop: 50 }} />
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Create new account</Text>
      <TextInput placeholder="Full name" onChangeText={(value) => setFullName(value)} style={styles.textInput} />
      <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} style={styles.textInput} />
      <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)} secureTextEntry={true} style={styles.textInput} />
      <TextInput placeholder="Confirm Password" onChangeText={(value) => setConfirmPassword(value)} secureTextEntry={true} style={styles.textInput} />
      <TouchableOpacity onPress={CreateNewaccount} style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: colors.WHITE, fontSize: 18, textAlign: 'center' }}>Create Account</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 20, display: 'flex' }}>
        <Text style={{ fontSize: 16 }}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/auth/login')}>
          <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>Login here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
    width: '100%',
    padding: 10,
    marginTop: 20,
  }
});
