import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import FormInput from '../components/form_input';
import Button from '../components/button';
import Link from '../components/link';

const Signup = () => {
  const insets = useSafeAreaInsets();
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView className="bg-background">
        <View className="mt-[5%]">
          <StatusBar style="light" backgroundColor="#181414" />
          <Image 
            source={require("../assets/icons/logo.png")}
            className="w-[145px] h-[145px]"
          />

          <Text className="font-ibold text-white text-[25px] ml-6">Sign Up To Fuse</Text>
        
          <FormInput 
            extraStyle="mx-6 mt-6"
            fieldName="Name"
            value={form.name}
            onChange={(text) => {
              setForm({...form, name: text});
            }}
          />

          <FormInput 
            fieldName="Email"
            value={form.email}
            onChange={(text) => setForm({...form, email: text})}
            extraStyle="mx-6 mt-6"
          />

          <FormInput 
            fieldName="Password"
            value={form.password}
            onChange={(text) => setForm({...form, password: text})}
            extraStyle="mx-6 mt-6"
          />

            <View className="items-center">
              <Button 
                additionalStyles="mt-10 w-[87%] h-[78px]"
                title="Sign Up"
                clickHandler={() => {}}
                password={true}
              />
          </View>

          <View className="flex-row mt-6 mx-6">
            <Text className="text-white text-[20px]">
              Already have an account? { }
            </Text>

            <Link
              text="Sign In Here"
              linkTo="signin"
              extraStyle={"text-[20px]"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Signup