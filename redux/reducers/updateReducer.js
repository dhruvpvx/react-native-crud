const INITIAL_STATE = {
  newUserId: null,
  editedUserId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_ADDED':
      return { newUserId: action.payload.id }
    case 'USER_EDITED':
      return { editedUserId: action.payload.id }
    default:
      return state
  }
}