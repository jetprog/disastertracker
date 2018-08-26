import React from 'react'
import LoginLogoutWrapper from '../components/LoginLogoutWrapper.jsx'
import { shallow, mount } from 'enzyme'

describe('LoginLogoutWrapper Component', () => {
  it('login modal open state should be false', () => {
    var wrapper = shallow(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    var checkLoginOpen = wrapper.state().loginFormOpen
    expect(checkLoginOpen).toEqual(false)
  })
  it('Login button should exist when no user is logged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    expect(wrapper.find('button.loginButton').exists()).toEqual(true)
  })
  it('Login button should not exist when user is lgged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={true}/>)
    expect(wrapper.find('button.loginButton').exists()).toEqual(false)
  })
  it('Signup button should exist when no user is logged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    expect(wrapper.find('button.signupButton').exists()).toEqual(true)
  })
  it('Signup button should not exist when user is lgged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={true}/>)
    expect(wrapper.find('button.signupButton').exists()).toEqual(false)
  })
  it('Logout button should not exist when no user is logged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    expect(wrapper.find('button.logoutButton').exists()).toEqual(false)
  })
  it('Logout button should exist when user is lgged in', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={true}/>)
    expect(wrapper.find('button.logoutButton').exists()).toEqual(true)
  })
  it('Login form should not exist before login button is clicked', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    expect(wrapper.find('.loginForm').exists()).toEqual(false)
  })
  it('Login form should exist if login button is clicked', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    var loginbutton = wrapper.find('button.loginButton')
    loginbutton.simulate('click')
    expect(wrapper.find('.loginForm').exists()).toEqual(true)
  })
  it('Signup form should not exist before login button is clicked', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    expect(wrapper.find('.signupForm').exists()).toEqual(false)
  })
  it('Signup form should exist if login button is clicked', () => {
    var wrapper = mount(<LoginLogoutWrapper userIsLoggedIn={false}/>)
    var signupbutton = wrapper.find('button.signupButton')
    signupbutton.simulate('click')
    expect(wrapper.find('.signupForm').exists()).toEqual(true)
  })
})
