import React from 'react'
import Login from '../components/Login.jsx'
import { shallow, mount } from 'enzyme'

describe('Login Component', () => {
  it('Login email field should be empty when form is loaded', () => {
    var wrapper = shallow(<Login />)
    var emailField = wrapper.find('.loginEmailField')
    expect(emailField.exists()).toEqual(true)
  })
})
