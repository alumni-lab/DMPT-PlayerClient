import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const baseURL = 'https://c27ee1b8.ngrok.io/'

const Register = () => {
  const [state, setState] = useState({
    new_user: false,
    errorMessage: false,
    serverOnline: false,
    screenWidth: ''
  })

  const signup = event => {
    event.preventDefault()
    axios({
      method: 'post',
      url: `${baseURL}api/char/register`,
      data: {
        username: event.target.Username.value,
        email: event.target.Email.value,
        password: event.target.Password.value,
        UID: 'a4kCCwmy4xw33dpa'
      }
    })
      .then(response => {
        Cookies.set('token', response.data.access_token, { expires: 1 })
        Cookies.set('username', response.data.username, { expires: 1 })
        Cookies.set('player', false, { expires: 1 })
        console.log(response.data)
        // props.login(response.data.access_token, response.data.username, false)
      })
      .catch(error => {
        console.log(error.response.data.message)
        setState({ errorMessage: error.response.data.message })
      })
  }

  return (
    <>
      <div className='form-p'>
        <form onSubmit={signup}>
          <input type='hidden' value='disable-autofill' />
          <label className='form-label'>Username</label>
          <input
            className='login-text'
            type='username'
            autoComplete='user'
            placeholder='Username'
            name='Username'
            required
          />
          <br />

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
            placeholder='Password'
            autoComplete='new-password'
            name='Password'
            required
          />
          <br />

          <label className='form-label'>Referal Code</label>
          <input
            className='login-text'
            type='text'
            autoComplete='referal'
            placeholder='You must be referred to register'
            name='Verification'
            required
          />
          <input className='login-submit' type='submit' value='Submit' />
        </form>
      </div>
    </>
  )
}

export default Register
