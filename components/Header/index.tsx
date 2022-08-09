import { VStack, Text, Divider } from 'native-base'
import React from 'react'

export default function Header() {

    const getWelcome = () => {
        const hours = new Date().getHours()
        let welcome = ''
        
        if(hours >= 6 && hours < 12)
            welcome = "Good Morning! ☀️"
        else if(hours >= 12 && hours < 18)
            welcome = "Good Afternoon! 🌳"
        else if(hours >= 18 && hours < 0)
            welcome = "Good Evening! 🌙"
        else
            welcome = "Howdy, Night Owl🦉"
        return welcome
    }

  return (
    <VStack>
        <Text
        color="secondary.300"
        fontSize={26}
        fontWeight={700}
        >{getWelcome()}</Text>
        <Divider
        bg="green.200"
        width={150}
        mt={2}
        borderWidth={1.5}
        borderColor={"green.200"}
        borderRadius={100}
        />
    </VStack>
  )
}
