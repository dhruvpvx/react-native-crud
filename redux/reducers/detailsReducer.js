const INITIAL_STATE = {
  name: '',
  email: '',
  gender: 'Male',
  status: 'Inactive',
  error: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload
    case 'NAME_CHANGED':
      return {...state, name: action.payload}
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload}
    case 'GENDER_CHANGED':
      return {...state, gender: action.payload}
    case 'STATUS_CHANGED':
      return {...state, status: action.payload}
      case 'ERROR':
        return {...state, error: action.payload}
    case 'SUCCESS':
      return INITIAL_STATE
    default:
      return state
  }
}