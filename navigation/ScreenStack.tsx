
import {AboutApp, UrlTexter} from '../screens'
import {BottomTab} from '../components'

import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
          initialRouteName="UrlTexter"
          screenOptions={() => ({
            headerShown: false,
          })}
          tabBar={() => (<BottomTab/>)}
        >
          <Tab.Screen name="UrlTexter" component={UrlTexter} />
          <Tab.Screen name="AboutApp" component={AboutApp} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default function ScreenStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="Main" component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}