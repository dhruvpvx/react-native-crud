import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { addUser } from '../../redux/actions'
import InputForm from '../components/InputForm'

const AddScreen = ({ addUser }) => {
  return (
    <InputForm
      onSubmit={addUser}
      label='Add User' />
  )
}

export default connect(null, {addUser})(AddScreen)

const styles = StyleSheet.create({})
