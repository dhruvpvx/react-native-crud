import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { editUser, getUser } from '../../redux/actions'
import InputForm from '../components/InputForm'

const EditScreen = ({ editUser,getUser, route }) => {
  const id = route.params.id
  useEffect(() => {
    getUser(id)
  }, [])
  return (
    <InputForm
      uId={id}
      onSubmit={editUser}
      label='Update User' />
  )
}

export default connect(null, { 
  editUser,
  getUser
 })(EditScreen)

