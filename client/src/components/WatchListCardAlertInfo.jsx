import React, { Component } from 'react'
import { Typography, Button, ButtonBase,
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, Divider, Tooltip, Zoom} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

export default class WatchListCardAlertInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      infoOpen: false
    }
    this.tooltipText = this.props.alert.parameters.NWSHeadline || this.props.alert.headline
    this.alertPop = this.alertPop.bind(this)
  }
  alertPop () {
    this.setState({infoOpen: true})
  }
  render () {
    return (
      <React.Fragment>
        <Tooltip TransitionComponent={Zoom} title={this.tooltipText} placement="top-end">
          <Typography>{`${this.props.alert.event}  `}
            <ButtonBase onClick={this.alertPop}><InfoIcon /></ButtonBase>
          </Typography>
        </Tooltip>
        <Dialog
          open={this.state.infoOpen}
          onClose={() => this.setState({infoOpen: false})}
        >
          <DialogTitle id="alert-dialog-title">{this.props.alert.headline}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" paragraph align="left">
              {this.props.alert.description}
            </DialogContentText>
            <Divider inset />
            <DialogContentText id="alert-dialog-description" paragraph align="left">
              {this.props.alert.instruction}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({infoOpen: false})} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}
