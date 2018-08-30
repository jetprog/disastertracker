import React from 'react';
import Search from './Search.jsx';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

export default class WatchListAddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryLocation: false,
      locationName: '',
      mapLocation: {
        latitude: '',
        longitude: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.addNewLocation = this.addNewLocation.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBoxChange(e) {
    this.setState({ [e.target.value]: e.target.checked });
  }

  handleSearchClick(location) {
    const { latitude, longitude } = location.displayPosition;
    this.setState({ mapLocation: { latitude, longitude } });
  }

  addNewLocation() {
    const location = {
      loc_name: this.state.locationName,
      lat: this.state.mapLocation.latitude,
      long: this.state.mapLocation.longitude,
      primary: this.state.primaryLocation,
      user_id: this.props.userInfo.user_id
    };

    this.props.handleLocationForm();
    this.props.addLocation(location);
  }

  render() {
    return (
      <Grid container spacing={8} justify="center">
        <Grid item xs={10}>
          <Typography variant="title">Add New Location</Typography>
        </Grid>
        <Grid item xs={10}>
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
        </Grid>
        <Grid item xs={10}>
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
        </Grid>
        <Grid item xs={10}>
          <Search handleSearchClick={this.handleSearchClick} />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addNewLocation}
          >
            Add Location
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleLocationForm()}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    );
  }
}
