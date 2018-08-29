import React from 'react'
import Nav from '../Nav.jsx'
import {shallow} from 'enzyme'

describe('Nav bar', () => {
  it('has login open state false', () => {
    var wrapper = shallow(<Nav />)
    var checkLoginOpen = wrapper.state().loginFormOpen
    expect(checkLoginOpen).toEqual(false)
  })
  it('has status open state false', () => {
    var wrapper = shallow(<Nav />)
    var checkSignUpOpen = wrapper.state().signUpFormOpen
    expect(checkSignUpOpen).toEqual(false)
  })
  it('has a title of Disaster Tracker', () => {
    var wrapper = shallow(<Nav />)
    const node = wrapper.find('.appBarTitle').text()
    expect(node).toEqual('Disaster Tracker')
  })
})
