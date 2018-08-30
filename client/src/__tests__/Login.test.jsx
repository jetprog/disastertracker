import React from 'react';
import Login from '../components/Login.jsx';
import { shallow } from 'enzyme';

describe('Login Component', () => {
  it('Should have an email field', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find('.loginEmailField').exists()).toEqual(true);
  });
  it('Should have a password field', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find('.loginPasswordField').exists()).toEqual(true);
  });
  it('Should have a login button', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find('.loginLoginButton').exists()).toEqual(true);
  });
  it('Should have a cancel button', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find('.loginCancelButton').exists()).toEqual(true);
  });
  it('Should have a Google login button', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find('.loginGoogleButton').exists()).toEqual(true);
  });
});
