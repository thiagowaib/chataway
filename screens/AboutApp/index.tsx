import { Box, VStack, Text, Pressable, Center } from "native-base"
import { Linking } from "react-native"
import { Header } from "../../components"
export default function AboutApp(){

  const openRepo = async() => {
    const repoUrl = `https://github.com/thiagowaib/wpp-url-texter#whatsapp-url-texter`

    await Linking.canOpenURL(repoUrl)
    Linking.openURL(repoUrl)
  }

  const openDevProfile = async() => {
    const profileUrl = `https://github.com/thiagowaib`

    await Linking.canOpenURL(profileUrl)
    Linking.openURL(profileUrl)
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
      <Header screenName={"AboutApp"}/>
      <Text
      color={"secondary.200"}
      mt={10}
      fontSize={16}
      textAlign={"center"}
      >
        This is a personal project by
      </Text>
      <Text
      color={"purple.200"}
      fontWeight={700}
      fontSize={16}
      textAlign={"center"}
      onPress={openDevProfile}
      >
        @thiagowaib at Github.
      </Text>
      <Text
      color={"secondary.200"}
      mt={6}
      textAlign={"center"}
      fontSize={16}
      >
        You can visit the project’s page with the 
        button below to view the whole documentation. 👌
      </Text>
      <Center>
          <Pressable
          bg="transparent"
          px={6}
          py={3}
          mt={6}
          borderRadius={20}
          borderWidth={2}
          borderColor={"purple.200"}
          onPress={openRepo}
          _pressed={{
            background: "#9783A920"
          }}
          >
            <Text
            fontWeight={'bold'}
            color="purple.200"
            fontSize={16}
            >
              Open Project Repository
            </Text>
          </Pressable>
        </Center>
      </VStack>
    </Box>
  )
}