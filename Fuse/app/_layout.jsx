import { SafeAreaView, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './index.jsx'
import { SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import Signup from './signup.jsx'
import Signin from './signin.jsx'

SplashScreen.preventAutoHideAsync();

const stack = createNativeStackNavigator();

const setStatusBarWhite = () => {
    return (
        <StatusBar style="light" />
    )
}

const RootComponent = () => {
    const [fontsLoaded, fontError] = useFonts({
            "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
            "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
            "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
            "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
            "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
            "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
            "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
            "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
            "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
    })

    useEffect(() => {
        if (fontError) throw fontError;
        
        const hideSplash = async () => {
            await SplashScreen.hideAsync();
        }

        hideSplash();
    }, [])
    

    return (
        <>
            <stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <stack.Screen name="index" component={HomeScreen} />
                <stack.Screen name="signup" component={Signup} />
                <stack.Screen name="signin" component={Signin} />
            </stack.Navigator>
        </>
    )
}

export default RootComponent