import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import InputForm from './src/components/InputForm'
import ItemList from './src/components/ItemList'
import AddScreen from './src/screens/AddScreen'
import HomeScreen from './src/screens/HomeScreen'
import ShowScreen from './src/screens/ShowScreen'

const { Navigator, Screen } = createNativeStackNavigator()

const Navigation = () => {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerRight: () => {
            <TouchableOpacity>
              <FontAwesome name="plus" size={30} color="black" />
            </TouchableOpacity>
          }
        }} />
      <Screen
      name='add'
      component={AddScreen}/>
      <Screen
       name='show'
       component={ShowScreen}
      />
    </Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})
