import { VStack, Text, Divider } from 'native-base'
import React from 'react'

interface HeaderProps {
    screenName: "UrlTexter" | "AboutApp"
}

export default function Header(props: HeaderProps) {

    const getWelcome = () => {
        const hours = new Date().getHours()
        let welcome = ''
        
        if(hours >= 6 && hours < 12)
            welcome = "Good Morning! 🌅"
        else if(hours >= 12 && hours < 18)
            welcome = "Good Afternoon! ☀️"
        else if(hours >= 18 && hours < 0)
            welcome = "Good Evening! 🌙"
        else
            welcome = "Howdy, Night Owl🦉"
        return welcome
    }

    const getColor = () => {
        if (props.screenName === "UrlTexter")
            return "green.200"
        else if (props.screenName === "AboutApp")
            return "purple.200"
    }

  return (
    <VStack>
        <Text
        color="secondary.300"
        fontSize={26}
        fontWeight={700}
        >{getWelcome()}</Text>
        <Divider
        bg={getColor()}
        width={150}
        mt={2}
        borderWidth={1.5}
        borderColor={getColor()}
        borderRadius={100}
        />
    </VStack>
  )
}
