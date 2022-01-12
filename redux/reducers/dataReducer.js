const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload
    case 'LIST_UPDATE':
      const newuser = () => {
        return state.map(item => {
          return item.id == action.payload.id ? action.payload : item
        })
      }
      return newuser()
    case 'LIST_CHANGE':
      const newlist = () => {
        return state.map(item => {
          return item.id == action.payload ? '' : item
        })
      }
      return newlist()
    case 'NEW_USER':
      const adduser = [action.payload].concat(state)
      return adduser
    default:
      return state
  }
}