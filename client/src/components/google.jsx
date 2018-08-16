import React from 'react'
import { GoogleLogin } from 'react-google-login'

export default class Google extends React.Component {
  responseGoogle (response) {
    console.log(response)
  }

  render () {
    return (
      <GoogleLogin
        clientId={process.env.GOOGLE}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        buttonText='Login with Google'
      />

    )
  }
}
