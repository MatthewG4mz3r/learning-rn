import { View, Text } from 'react-native'
import React from 'react'
import { UserAuth } from '../../tools/context/auth_context'
import { Button } from '../../components/button'
import { useNavigation } from '@react-navigation/native'

const AllChats = () => {
  const { user, logout } = UserAuth();
  const email = String(user.email).slice();
  const navigation = useNavigation();

  return (
    <View>
      <Text>fuckin</Text>

      <Button 
        title="Logout"
        clickHandler={() => {
          logout();
          navigation.navigate("index");
        }}
      />
    </View>
  )
}

export default AllChats