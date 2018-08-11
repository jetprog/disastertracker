import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import config from '../../../config/config'


class Facebook extends React.Component {
    responseGoogle(response) {
      console.log(response);
    }

   render(){
      <GoogleLogin
        clientId={config.googleID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
   }
}