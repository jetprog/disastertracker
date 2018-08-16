import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends React.Component {
  responseFacebook (response) {
    console.log(response)
  }

  render () {
    return (
      <FacebookLogin
        appId = {process.env.FACEBOOK}
        autoLoad = {true}
        fields = "name,email"
        scope = "public_profile"
        callback={this.responseFacebook}
        buttonText='Facebook Login'
      />
    )
  }
}
