import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { setName, setGender, setMail, setStatus } from '../../redux/actions';
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
  error,
  onSubmit,
  uId
}) => {
  const { pop } = useNavigation()
  const [errors, seterrors] = useState([])
  useEffect(() => {
    seterrors(() => error.map(item => {
      return [`[${item.field} ${item.message}]\n` ]
    }))
  }, [error])
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder='Name'
        style={styles.input} />
      <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{errors}</Text>
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
      <TouchableOpacity onPress={() => onSubmit(uId, name, email, gender, status, pop)}>
        <View style={styles.btn}>
          <Text style={styles.btntext}>{label}</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = ({ Details }) => {
  const { name, email, gender, status, error } = Details
  if(error){
    return { name, email, gender, status, error }
  }
  return { name, email, gender, status }
}

export default connect(mapStateToProps, {
  setName,
  setGender,
  setMail,
  setStatus
})(InputForm)

InputForm.defaultProps = {
  uId: '',
  error: []
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    elevation: 10,
    paddingTop: 30
  },
  input: {
    height: 45,
    width: 300,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    elevation: 5
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
