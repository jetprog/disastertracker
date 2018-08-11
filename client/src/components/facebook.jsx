  import React from 'react';
  import FacebookLogin from 'react-facebook-login';
  import config from '../../../config/config'

  class Facebook extends React.Component {
    responseFacebook(response) {
      console.log(response);
    }

    render() {
      return (
        <FacebookLogin
          appId = {config.facebookID}
          autoLoad = {true}
          fields = "name,email,picture"
          scope = "public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      )
    }
  }

  export default Facebook;