const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload
    case 'USER_ADDED':
        console.log(state);
    default:
      return state
  }
}