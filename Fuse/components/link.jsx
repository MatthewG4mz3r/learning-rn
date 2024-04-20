import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Link = ({ text, linkTo, extraStyle }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        className={extraStyle}
        onPress={() => {navigation.navigate(linkTo)}}
      >
        <Text className={`text-primary ${extraStyle}`}>{text}</Text>
      </TouchableOpacity>
    </>
  )
}

export default Link