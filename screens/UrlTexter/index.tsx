import { Box, VStack, Text, Select, HStack, Center, Button, Pressable } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import MaskInput from 'react-native-mask-input'
import { useState } from "react"
import { Header } from "../../components"
import { Linking } from "react-native"
export default function UrlTexter(){

  const [country, setCountry] = useState<string>("BR")
  const [number, setNumber] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(false)

  let BRnumberMask = [
    '(', /\d/, /\d/, ')', ' ',
    /\d/, /\d/, /\d/, /\d/, /\d/, '-',
    /\d/, /\d/, /\d/, /\d/
  ]

  let USnumberMask = [
    '(', /\d/, /\d/, /\d/, ')', ' ',
    /\d/, /\d/, /\d/,
    /\d/, /\d/, /\d/, /\d/
  ]
  
  const filterFirstZero = (number:string) => {
    if(number[0]==="0")
      return number.slice(0, -1)
    else
      return number
  }

  const validateNumber = (number:string) => {
    if(country === "BR" && number.length === 11)
      setIsValid(true)
    else if(country === "US" && number.length === 10)
      setIsValid(true)
    else
      setIsValid(false)
  }

  const openConversation = async () => {
    const countryCode = country === "BR" ? "55" : "1"
    const formatedNumber = `${countryCode}${number}`
    const wppUrl = `https://wa.me/${formatedNumber}`

    await Linking.canOpenURL(wppUrl)
    Linking.openURL(wppUrl)
  }

  const clearInput = () => {
    setNumber("")
    setIsValid(false)

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
      <Header screenName={"UrlTexter"}/>
      <Text
      color={"secondary.200"}
      mt={10}
      fontSize={16}
      lineHeight={20}
      textAlign={"center"}
      >
        Insert a phone number below in order 
        to open a conversation on Whatsapp 
        without saving the contact
      </Text>
      <HStack
      mt={8}
      >
        <Select 
        selectedValue={country} 
        defaultValue={"BR"}
        accessibilityLabel="Choose a Country Code" 
        placeholder="🇧🇷"
        onValueChange={value => setCountry(value)}
        w={70}
        borderColor={"green.200"}
        borderBottomRightRadius={0}
        _selectedItem={{
          borderColor: 'green.200',
          borderWidth: 2,
          borderRadius: 25,
        }}
        >
          {/* @ts-ignore */}
          <Select.Item label="🇧🇷" value="BR"/>
          {/* @ts-ignore */}
          <Select.Item label="🇺🇸" value="US"/>
        </Select>

        {/* @ts-ignore */}
        <MaskInput
          value={number}
          keyboardType={"numeric"}
          onChangeText={(masked, unmasked) => {
            validateNumber(filterFirstZero(unmasked))
            setNumber(filterFirstZero(unmasked))
          }}
          mask={country==="BR"?BRnumberMask:USnumberMask}
          style={{
            color: "#F5F5F5",
            paddingHorizontal: 10,
            flex: 1,
            borderBottomColor: "#1A9C94",
            borderBottomWidth: 1,
            fontSize: 16,
          }}
          placeholder={country==="BR"?"(xx) xxxxx-xxxx":"(xxx) xxxxxxx"}
          placeholderTextColor="#A2A2A2"
        />
        <Button
        px={2}
        py={0}
        pt={1}
        ml={-1}
        borderBottomColor="green.200"
        borderBottomWidth={1}
        bg={"transparent"}
        onPress={clearInput}
        _pressed={{
          background: "#1A9C9410"
        }}
        >
          <AntDesign name="closecircleo" size={16} color={"#A2A2A2"}/>
        </Button>
      </HStack>
        <Center>
          <Pressable
          bg="green.200"
          px={6}
          py={3}
          mt={6}
          borderRadius={20}
          disabled={!isValid}
          _disabled={{
            opacity: .2,
          }}
          onPress={openConversation}
          _pressed={{
            background: "#1A9C9490"
          }}
          >
            <Text
            fontWeight={'bold'}
            color="secondary.400"
            fontSize={16}
            >
              Open Conversation
            </Text>
          </Pressable>
          <Text
          color={"secondary.200"}
          mt={8}
          fontSize={14}
          fontWeight={300}
          textAlign={"center"}
          >
        This will only open the chat, 
        but won’t send any unwanted messages, 
        don’t worry! 😉
      </Text>
        </Center>
      </VStack>
    </Box>
  )
}