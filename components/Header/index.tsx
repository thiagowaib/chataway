import React from 'react'
import { VStack, Text, Divider } from 'native-base'

export default function Header() {

    const getWelcome = () => {
        const hours = new Date().getHours()
        let welcome = ''
        
        if(hours >= 6 && hours < 12)
            welcome = "Bom dia! 🌅"
        else if(hours >= 12 && hours < 18)
            welcome = "Boa tarde! ☀️"
        else if(hours >= 18 && hours < 0)
            welcome = "Boa noite! 🌙"
        else
            welcome = "Boa Madrugada! 🦉"
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
        bg={"green.200"}
        width={150}
        mt={2}
        borderWidth={1.5}
        borderColor={"green.200"}
        borderRadius={100}
        />
    </VStack>
  )
}
