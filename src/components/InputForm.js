import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { setName, setGender, setMail, setStatus, addUser } from '../../redux/actions';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const InputForm = ({
  setName,
  setGender,
  setMail,
  setStatus,
  name,
  email,
  gender,
  status,
  label,
  onSubmit,
  uId,
  addUser
}) => {
  const { pop } = useNavigation()
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder='Name'
        style={styles.input} />
      <TextInput
        value={email}
        onChangeText={text => setMail(text)}
        placeholder='Email'
        style={styles.input} />
      <Picker
        style={styles.picker}
        selectedValue={gender}
        onValueChange={itemValue => setGender(itemValue)}>
        <Picker.Item label='Male' value='Male' />
        <Picker.Item label='Female' value='Female' />
      </Picker>
      <BouncyCheckbox
        style={{ marginTop: 30, marginRight: 10 }}
        isChecked={status == 'Active' ? true : false}
        size={30}
        fillColor="black"
        unfillColor="#FFFFFF"
        text="Active"
        iconStyle={{ borderColor: "black" }}
        onPress={(isChecked) => isChecked ? setStatus('Active') : setStatus('Inactive')}
      />
      <TouchableOpacity onPress={() => onSubmit(name, email, gender, status, pop)}>
        <View style={styles.btn}>
          <Text style={styles.btntext}>{label}</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = ({ Details }) => {
  const { name, email, gender, status } = Details
  return { name, email, gender, status }
}

export default connect(mapStateToProps, {
  setName,
  setGender,
  setMail,
  setStatus,
  addUser
})(InputForm)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    marginBottom: 150,
    marginTop: 80,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 20,
    marginVertical: 20
  },
  picker: {
    marginTop: 20,
    height: 30,
    width: 108,
  },
  btn: {
    padding: 10,
    backgroundColor: 'lightpink',
    borderRadius: 15,
    marginVertical: 50,
    marginRight: 10
  },
  btntext: {
    fontWeight: 'bold',
    fontSize: 20
  }
})
