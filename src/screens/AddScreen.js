import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { addUser, clearUser } from '../../redux/actions'
import InputForm from '../components/InputForm'

const AddScreen = ({ addUser, clearUser }) => {
  useEffect(() => {
    clearUser()
  }, [])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <InputForm
        onSubmit={addUser}
        label='Add User' />
    </View>
  )
}

export default connect(null, {
  addUser,
  clearUser
})(AddScreen)
