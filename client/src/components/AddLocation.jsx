import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Search from './Search.jsx'

export default class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryLocation: false,
      locationName: '',
      mapLocation: {
        latitude: '',
        longitude: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }


  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  };

  handleBoxChange (e) {
    this.setState({[e.target.value]: e.target.checked});
  };

  handleSearchClick (location) {
    const {latitude, longitude} = location.displayPosition
    this.setState({mapLocation: {latitude, longitude}})
  };

  render() {
    return(
      <div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.primaryLocation}
                onChange={this.handleBoxChange}
                value="primaryLocation"
                color="primary"
              />
            }
            label="Primary Location"
          />
          <TextField
            autoFocus
            value={this.state.locationName}
            onChange={this.handleChange}
            name="locationName"
            margin="none"
            id="locationName"
            label="Location Name"
            type="locationName"
            fullWidth
          />
          <Search handleSearchClick={this.handleSearchClick} />
        </div>
        <br></br>
        <Button variant="contained" color="primary" onClick={this.props.handleLocationForm}>Add Location</Button>
      </div>
    )
  }
}