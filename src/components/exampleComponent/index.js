import React, { useState } from 'react'
import Login from '../Login'
import Register from '../Register'

const ExampleComponent = () => {
  const [state, setState] = useState(true)
  const login = () => {
    setState(true)
  }
  const register = () => {
    setState(false)
  }
  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      {state ? <Login /> : <Register />}
    </>
  )
}

export default ExampleComponent
