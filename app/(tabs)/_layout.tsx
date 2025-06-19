import { Tabs } from 'expo-router';
import React from 'react';
import Colors from '../../constants/Colors.jsx';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  // const [fontsLoaded] = useFonts({
  //   'outfit': require('./../assets/fonts/outfit-Regular.ttf'),
  //   'outfit-bold': require('./../assets/fonts/outfit-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null; // or <LoadingScreen />
  // }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    />
  );
}
