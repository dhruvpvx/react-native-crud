import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AddScreen from './src/screens/AddScreen'
import HomeScreen from './src/screens/HomeScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen';

const { Navigator, Screen } = createNativeStackNavigator()
const Navigation = () => {
  const { navigate } = useNavigation()
  return (
    <Navigator>
      <Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigate('add')}>
                <FontAwesome style={{marginRight: 10}} name="plus" size={30} color="black" />
              </TouchableOpacity>
            )
          }
        }} />
      <Screen
        name='edit'
        component={EditScreen}
        options={{
          headerTitle: 'Edit User'
        }} />
      <Screen
        name='add'
        component={AddScreen}
        options={{
          headerTitle: 'Add User'
        }} />
      <Screen
        name='show'
        component={ShowScreen}
      />
    </Navigator>
  )
}

export default Navigation
