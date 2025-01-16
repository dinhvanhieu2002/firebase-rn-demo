import { View, Text, Image, ImageProps, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { bottomTabs, icons } from '../../constants'
import Ionicons from '@expo/vector-icons/Ionicons'

type TabIconProps = {
  icon: any
  color: string
  name: string
  focused: boolean
}
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <Ionicons
      name={focused ? icon : `${icon}-outline`}
      size={24}
      color={color}
    />
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#333',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        {bottomTabs.map((item, index) => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={item.icon}
                  color={color}
                  focused={focused}
                  name={item.name}
                />
              )
            }}
          />
        ))}
      </Tabs>
    </>
  )
}

export default TabsLayout
