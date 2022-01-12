import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addUser, clearUser } from '../../redux/actions'
import InputForm from '../components/InputForm'

const AddScreen = ({ addUser, clearUser }) => {
  useEffect(() => {
    clearUser()
  }, [])
  return (
    <InputForm
      onSubmit={addUser}
      label='Add User' />
  )
}

export default connect(null, { 
  addUser,
  clearUser
 })(AddScreen)
