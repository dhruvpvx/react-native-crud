import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { editUser, getUser } from '../../redux/actions'
import InputForm from '../components/InputForm'

const EditScreen = ({ editUser, getUser, route }) => {
  const id = route.params.id
  useEffect(() => {
    getUser(id)
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <InputForm
        uId={id}
        onSubmit={editUser}
        label='Update User' />
    </View>
  )
}

export default connect(null, {
  editUser,
  getUser
})(EditScreen)

