import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FormInput = ({ fieldName, onChange, extraStyle, value, password }) => {
  const [ hidden, setHidden ] = useState(fieldName == "Password");

  return (
    <View className={`space-y-2 ${extraStyle}`}>
      <Text className="text-secondary-100 font-imedium text-[19px]">{fieldName}</Text>
      
       <View className={`w-[100%] h-[75px] flex-row justify-center border-[2px] border-secondary bg-secondary rounded-2xl focus:border-primary `}>
          <TextInput className="flex-1 w-full justify-center ml-5 text-white text-lg" 
                     onChangeText={(text) => onChange(text)}
                     value={value}
                     secureTextEntry={hidden == true}
          />

          { fieldName == "Password" ? (
            <View className="mr-3 justify-center">
            <TouchableOpacity 
              onPress={() => setHidden(!hidden)}
            >
              <Image 
                source={hidden ? require("../assets/icons/unhide.png") : require("../assets/icons/hide.png")}
                className="w-10 h-10"
                resizeMode='contain'
              />
            </TouchableOpacity>
            </View>
          ) : console.log()}
       </View>
    </View>
  )
}

export default FormInput