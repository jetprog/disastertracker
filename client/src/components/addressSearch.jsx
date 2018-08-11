import React, { Component } from 'react'
import AsyncSelect from 'react-select/lib/Async'
import axios from 'axios'

const makeAddressLine = ({ houseNumber, street, city, state, postalCode }) =>
  `${houseNumber + ' ' || ''}${street + ', ' || ''}${city + ', ' || ''}${state +
    '  ' || ''}${postalCode || ''}`

const parseSuggestions = ({suggestions}) =>
  suggestions.map(suggestion => ({
    value: suggestion.locationId,
    label: makeAddressLine(suggestion.address)
  }))

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputAddress: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.loadOptions = this.loadOptions.bind(this)
  }

  handleInputChange (inputAddress) {
    this.setState({ inputAddress })
  };

  loadOptions (inputAddress, callback) {
    if (inputAddress.length < 4) { return [] }
    const params = {
      country: 'USA',
      query: inputAddress,
      app_code: process.env.HERE_APP_CODE,
      app_id: process.env.HERE_APP_ID
    }
    axios
      .get('http://autocomplete.geocoder.api.here.com/6.2/suggest.json', { params })
      .then(response => callback(parseSuggestions(response.data)))
  };

  handleSelectedOne (choice) {
    console.log(`Choice selected was ${choice.label}`)
  }

  render () {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
          placeholder="Address..."
          onChange={this.handleSelectedOne}
        />
      </div>
    )
  }
}
