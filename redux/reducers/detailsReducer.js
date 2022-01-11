import { logIfNoNativeHook } from "react-native/Libraries/Utilities/RCTLog"

const INITIAL_STATE = {
  name: '',
  email: '',
  gender: '',
  status: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'NAME_CHANGED':
      return {...state, name: action.payload}
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload}
    case 'GENDER_CHANGED':
      return {...state, gender: action.payload}
    case 'STATUS_CHANGED':
      return {...state, status: action.payload}
    case 'SUCCESS':
      return INITIAL_STATE
    default:
      return state
  }
}