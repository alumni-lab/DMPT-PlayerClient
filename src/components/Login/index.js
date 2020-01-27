import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const baseURL = 'https://c27ee1b8.ngrok.io/'

const Login = props => {
  const onChange = event => {
    console.log(event.target.value)
  }

  const [state, setState] = useState({
    new_user: false,
    errorMessage: false,
    serverOnline: false,
    screenWidth: ''
  })

  useEffect(() => {
    if (!Cookies.get('token')) {
      axios({
        method: 'get',
        url: `${baseURL}api/connectionStatus`
      })
        .then(response => {
          if (response.data.message === 'ONLINE')
            setState({
              serverOnline: true
            })
          console.log(`test Online`)
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [])

  return (
    <>
      <div>Log in</div>
      <span>Email</span>
      <input></input>
      <span>Password</span>
      <input onChange={event => onChange(event)}></input>
      <button>Submit</button>
    </>
  )
}

export default Login
