import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

const TabsNavigation = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: 'Chats', headerShown: false, tabBarIcon: ({size, color}) => (<FontAwesome5 name="home" size={size} color={color} />) }} />
            <Tabs.Screen name='profile' options={{ title: 'Profile', headerShown: false, tabBarIcon: ({size, color}) => <FontAwesome5 name="user-alt" size={size} color={color} /> }} />
        </Tabs>
    )
}

export default TabsNavigation