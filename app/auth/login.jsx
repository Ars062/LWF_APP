import React from 'react';
import { View, Text, Button, TextInput,TouchableOpacity, Pressable}from 'react-native';
import { useRouter } from 'expo-router';
import colors from './../../constants/colors';


export default function Login() {
    const router = useRouter();
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.WHITE,display: 'flex',padding: 20 }}>
            <Image source={require('../../assets/images/original.png')} 
            style={{ width: 100, height: 100,marginTop: 50 }}/>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Login Here</Text>
            <TextInput placeholder="Email" style={styles.textInput}/>
            <TextInput placeholder="Password" keyboardType='visible-password' style={styles.textInput}/>
            <TouchableOpacity style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: colors.WHITE, fontSize: 18,textAlign: 'center',}}>login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20, display:flex,gap:5 }}>
                <Text style={{ fontSize:6 }}>Don't have an account? </Text>
                <Pressable onPress={() => router.push('/auth/signup')}>
                    <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>Create Account</Text>
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
    borderradius: 5,
    fontSize: 14,
    width: '100%',
    padding: 10,
    marginTop:20
  }
});
