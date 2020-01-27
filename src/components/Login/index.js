import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const baseURL = 'https://c27ee1b8.ngrok.io/'

const Login = props => {
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
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [])

  const login = event => {
    event.preventDefault()

    setState({ errorMessage: false })
    event.preventDefault()
    axios({
      method: 'post',
      url: `${baseURL}login`,
      data: {
        email: event.target.Email.value,
        password: event.target.Password.value
      }
    })
      .then(response => {
        Cookies.set('token', response.data.access_token, { expires: 1 })
        Cookies.set('username', response.data.username, { expires: 1 })
        // props.login(
        //   response.data.access_token,
        //   response.data.username,
        //   false
        // )
      })
      .catch(error => {
        console.log('xxx', error)
        setState({ errorMessage: error.response.data.message })
      })
  }

  return (
    <>
      <div>Login:</div>

      <div className='form-p'>
        <form onSubmit={event => login(event)}>
          <label className='form-label'>Email</label>
          <input
            className='login-text'
            type='email'
            placeholder='Email'
            autoComplete='email'
            name='Email'
            required
          />
          <br />
          <label className='form-label'>Password</label>
          <input
            className='login-text'
            type='password'
            autoComplete='password'
            placeholder='Password'
            name='Password'
            required
          />
          <br />
          <input className='login-submit' type='submit' value='Submit' />
        </form>
      </div>
    </>
  )
}

export default Login
