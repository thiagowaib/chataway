import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HStack, Pressable, VStack, Text } from 'native-base'
import React from 'react'

export default function BottomTab() {

  const navigation = useNavigation()
  const [currentScreen, setCurrentScreen] = useState("UrlTexter")

  const GoToAboutApp = () => {
    // @ts-ignore
    navigation.navigate("AboutApp")
    setCurrentScreen("AboutApp")
  }

  const GoToUrlTexter = () => {
    // @ts-ignore
    navigation.navigate("UrlTexter")
    setCurrentScreen("UrlTexter")
  }

  return (
    <HStack 
        safeAreaBottom
        safeAreaLeft
        safeAreaRight
        bg={"secondary.100"}
        borderTopColor={"green.200"}
        borderTopWidth={2}
        justifyContent={"space-evenly"}
        py={3}
        px={3}
        >
          <Pressable onPress={GoToUrlTexter}>
            <VStack
            alignItems={"center"}
            >
              <Text
              color={"green.200"}
              px={7}
              py={3}
              fontSize={18}
              fontWeight={700}
              borderBottomColor={currentScreen==="UrlTexter"?"green.200":"secondary.100"}
              borderBottomWidth={1.5}
              opacity={currentScreen==="UrlTexter"?1:.6}
              >Url Texter</Text>
            </VStack>
          </Pressable>
          <Pressable onPress={GoToAboutApp}>
            <VStack
            alignItems={"center"}
            >
              <Text
              color={"green.200"}
              fontSize={18}
              px={7}
              py={3}
              fontWeight={700}
              borderBottomColor={currentScreen==="AboutApp"?"green.200":"secondary.100"}
              borderBottomWidth={1.5}
              opacity={currentScreen==="AboutApp"?1:.6}
              >About App</Text>
            </VStack>
          </Pressable>
        </HStack>
  )
}
