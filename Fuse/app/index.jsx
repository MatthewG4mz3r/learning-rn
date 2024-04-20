import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../components/button';
import {insets} from '../tools/constants'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <ScrollView style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
        className="bg-[#181414]"
      >
        <StatusBar barStyle="light-content" backgroundColor="#181414" />
        <View className="items-center mt-[25%]">
          <Image
            source={require("../assets/icons/logo.png")}
            className="w-[280px] h-[280px]"
          />

          <Text className="relative mt-[-15px] w-full font-ibold text-white text-4xl text-center">Chat With Ease</Text>

          <View className="relative w-full">
            <Text className="font-imedium text-white text-lg mt-5 w-full text-center">Where boundaries { }
              <Text className="font-ibold text-xl text-primary"
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'italic'
                }}
              >Fuse { }</Text>
              <Text className="font-imedium text-white text-lg w-full text-center">seamlessly</Text>
            </Text>
            <Text className="font-imedium text-white text-lg text-center">into conversations</Text>
          </View>

          <Button 
            title="Join With Email"
            clickHandler={() => {
                navigation.navigate("signup");
            }}
            additionalStyles="mt-10 w-[80%] h-[90px]"
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default HomeScreen