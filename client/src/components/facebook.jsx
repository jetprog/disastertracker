import React from 'react'
import Button from '@material-ui/core/Button'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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
        render={renderProps => (
          <Button variant="contained" onClick={renderProps.clickHandler} color="primary">Facebook Login</Button>
        )}
      />

    )
  }
}
