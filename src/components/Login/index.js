import React from 'react'
import axios from 'axios'

const Login = () => {
  const onChange = event => {
    console.log(event.target.value)
  }

  const onSubmit = () => {
    axios.post('c27ee1b8.ngrok.io/api/connectionStatus').then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <div>Log in</div>
      <span>Email</span>
      <input></input>
      <span>Password</span>
      <input onChange={event => onChange(event)}></input>
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}

export default Login
