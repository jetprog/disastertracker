import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Modal,
  Paper,
  ButtonBase
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchListCardAlert from './WatchListCardAlert.jsx';
import WatchListDeleteLocation from './WatchListDeleteLocation.jsx';

const styles = {
  cardStyle: {
    color: '#3f51b5',
    backgroundColor: 'white',
    border: '1px solid #1f2f82',
    margin: '1px 3px 4px 1px',
    boxShadow: '2px 2px #a7acca'
  },
  cardHeader: {
    color: '#3f51b5',
    backgroundColor: 'white',
    padding: '10px 10px 5px 15px'
  },
  cardContent: {
    color: '#3f51b5',
    backgroundColor: 'white',
    fontSize: '.95rem',
    padding: '0px 10px 5px 15px'
  },
  deleteStyle: {
    color: '#9e9e9e',
    backgroundColor: 'white',
    fontSize: '.65rem',
    padding: '0px 0px 5px -10px'
  },
  paperStyle: {
    position: 'absolute',
    width: '45%',
    backgroundColor: 'white',
    border: '1px solid',
    padding: 3
  },
  modalStyle: {
    top: '15%',
    left: '15%'
  }
};

export default class WatchListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteLocationForm: false
    };
    this.handleLocationForm = this.handleLocationForm.bind(this);
  }

  handleLocationForm() {
    this.setState({ deleteLocationForm: false });
  }

  render() {
    return (
      <Card
        style={styles.cardStyle}
        onClick={() =>
          this.props.handleLocationClick({
            latitude: this.props.location.lat,
            longitude: this.props.location.long
          })
        }
      >
        <CardHeader
          title={this.props.location.loc_name}
          style={styles.cardHeader}
        />
        <CardContent style={styles.cardContent}>
          <WatchListCardAlert
            location={{
              latitude: this.props.location.lat,
              longitude: this.props.location.long
            }}
            listenForAlerts={this.props.listenForAlerts}
          />
          <Grid
            item
            container
            xs={12}
            alignItems="flex-start"
            direction="column"
          >
            <ButtonBase
              onClick={() => this.setState({ deleteLocationForm: true })}
            >
              <DeleteIcon />
            </ButtonBase>
          </Grid>
          <Modal style={styles.modalStyle} open={this.state.deleteLocationForm}>
            <Paper style={styles.paperStyle}>
              <WatchListDeleteLocation
                style={styles.deleteStyle}
                handleLocationForm={this.handleLocationForm}
                deleteLocation={this.props.deleteLocation}
                location={this.props.location}
              />
            </Paper>
          </Modal>
        </CardContent>
      </Card>
    );
  }
}
