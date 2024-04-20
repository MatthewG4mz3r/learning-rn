import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, clickHandler, additionalStyles }) => {
  return (
    <View className={`w-full h-[100px] bg-primary rounded-3xl items-center justify-center ${additionalStyles}`}>
        <TouchableOpacity
            onPress={clickHandler}
            className="w-full h-full items-center justify-center"
        >
            <Text className="text-white text-imedium text-2xl">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button