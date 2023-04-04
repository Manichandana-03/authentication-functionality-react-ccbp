// Write your JS code here

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
// import {async} from 'rxjs'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const onLoginSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const getUserDetails = async () => {
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      onLoginSuccess(fetchedData.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={getUserDetails}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
