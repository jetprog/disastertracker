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
        fields = "name,email,picture"
        scope = "public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
    )
  }
}
