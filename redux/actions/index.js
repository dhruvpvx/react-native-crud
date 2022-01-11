import axios from "axios"

export const getData = () => {
  return dispatch => {
    axios.get('https://gorest.co.in/public/v1/users')
      .then((response) => {
        dispatch({ type: 'GET_DATA', payload: response.data.data })
      })
  }
}

export const getUser = (uid) => {
  return dispatch => {
    axios.get(`https://gorest.co.in/public/v1/users/${uid}`)
      .then((response) => {
        dispatch({ type: 'GET_USER', payload: response.data.data })
      })
  }
}

export const addUser = (uid, name, email, gender = 'male', status = 'active', callback) => {
  return dispatch => {
    axios.post(`https://gorest.co.in/public/v1/users`, {
      name, gender, email, status
    },
      {
        headers: {
          Authorization: "Bearer 912a081839b1e833307b9b56bbdb7ebffb002fc14ab68ff5c1627032f3df7e75"
        }
      })
      .then(() => {
        callback()
        dispatch({ type: 'SUCCESS' })
      })
  }
}


export const setName = value => {
  return { type: 'NAME_CHANGED', payload: value }
}

export const setMail = value => {
  return { type: 'EMAIL_CHANGED', payload: value }
}

export const setGender = value => {
  return { type: 'GENDER_CHANGED', payload: value }
}

export const setStatus = value => {
  return { type: 'STATUS_CHANGED', payload: value }
}