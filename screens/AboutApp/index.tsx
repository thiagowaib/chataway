import React from "react"
import { Box, VStack, Text, Pressable, Center } from "native-base"
import { Linking } from "react-native"
import { Header } from "../../components"
export default function AboutApp(){

  const openRepo = async() => {
    const repoUrl = `https://github.com/thiagowaib/chataway#readme`

    await Linking.canOpenURL(repoUrl)
    .then(()=>Linking.openURL(repoUrl))
  }

  const openDevProfile = async() => {
    const profileUrl = `https://github.com/thiagowaib`

    await Linking.canOpenURL(profileUrl)
    .then(()=>Linking.openURL(profileUrl))
    
  }

  return (
    <Box 
    bg={"secondary.100"}
    flex={1}
    px={10}
    py={5}
    pt={8}
    >
      <VStack
      safeArea
      >
      <Header/>
      <Text
      color={"secondary.200"}
      mt={10}
      fontSize={16}
      textAlign={"center"}
      >
        Esse aplicativo é um projeto pessoal por
      </Text>
      <Text
      color={"green.200"}
      fontWeight={700}
      fontSize={16}
      textAlign={"center"}
      onPress={openDevProfile}
      >
        @thiagowaib no Github.
      </Text>
      <Text
      color={"secondary.200"}
      mt={6}
      textAlign={"center"}
      fontSize={16}
      >
        Você pode visitar a página do projeto com o 
        botão abaixo para ver a documentação na íntegra.👌
      </Text>
      <Center>
          <Pressable
          bg="transparent"
          px={6}
          py={3}
          mt={6}
          borderRadius={20}
          borderWidth={2}
          borderColor={"green.200"}
          onPress={openRepo}
          _pressed={{
            background: "#1A9C9420"
          }}
          >
            <Text
            fontWeight={'bold'}
            color="green.200"
            fontSize={16}
            >
              Visitar Projeto
            </Text>
          </Pressable>
        </Center>
      </VStack>
    </Box>
  )
}