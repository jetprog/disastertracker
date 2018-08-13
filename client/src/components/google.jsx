import React from 'react'
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'

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
      />
    )
  }
}
