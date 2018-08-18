import React from 'react'
import { GoogleLogin } from 'react-google-login'

export default function Google ({clickHandler}) {
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE}
      onSuccess={response => clickHandler('google', response)}
      onFailure={response => clickHandler('google', null, response)}
    >
    Google Login
    </GoogleLogin>
  )
}
