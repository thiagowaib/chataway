import { Box, VStack, Text } from "native-base"
import { Header } from "../../components"
export default function AboutApp(){
  return (
    <Box 
    bg={"secondary.100"}
    flex={1}
    px={10}
    py={5}
    >
      <VStack
      safeArea
      >
      <Header/>
      <Text color="white">About App</Text>
      </VStack>
    </Box>
  )
}