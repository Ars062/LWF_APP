import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { View, Text,Image,StyleSheet, Touchable, TouchableOpacity,} from 'react-native';
import Colors from '../../constants/Colors.jsx';
import Signup from '../auth/Signup.js';



export default function Index() {
  const router=useRouter();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.WHITE}}>
      {/* <Image 
        source={require('../../assets/images/original.png')} 
        style={{ width: 200, height: 200,marginTop: 50 }} 
      /> */}
      <View style={{padding:30,backgroundColor: Colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,}}>
            <Text style={{fontSize:45,color:Colors.WHITE,textAlign:'center',}}>Hello Everyone!</Text>
            <Text style={{fontSize:30,color:Colors.WHITE,textAlign:'center',}}>let's Learn With Fun effortlessly using AI</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push('../auth/login')}>
            <Text style={styles.buttonText}>Get  started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('../auth/Signup')} style={[styles.button,{borderWidth:1,borderColor:Colors.primary,marginTop:10}]}>
            <Text  style={[styles.buttonText,{color:Colors.WHITE}]}>Already have an Account?</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
      button: {
      padding: 10,
      backgroundColor: Colors.Red,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
   
    // fontWeight: 'bold',
    // color: Colors.WHITE,

  }
});
